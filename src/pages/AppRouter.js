// /* eslint-disable */

import React, {Fragment} from 'react';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import PlacecastsPage from './PlacecastsPage'
import NewCreatePage from './NewCreatePage'
import MapPage from '../components/Maps/Mapbox/MapPage'
import LoginPage from './LoginPage'
import {AboutPage} from './AboutPage'

import PlacecastPage from './PlacecastPage'
import FooterContainer from '../containers/Shared/FooterContainer'
import MyDeepmapperPage from './MyDeepmapperPage'
import HomePage from './HomePage'
import BecomeADeepmapperPage from './BecomeADeepmapperPage'
import EditPlacecastPage from './EditPlacecastPage'


const AppRouter = () => (
    <HashRouter >
        <Fragment>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/about' component={AboutPage} exact={true}/>
                {/*<Route path='/create/photo' component={PhotoPage2} exact={true}/>*/}
                {/*<Route path='/create/info' component={InfoPage} exact={true}/>*/}
                {/*<Route path='/create/audio' component={AudioPage2} exact={true}/>*/}
                {/*<Route path='/create/street-view' component={StreetViewPage} exact={true}/>*/}
                {/*<Route path='/create/map' component={CreateMapPage} exact={true}/>*/}
                <Route path='/create' component={NewCreatePage} exact={true}/>
                <Route path='/mapbox-map' component={MapPage} exact={true}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/my-deepmapper' component={MyDeepmapperPage}/>
                <Route path='/apply' component={BecomeADeepmapperPage}/>
                <Route exact path='/placecasts' component={PlacecastsPage}/>
                <Route path='/placecasts/:id' component={PlacecastPage}/>
                <Route path='/edit-placecast' component={EditPlacecastPage}/>
                <Redirect to="/"/>
            </Switch>
            <FooterContainer />
        </Fragment>
    </HashRouter>
);

export {AppRouter};
