import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
import {ErrorMessageFactory} from '../../constants/attributes'
import connect from 'react-redux/es/connect/connect'
import {getError} from '../../selectors/errors'
import {removeError} from '../../actions/Errors'

class Error extends React.Component {
    static propTypes = {
        closeNotification: PropTypes.func,
        error: PropTypes.object
    }

    constructor() {
        super()
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
    }

    handleCloseNotification(event) {
        this.props.closeNotification()
        event.preventDefault()
    }

    render() {
        const {error} = this.props
        const errorMessage = isEmpty(error)
            ? null
            : ErrorMessageFactory[error.statusText]
        const errorNotification = isEmpty(error) ? null :
            <div className="notification is-danger">
                <button className="delete" onClick={this.handleCloseNotification}></button>
                {errorMessage}
            </div>
        return (
            <Fragment>
                {errorNotification}
            </Fragment>

        )
    }
}

export const mapStateToProps = (state) => {
    return {
        error: getError(state)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        closeNotification: () => dispatch(removeError()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error);
