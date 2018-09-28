import React from 'react'
import PropTypes from 'prop-types';
import Promise from 'bluebird'
import {find, isEmpty} from 'lodash'
import Field from './Field'
import {Validations} from '../../constants/attributes'


export default class Input extends Field {
    static propTypes = {
        ...Field.propTypes,
        validations: PropTypes.array,
        errors: PropTypes.array,
        maxLength: PropTypes.string,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        ...Field.defaultProps,
        type: 'text',
        validations: [],
        errors: [],
        maxLength: '',
        disabled: false
    }

    errorMessageFactories = {
        [Validations.MANDATORY]: () => {
            return `Please enter a ${this.props.description} to proceed`
        },
        [Validations.MAX_LENGTH]: () => {
            const {description, validations} = this.props
            const maxLength = find(validations, ['name', Validations.MAX_LENGTH]).value

            return `${description} must be less than ${maxLength} characters`
        }
    }

    constructor(props) {
        super(props)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    getFieldState() {
        const {validations} = this.props
        return {...super.getFieldState(), validations}
    }

    handleBlur() {
        this.props.onCompletion(this.getFieldState())
    }

    handleChange() {
        Promise.try(() => this.setState({value: this.inputElement.value}))
            .tap(() => this.props.onChange(this.getFieldState()))
    }

    getValidationErrorElement() {
        const {errors} = this.props
        if (!isEmpty(errors)) {
            const message = this.errorMessageFactories[errors[0]].bind(this)()
            return (
                <div className='has-text-danger'>{message}</div>
            )
        }
    }

    render() {
        const {value} = this.state
        const {name, description, type, maxLength, disabled, errors} = this.props
        const inputClasses = !isEmpty(errors) ? 'input is-primary is-danger' : 'input is-primary'
        // const helperClasses = !isEmpty(errors) ? 'help is-danger' : 'help'
        const inputElement = (
            <div className="control">
                <input
                    className={inputClasses}
                    ref={element => this.storeInputElement(element)}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    maxLength={maxLength}
                    disabled={disabled}
                    placeholder={description}
                />
            </div>)

        // const labelElement = (
        //     <label className="label is-uppercase" htmlFor={name}>{description}</label>
        // )
        // const helperElement = (
        //     <p className={helperClasses}>{helperText}</p>
        // )

        return (
            <div className="field">
                {/*{labelElement}*/}
                {inputElement}
                {/*{helperElement}*/}
                {this.getValidationErrorElement()}
                {this.props.children}
            </div>
        )
    }
}
