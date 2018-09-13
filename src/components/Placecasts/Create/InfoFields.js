import React from 'react'
import PropTypes from 'prop-types';
import '../styles.scss'
import NotifyingInput from '../../../containers/Shared/NotifyingInput'
import NotifyingTextarea from '../../../containers/Shared/NotifyingTextarea'
import {AttributeScopes, Validations, Tags} from '../../../constants/attributes'

export default class InfoFields extends React.Component {
    static propTypes = {
        onNext: PropTypes.func
    }
    static defaultProps = {
        onNext: () => {}
    }

    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateInfo = (e) => {
        e.preventDefault()
    }

    handleSubmit (event) {

        console.log('handling submit');
        event.preventDefault()
        this.props.onNext()
    }


    render() {

        return (

            <div className="steps-container">
                <div className="container">
                    <h2 className="subtitle is-4">
                        Please choose a title for your placecast
                    </h2>
                    <form onSubmit={this.handleSubmit}>
                        <NotifyingInput
                            name='title'
                            description='title'
                            type='text'
                            validations={[
                                {name: Validations.MANDATORY}
                            ]}
                            scope={AttributeScopes.CREATE}
                            tags={[Tags.INFO]}
                            helperText='Title is compulsory'
                        />
                        <NotifyingTextarea
                            name='subtitle'
                            description='subtitle'
                            type='text'
                            scope={AttributeScopes.CREATE}
                            tags={[Tags.INFO]}
                            maxLength='255'
                            helperText='Subtitle must be fewer than 255 characters'
                        />
                        <button type="submit" className="button">alternative button</button>
                    </form>
                </div>
            </div>

        )
    }


}
