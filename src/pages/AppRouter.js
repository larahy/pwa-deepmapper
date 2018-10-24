/* eslint-disable */

import React, {Fragment} from 'react';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
// import {ConnectedRouter} from 'connected-react-router'
import PlacecastsPage from './PlacecastsPage'
import S3Page from '../components/Unused/S3Page'
import PhotoPage from './PhotoPage'
import InfoPage from '../components/Unused/InfoPage'
import MapPage from '../components/Maps/Mapbox/MapPage'
import LoginPage from './LoginPage'
import RecordPage from '../components/Unused/RecordPage'
import {AboutPage} from './AboutPage'
import AudioPage from './AudioPage'
import StreetViewPage from './StreetViewPage'
import CreateMapPage from './MapPage'
import ReviewPage from './ReviewPage'
import PlacecastPage from './PlacecastPage'
import FooterContainer from '../containers/Shared/FooterContainer'
import MyProfilePage from './MyProfilePage'
import HomePage from './HomePage'

const AppRouter = () => (
    <HashRouter >
        <Fragment>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/about' component={AboutPage} exact={true}/>
                <Route path='/create/photo' component={PhotoPage} exact={true}/>
                <Route path='/create/info' component={InfoPage} exact={true}/>
                <Route path='/create/audio' component={AudioPage} exact={true}/>
                <Route path='/create/street-view' component={StreetViewPage} exact={true}/>
                <Route path='/create/map' component={CreateMapPage} exact={true}/>
                <Route path='/create/review' component={ReviewPage} exact={true}/>
                <Route path='/mapbox-map' component={MapPage} exact={true}/>
                <Route path='/s3' component={S3Page}/>
                <Route path="/record" component={RecordPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/my-profile' component={MyProfilePage}/>
                {/*<Route path='/experts/:number' component={IndividualExpert}/>*/}
                <Route exact path='/placecasts' component={PlacecastsPage}/>
                <Route path='/placecasts/:id' component={PlacecastPage}/>
                <Redirect to="/"/>
            </Switch>
            <FooterContainer />
        </Fragment>
    </HashRouter>
);

export {AppRouter};
