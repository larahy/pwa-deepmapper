import React from 'react'
import PropTypes from 'prop-types'
import Placecast from './Placecast'

class Placecasts2 extends React.Component {
    static propTypes = {
        placecasts: PropTypes.array,
    }

    render() {
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

        const recipeCards = this.props.placecasts.map(placecast => {
            return (<Placecast
                key={placecast.id}
                placecast={placecast}/>)
        })

        return (
            <div>
                <div>
                    {placecastsLoadingMessage}
                    <div>
                        {recipeCards}
                    </div>
                </div>
            </div>
        )
    }
}

export default Placecasts2
