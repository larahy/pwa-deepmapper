import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import PhotoPanel from '../Photo/PhotoPanel'

class PlacecastTile extends React.Component {

    render() {
        const {title, id, address, photoSrc, audioSrc} = this.props.placecast
        const linkToPlacecast = `placecasts/${id}`
        const coordinates = `[ ${address.lat} , ${address.lng} ]`
        return (
            <div>
                <Link to={linkToPlacecast}>
                    <div>{title}</div>
                    <div>{coordinates}</div>
                    <div>
                        <PhotoPanel sourceUrl={photoSrc}/>
                    </div>
                    <div className="box">
                        <audio controls src={audioSrc}></audio>
                    </div>
                </Link>
            </div>
        )

    }
}

PlacecastTile.propTypes = {
    placecast: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};


export default connect(mapStateToProps)(PlacecastTile);

