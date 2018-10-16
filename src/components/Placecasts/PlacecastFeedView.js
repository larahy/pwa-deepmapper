import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import PhotoPanel from '../Photo/PhotoPanel'


class PlacecastFeedView extends React.Component {

    render() {
        const {title, id, address, photoSrc, audioSrc, currentView} = this.props.placecast
        const linkToPlacecast = `placecasts/${id}`
        const coordinates = `[ ${address.lat} , ${address.lng} ]`
        const photoElement = currentView === 'photo' ? <PhotoPanel sourceUrl={photoSrc}/> : null
        return (
            <div>
                <Link to={linkToPlacecast}>
                    <div>{title}</div>
                    <div>{coordinates}</div>
                    {photoElement}
                    <div className="box">
                        <audio controls src={audioSrc}></audio>
                    </div>
                </Link>
            </div>
        )

    }
}

PlacecastFeedView.propTypes = {
    placecast: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};




export default connect(mapStateToProps)(PlacecastFeedView);

