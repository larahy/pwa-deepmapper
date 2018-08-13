import React from 'react'
import PropTypes from 'prop-types'


export default class AudioClip extends React.Component {
    render() {
        return <div>
            <p >{this.props.placecast.subtitle}</p>
            <audio controls>
                <source src="http://d31dl1irjvblxj.cloudfront.net/Brown_Hart_Gardens.mp3" />
                        Your browser does not support the audio element.
            </audio>
        </div>
    }
}

AudioClip.propTypes = {
    placecast: PropTypes.object.isRequired,
}

