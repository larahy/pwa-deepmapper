import React from 'react'
import PropTypes from 'prop-types'
import AudioClipPlayback from '../Audio/AudioClipPlayback'

export default class Placecast extends React.Component {
    render() {
        return <div className='container is-fluid'>
            <AudioClipPlayback
                key={this.props.placecast.id}
                placecast={this.props.placecast}/>
            <p>{this.props.placecast.title}</p>
            <p>{this.props.placecast.s3_audio_filename}</p>
            <p>{this.props.placecast.subtitle}</p>
            <p>{this.props.placecast.coordinates}</p>


        </div>
    }
}

Placecast.propTypes = {
    placecast: PropTypes.object.isRequired,
}