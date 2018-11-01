import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash'
import PropTypes from 'prop-types'
import {getAddress, isReadyToSubmitInfo} from '../../selectors/create'
import SearchBar from '../../containers/Maps/NotifyingSearchBar'
import UpdatableInfoFields from '../../containers/Placecasts/UpdatableInfoFields'
import GoogleMapsWrapper from '../../containers/Maps/GoogleMapsWrapper'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import {Headers} from '../../constants/attributes'
import CreateSequenceContinueButtonContainer from '../CreateSequenceContinueButtonContainer'
import {step1Completed} from '../../actions/create2'
import {CreateSequenceInstructions} from '../CreateSequenceInstructions'
/* eslint-disable no-undef */
const googleMapsApiKey = GOOGLE_MAPS_API_KEY

/* eslint-disable no-undef */

class InfoPage extends Component {

    static propTypes = {
        isReadyToSubmit: PropTypes.bool
    }

    render() {
        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={false}
                    displayNextButton={true}
                    title={Headers.DEEPMAPPER}
                    readyToSubmit={this.props.isReadyToSubmit}
                    onNext={dispatch => (dispatch(step1Completed()))}/>
                <GoogleMapsWrapper
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '80px'}}/>}
                    mapElement={<span style={{display: 'none'}}/>}>
                    <CreateSequenceInstructions stepNumber='1'/>
                    <UpdatableInfoFields/>
                    <SearchBar/>
                    <CreateSequenceContinueButtonContainer
                        isClickable={this.props.isReadyToSubmit}
                        onContinue={dispatch => (dispatch(step1Completed()))}/>
                </GoogleMapsWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isReadyToSubmit: isReadyToSubmitInfo(state) && !isEmpty(getAddress(state))
    };
};

export default connect(mapStateToProps)(InfoPage);

