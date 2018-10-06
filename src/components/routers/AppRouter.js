/* eslint-disable */

import React, {Fragment} from 'react';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
// import {ConnectedRouter} from 'connected-react-router'
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import PlacecastsPage from '../../containers/PlacecastsPage'
import S3Page from '../Unused/S3Page'
import PhotoPage from '../../containers/Placecasts/Create/Pages/PhotoPage'
import InfoPage from '../Unused/InfoPage'
import MapPage from '../../components/Maps/ReactMapGl/MapPage'
import ReactGoogleMapsStreetView from '../../components/Maps/ReactGoogleMapsStreetView'
// import LargeMap from '../../components/Maps/UnusedReactGoogleMaps1'
import LoginPage from '../../containers/Users/LoginPage'
import RecordPage from '../Unused/RecordPage'
import {AboutPage} from '../../containers/AboutPage'
import AudioPage from '../../containers/Placecasts/Create/Pages/AudioPage'
import StreetViewPage from '../../containers/Placecasts/Create/Pages/StreetViewPage'
import CreateMapPage from '../../containers/Placecasts/Create/Pages/MapPage'
import ReviewPage from '../../containers/Placecasts/Create/Pages/ReviewPage'
import Placecast from '../../containers/Placecasts/Placecast'

const AppRouter = () => (
    <HashRouter >
        <Fragment>
            <Header/>
            <Switch>
                <Route path='/' component={MapPage} exact={true}/>
                <Route path='/about' component={AboutPage} exact={true}/>
                <Route path='/create/photo' component={PhotoPage} exact={true}/>
                <Route path='/create/info' component={InfoPage} exact={true}/>
                <Route path='/create/audio' component={AudioPage} exact={true}/>
                <Route path='/create/street-view' component={StreetViewPage} exact={true}/>
                <Route path='/create/map' component={CreateMapPage} exact={true}/>
                <Route path='/create/review' component={ReviewPage} exact={true}/>
                <Route path='/mapbox-map' component={MapPage} exact={true}/>
                <Route path='/street-view' component={ReactGoogleMapsStreetView}/>
                <Route path='/s3' component={S3Page}/>
                <Route path="/record" component={RecordPage}/>
                <Route path='/login' component={LoginPage}/>
                {/*<Route path='/experts/:number' component={IndividualExpert}/>*/}
                <Route exact path='/placecasts' component={PlacecastsPage}/>
                <Route path='/placecasts/:id' component={Placecast}/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </Fragment>
    </HashRouter>
);

export {AppRouter};
