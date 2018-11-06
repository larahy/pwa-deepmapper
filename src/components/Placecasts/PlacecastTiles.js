import React from 'react'
import PropTypes from 'prop-types'
import PlacecastTile from './PlacecastTile'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faListUl, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class PlacecastTiles extends React.Component {
    static propTypes = {
        filtered: PropTypes.bool,
        placecasts: PropTypes.array.isRequired,
        filteredPlacecasts: PropTypes.array,
        loggedInExpert: PropTypes.number
    }

    render() {
        const noPlacecastsYetElement = (
            <div className='placecasts-loading'>
                <p>
                    Loading placecasts&hellip;
                </p>
            </div>
        )

        const placecastsLoadingMessage = (this.props.placecasts.length < 1)
            ? noPlacecastsYetElement
            : null

        const placecastTiles = this.props.filtered && this.props.loggedInExpert ?
            this.props.filteredPlacecasts.map(placecast => {
                return (
                    <PlacecastTile key={placecast.id} placecast={placecast} editable={true}/>
                )
            })
            : this.props.placecasts.map(placecast => {
                return (
                    <PlacecastTile key={placecast.id} placecast={placecast} editable={false}/>
                )
            })

        return (
            <div>
                <div>
                    {placecastsLoadingMessage}
                    <div className='home-icons'>
                        <div className='list-icon'>
                            <span><FontAwesomeIcon icon={faListUl}/></span>
                        </div>
                        <div className='map-icon'>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                        </div>
                    </div>
                    <div className='placecast-tiles'>
                        {placecastTiles}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlacecastTiles
