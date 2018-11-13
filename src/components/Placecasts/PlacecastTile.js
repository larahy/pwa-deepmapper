import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import PhotoPanel from '../Photo/PhotoPanel'
import {editPlacecast} from '../../actions/edit'
import {goToPlacecastPage} from '../../actions/navigation'

class PlacecastTile extends React.Component {

    constructor(props) {
        super(props)
        this.goToEditPage = this.goToEditPage.bind(this)
        this.goToPlacecastPage = this.goToPlacecastPage.bind(this)
    }


    goToEditPage(event) {
        event.preventDefault()
        this.props.goToEditPage(this.props.placecast)
    }

    goToPlacecastPage(event) {
        event.preventDefault()
        this.props.goToPlacecastPage(this.props.placecast.id)
    }



    render() {
        const {editable} = this.props
        const {title, address, photoSrc} = this.props.placecast
        const onClick = editable ? this.goToEditPage : this.goToPlacecastPage
        const coordinates = `[ ${address.lat} , ${address.lng} ]`
        return (
            <div style={{ marginBottom: '45px' }}>
                <a onClick={onClick}>
                    <div>
                        <PhotoPanel sourceUrl={photoSrc}/>
                    </div>
                    <div className='placecast-header'>
                        <h2>{title}</h2>
                        <p>{coordinates}</p>
                    </div>
                </a>
            </div>
        )

    }
}

PlacecastTile.propTypes = {
    placecast: PropTypes.object.isRequired,
    editable: PropTypes.bool.isRequired,
    goToEditPage: PropTypes.func,
    goToPlacecastPage: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        goToEditPage: placecast => dispatch(editPlacecast({placecast})),
        goToPlacecastPage: id => dispatch(goToPlacecastPage({id}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacecastTile);

