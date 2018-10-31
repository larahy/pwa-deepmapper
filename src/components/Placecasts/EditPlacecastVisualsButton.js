import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {updateIsEditing} from '../../actions/edit'
import {getDisplayEditVisualsButton} from '../../selectors/edit'
import './styles.scss'

class EditPlacecastVisualsButton extends React.Component {

    constructor(props) {
        super(props)
        this.updateIsEditing = this.updateIsEditing.bind(this)
    }

    updateIsEditing(event) {
        event.preventDefault()
        this.props.updateIsEditing(true)
    }

    render() {
        const {displaySelf} = this.props
        console.log('display edit button', displaySelf)
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
        updateIsEditing: (value) => dispatch(updateIsEditing(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlacecastVisualsButton);

