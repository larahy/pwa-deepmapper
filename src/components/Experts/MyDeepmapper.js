import React from 'react'
import PropTypes from 'prop-types'

export default class MyDeepmapper extends React.Component {
    static propTypes = {
        user: PropTypes.object
    }


    render() {
        const {first_name, last_name, email, bio} = this.props.user
        return (
            <div>
                <h3>{first_name}</h3>
                <h3>{last_name}</h3>
                <h3>{email}</h3>
                <h3>{bio}</h3>
            </div>
        )
    }
}
