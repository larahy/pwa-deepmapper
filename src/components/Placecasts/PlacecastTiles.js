import React from 'react'
import PropTypes from 'prop-types'
import PlacecastTile from './PlacecastTile'

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
                    <div className='placecast-tiles'>
                        {placecastTiles}
                    </div>
                </div>
            </div>
        )
    }
}

export default PlacecastTiles
