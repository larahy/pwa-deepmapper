import React from 'react'
import PropTypes from 'prop-types'

const PhotoPanel = (props) => {
    const src = props.sourceUrl === '' ? 'https://bulma.io/images/placeholders/480x480.png' : props.sourceUrl

    return (
        <figure className="image is-square">
            <img src={src}/>
        </figure>
    )
}

PhotoPanel.propTypes = {
    sourceUrl: PropTypes.string
}

export default PhotoPanel
