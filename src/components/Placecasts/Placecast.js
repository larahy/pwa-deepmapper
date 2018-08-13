import React from 'react'
import PropTypes from 'prop-types'
import AudioClip from '../Audio/AudioClip'

export default class Placecast extends React.Component {
    render() {
        return <div>
            <p >{this.props.placecast.title}</p>
            <p >{this.props.placecast.coordinates}</p>
            <AudioClip
                key={this.props.placecast.id}
                placecast={this.props.placecast}/>

        </div>
    }
}

Placecast.propTypes = {
    placecast: PropTypes.object.isRequired,
}