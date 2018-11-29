import React, {Fragment} from 'react';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import NewCreatePage from './NewCreatePage'
import LoginPage from './LoginPage'
import AboutPage from './AboutPage'

import PlacecastPage from './PlacecastPage'
import FooterContainer from '../containers/Shared/FooterContainer'
import MyDeepmapperPage from './MyDeepmapperPage'
import HomePage from './HomePage'
import BecomeADeepmapperPage from './BecomeADeepmapperPage'
import EditPlacecastPage from './EditPlacecastPage'


const AppRouter = () => (
    <HashRouter>
        <Fragment>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/about' component={AboutPage} exact={true}/>
                <Route path='/create' component={NewCreatePage} exact={true}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/my-deepmapper' component={MyDeepmapperPage}/>
                <Route path='/apply' component={BecomeADeepmapperPage}/>
                <Route path='/placecasts/:id' component={PlacecastPage}/>
                <Route path='/edit-placecast' component={EditPlacecastPage}/>
                <Redirect to="/"/>
            </Switch>
            <FooterContainer />
        </Fragment>
    </HashRouter>
);

export {AppRouter};
