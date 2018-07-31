import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Header} from '../Header/Header';
import {HomePage} from '../../containers/HomePage';
import {AboutPage} from '../../containers/AboutPage';
import Counter from '../../containers/Counter';
import AllExperts from '../../containers/AllExperts'
import PlacecastsPage from '../../containers/PlacecastsPage'
import IndividualExpert from '../../containers/IndividualExpert'
import {ConnectedRouter} from 'connected-react-router'

const AppRouter = (props) => (
    <ConnectedRouter history={props.history}>
        <Fragment>
            <Header/>
            <section className="section">
                <Switch>
                    <Route path='/' component={HomePage} exact={true}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/counter' component={Counter}/>
                    <Route exact path='/experts' component={AllExperts}/>
                    <Route path='/experts/:number' component={IndividualExpert}/>
                    <Route exact path='/placecasts' component={PlacecastsPage}/>
                    <Redirect to="/"/>
                </Switch>
            </section>
        </Fragment>
    </ConnectedRouter>
);

AppRouter.propTypes = {
    history: PropTypes.object
}

export {AppRouter};