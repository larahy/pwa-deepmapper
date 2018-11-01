import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getDisplayEditAudioButton} from '../selectors/edit'
import '../components/Placecasts/styles.scss'
import {updateIsEditingAudio} from '../../actions/edit'

class EditAudioButton extends React.Component {

    constructor(props) {
        super(props)
        this.updateIsEditingAudio = this.updateIsEditingAudio.bind(this)
    }

    updateIsEditingAudio(event) {
        event.preventDefault()
        this.props.updateIsEditingAudio(true)
    }

    render() {
        const {displaySelf} = this.props
        const buttonClasses = displaySelf ? 'button' : 'is-hidden'
        return (
            <a className={buttonClasses} onClick={this.updateIsEditingAudio}> edit audio </a>
        )
    }
}

EditAudioButton.propTypes = {
    displaySelf: PropTypes.bool,
    updateIsEditingAudio: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        displaySelf: getDisplayEditAudioButton(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateIsEditingAudio: (value) => dispatch(updateIsEditingAudio(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAudioButton);

