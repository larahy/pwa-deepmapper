import React from 'react'
import PropTypes from 'prop-types'

export default class ExpertProfile extends React.Component {
    static propTypes = {
        expert: PropTypes.object
    }

    render() {
        const {first_name, last_name, bio} = this.props.expert
        return (
            <div className='expert-container'>
                <h3>{first_name}</h3>
                <h3>{last_name}</h3>
                <h3>{bio}</h3>
            </div>
        )
    }
}
