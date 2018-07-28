import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Header} from '../Header/Header';
import {HomePage} from '../pages/HomePage';
import {AboutPage} from '../pages/AboutPage';
import {ZipCodesPage} from '../pages/ZipCodesPage';
import Counter from '../pages/Counter';
import AllExperts from '../pages/AllExperts'
import IndividualExpert from '../pages/IndividualExpert'
import {ConnectedRouter} from 'connected-react-router'


const AppRouter = (props) => (
    <ConnectedRouter history={props.history}>
        <Fragment>
            <Header/>
            <section className="section">
                <Switch>
                    <Route path='/' component={HomePage} exact={true}/>
                    <Route path='/zipcodes' component={ZipCodesPage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/counter' component={Counter}/>
                    <Route exact path='/experts' component={AllExperts}/>
                    <Route path='/experts/:number' component={IndividualExpert}/>
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