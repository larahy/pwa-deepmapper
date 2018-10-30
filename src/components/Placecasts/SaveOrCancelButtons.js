import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {updateIsEditing} from '../../actions/edit'
import { getDisplaySaveOrCancelButtons} from '../../selectors/edit'
import './styles.scss'

class SaveOrCancelButtons extends React.Component {

    constructor(props) {
        super(props)
        this.onSave = this.onSave.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    onSave(event) {
        event.preventDefault()
        this.props.onSave()
    }

    onCancel(event) {
        event.preventDefault()
        this.props.onCancel()
    }

    render() {
        const {displaySelf} = this.props
        const buttonClasses = displaySelf ? 'button' : 'is-hidden'
        return (
            <Fragment>
                <a className={buttonClasses} onClick={this.onSave}> Save</a>
                <a className={buttonClasses} onClick={this.onCancel}> Cancel</a>
            </Fragment>
        )
    }
}

SaveOrCancelButtons.propTypes = {
    displaySelf: PropTypes.bool,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        displaySelf: getDisplaySaveOrCancelButtons(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSave: (value) => dispatch(updateIsEditing(value)),
        onCancel: (value) => dispatch(updateIsEditing(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveOrCancelButtons);

