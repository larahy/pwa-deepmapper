import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import PhotoPanel from '../Photo/PhotoPanel'

class PlacecastTile extends React.Component {

    render() {
        const {title, id, address, photoSrc} = this.props.placecast
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

