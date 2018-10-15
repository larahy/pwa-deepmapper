import React from 'react'
import PropTypes from 'prop-types'
import PlacecastFeedView from './PlacecastFeedView'

export default class PlacecastsFeed extends React.Component {
    static propTypes = {
        placecasts: PropTypes.array,
    }

    render() {
        const { placecasts = [] } = this.props;

        const noPlacecastsYetElement = (
            <div>
                <p>
                    Loading placecasts&hellip;
                </p>
            </div>
        )
        const emptyElement = <div/>

        const placecastsLoadingMessage = (this.props.placecasts.length < 1)
            ? noPlacecastsYetElement
            : emptyElement

        const placeCastsCards = placecasts.map(placecast => {
            return (<PlacecastFeedView
                key={placecast.id}
                placecast={placecast}/>)
        })

        return (
            <div>
                <div>
                    {placecastsLoadingMessage}
                    <div>
                        {placeCastsCards}
                    </div>
                </div>
            </div>
        )
    }
}
