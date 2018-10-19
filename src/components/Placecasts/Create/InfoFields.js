import React from 'react'
import PropTypes from 'prop-types';
import '../styles.scss'
import NotifyingInput from '../../../containers/Shared/NotifyingInput'
// import NotifyingTextarea from '../../../containers/Shared/NotifyingTextarea'
import {Scopes, Validations, Tags} from '../../../constants/attributes'

export default class InfoFields extends React.Component {
    static propTypes = {
        onNext: PropTypes.func
    }
    static defaultProps = {
        onNext: () => {
        }
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateInfo = (e) => {
        e.preventDefault()
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onNext()
    }


    render() {

        return (

            <div className="steps-container">
                <form onSubmit={this.handleSubmit}>
                    <NotifyingInput
                        name='title'
                        description='TITLE'
                        type='text'
                        validations={[
                            {name: Validations.MANDATORY}
                        ]}
                        scope={Scopes.CREATE}
                        tags={[Tags.INFO]}
                        helperText='Title is compulsory'
                    />
                    {/*<button type="submit" className="button">alternative button</button>*/}
                </form>
            </div>

        )
    }


}
