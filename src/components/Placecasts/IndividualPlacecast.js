import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
import StaticStreetViewContainer from '../../containers/Maps/StaticStreetViewContainer'
import PhotoPanel from '../Photo/PhotoPanel'
import ExpertProfileContainer from '../../containers/Experts/ExpertProfileContainer'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import {goToHomePageThunk} from '../../actions/navigation'
import IndividualPlacecastViewToggleContainer from '../../containers/Placecasts/IndividualPlacecastViewToggleContainer'
import PlaybackPanel from '../../components/Audio/PlaybackPanel'
import SingleMapbox from '../Maps/SingleMapbox'

class IndividualPlacecast extends React.Component {
    static propTypes = {
        placecasts: PropTypes.array.isRequired,
        placecast: PropTypes.object,
        currentView: PropTypes.string
    }

    render() {
        const {placecast = {}} = this.props
        if (isEmpty(placecast)) {
            return <div>Loading...</div>;
        }
        else {
            const {title, address, audioSrc, photoSrc, user_id} = placecast
            const {currentView} = this.props
            // const coordinates = `[ ${address.lat} , ${address.lng} ]`;
            const streetViewElement = currentView === 'street-view' ?
                <StaticStreetViewContainer address={address}/> : null
            const photoElement = currentView === 'photo' ? <PhotoPanel sourceUrl={photoSrc}/> : null
            const expertElement = currentView === 'expert' ? <ExpertProfileContainer id={user_id}/> : null
            const mapElement = currentView === 'map' ? <SingleMapbox address={address}/> : null
            return (
                <Fragment>
                    <HeaderWithNavigationContainer
                        displayBackButton={true}
                        displayNextButton={false}
                        title={title}
                        onBack={goToHomePageThunk()}
                    />

                    <section className='create-section'>
                        <div className='create-mid-section'>
                            <IndividualPlacecastViewToggleContainer/>
                            {photoElement}
                            {streetViewElement}
                            {mapElement}
                            {expertElement}
                        </div>

                        <div className='create-bottom-section'>
                            <PlaybackPanel src={audioSrc}/>
                        </div>
                    </section>
                </Fragment>
            )
        }
    }
}

export default IndividualPlacecast;
