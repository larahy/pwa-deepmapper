import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {updateIsEditing} from '../actions/edit'
import {getDisplayEditVisualsButton} from '../selectors/edit'
import '../components/Placecasts/styles.scss'

class EditPlacecastVisualsButton extends React.Component {

    constructor(props) {
        super(props)
        this.updateIsEditing = this.updateIsEditing.bind(this)
    }

    updateIsEditing(event) {
        event.preventDefault()
        this.props.updateIsEditing()
    }

    render() {
        const {displaySelf} = this.props
        const buttonClasses = displaySelf ? 'button' : 'is-hidden'
        return (
            <a className={buttonClasses} onClick={this.updateIsEditing}> edit </a>
        )
    }
}

EditPlacecastVisualsButton.propTypes = {
    displaySelf: PropTypes.bool,
    updateIsEditing: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        displaySelf: getDisplayEditVisualsButton(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateIsEditing: () => dispatch(updateIsEditing())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlacecastVisualsButton);

