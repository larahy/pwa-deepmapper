import React from 'react'
import PropTypes from 'prop-types'


// import ScopedNotification from '../../containers/common/ScopedNotification'
import PlacecastTile from './PlacecastTile'
// import {
//     NotificationScopes,
//     NotificationTypes
// } from '../../constants/notifications'

class PlacecastTiles extends React.Component {
    static propTypes = {
        filtered: PropTypes.bool,
        placecasts: PropTypes.array.isRequired,
        filteredPlacecasts: PropTypes.array
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

        const placecastTiles = this.props.filtered ?
            this.props.filteredPlacecasts.map(placecast => {
                return (
                    <PlacecastTile key={placecast.id} placecast={placecast}/>
                )
            })
            : this.props.placecasts.map(placecast => {
                return (
                    <PlacecastTile key={placecast.id} placecast={placecast}/>
                )
            })

        return (
            <div>
                {/*<ScopedNotification*/}
                {/*scopes={[*/}
                {/*NotificationScopes.FETCH_RECIPES,*/}
                {/*NotificationScopes.PLACE_ORDER*/}
                {/*]}*/}
                {/*types={[ NotificationTypes.ERROR ]} />*/}
                <div>
                    {placecastsLoadingMessage}
                    <div className='placecast-tiles'>
                        {placecastTiles}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlacecastTiles
