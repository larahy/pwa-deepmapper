import React from 'react'
import PropTypes from 'prop-types';
import {Validity} from '../../constants/attributes'

export default class Field extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        helperText: PropTypes.string,
        value: PropTypes.string,
        onInitialisation: PropTypes.func,
        onCompletion: PropTypes.func,
        onChange: PropTypes.func,
        validity: PropTypes.string,
        scope: PropTypes.string,
        tags: PropTypes.array
    }

    static defaultProps = {
        value: '',
        onInitialisation: () => {
        },
        onCompletion: () => {
        },
        onChange: () => {
        },
        validity: Validity.NOT_APPLICABLE,
        tags: []
    }

    constructor(props) {
        super(props)
        this.state = {value: props.value}
    }

    componentDidMount() {
        this.props.onInitialisation(this.getFieldState())
    }

    storeInputElement(element) {
        this.inputElement = element
    }

    getFieldState() {
        const {name, scope, tags} = this.props
        const {value} = this.state
        return {name, value, scope, tags, validations: []}
    }

    render() {
        return (
            <div/>
        )
    }
}
