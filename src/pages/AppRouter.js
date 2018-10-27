// /* eslint-disable */

import React, {Fragment} from 'react';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import PlacecastsPage from './PlacecastsPage'
import PhotoPage from './PhotoPage'
import MapPage from '../components/Maps/Mapbox/MapPage'
import LoginPage from './LoginPage'
import {AboutPage} from './AboutPage'
import AudioPage from './AudioPage'
import StreetViewPage from './StreetViewPage'
import CreateMapPage from './MapPage'
import ReviewPage from './ReviewPage'
import PlacecastPage from './PlacecastPage'
import FooterContainer from '../containers/Shared/FooterContainer'
import MyDeepmapperPage from './MyDeepmapperPage'
import HomePage from './HomePage'
import BecomeADeepmapperPage from './BecomeADeepmapperPage'

const AppRouter = () => (
    <HashRouter >
        <Fragment>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/about' component={AboutPage} exact={true}/>
                <Route path='/create/photo' component={PhotoPage} exact={true}/>
                <Route path='/create/audio' component={AudioPage} exact={true}/>
                <Route path='/create/street-view' component={StreetViewPage} exact={true}/>
                <Route path='/create/map' component={CreateMapPage} exact={true}/>
                <Route path='/create/review' component={ReviewPage} exact={true}/>
                <Route path='/mapbox-map' component={MapPage} exact={true}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/my-deepmapper' component={MyDeepmapperPage}/>
                <Route path='/apply' component={BecomeADeepmapperPage}/>
                <Route exact path='/placecasts' component={PlacecastsPage}/>
                <Route path='/placecasts/:id' component={PlacecastPage}/>
                <Redirect to="/"/>
            </Switch>
            <FooterContainer />
        </Fragment>
    </HashRouter>
);

export {AppRouter};
