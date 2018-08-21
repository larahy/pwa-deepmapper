import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'connected-react-router'

import Header from '../Header/Header';
import {HomePage} from '../../containers/HomePage';
import {StreetViewPage} from '../../containers/StreetViewPage';
import PlacecastsPage from '../../containers/PlacecastsPage'
import S3Page from '../../containers/S3Page'
import MapPage from '../../components/Maps/ReactMapGl/MapPage'

const AppRouter = (props) => (
    <ConnectedRouter history={props.history}>
        <Fragment>
            <Header/>
            <section className="section">
                <Switch>
                    <Route path='/' component={HomePage} exact={true}/>
                    <Route path='/mapbox-map' component={MapPage} exact={true}/>
                    <Route path='/street-view' component={StreetViewPage}/>
                    <Route path='/s3' component={S3Page}/>
                    {/*<Route path='/experts/:number' component={IndividualExpert}/>*/}
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