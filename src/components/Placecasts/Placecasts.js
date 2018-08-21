import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Placecast from './Placecast'
import {getPlacecasts} from '../../selectors/placecasts'

class Placecasts extends React.Component {
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
            return (<Placecast
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

Placecasts.propTypes = {
    placecasts: PropTypes.array,
}

const mapStateToProps = (state) => {
    return {
        placecasts: getPlacecasts(state),
    };
};

export default connect(mapStateToProps)(Placecasts);