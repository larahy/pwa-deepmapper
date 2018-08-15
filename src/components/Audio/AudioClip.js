import React from 'react'
import PropTypes from 'prop-types'


export default class AudioClip extends React.Component {
    render() {
        return <div>
            <audio controls>
                <source src={`http://d31dl1irjvblxj.cloudfront.net/${this.props.placecast.s3_audio_filename}`}/>
                Your browser does not support the audio element.
            </audio>
        </div>
    }
}

AudioClip.propTypes = {
    placecast: PropTypes.object.isRequired,
}

