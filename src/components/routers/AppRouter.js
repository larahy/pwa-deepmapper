import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'connected-react-router'

import {Header} from '../Header/Header';
import {HomePage} from '../../containers/HomePage';
import {StreetViewPage} from '../../containers/StreetViewPage';
import Counter from '../../containers/Counter';
import AllExperts from '../../containers/AllExperts'
import PlacecastsPage from '../../containers/PlacecastsPage'
import IndividualExpert from '../../containers/IndividualExpert'
import S3Page from '../../containers/S3Page'

const AppRouter = (props) => (
    <ConnectedRouter history={props.history}>
        <Fragment>
            <Header/>
            <section className="section">
                <Switch>
                    <Route path='/' component={HomePage} exact={true}/>
                    <Route path='/street-view' component={StreetViewPage}/>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/s3' component={S3Page}/>
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