import React from 'react'
import PropTypes from 'prop-types'

export default class ExpertProfile extends React.Component {
    static propTypes = {
        expert: PropTypes.object
    }

    render() {
        const { first_name, last_name, bio } = this.props.expert
        return (
            <div className='expert-container'>
                <h1>{first_name} {last_name}</h1>
                <p>{bio}</p>
            </div>
        )
    }
}
