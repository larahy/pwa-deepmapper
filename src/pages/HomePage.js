import React, {Fragment} from 'react'
import FilterablePlacecastTiles from '../containers/Placecasts/FilterablePlacecastsContainer'
import {fetchDependencies} from '../helpers/fetchDependencies'
import {Dependencies, Headers} from '../constants/attributes'
import {SimpleHeader} from '../components/Navigation/SimpleHeader'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faListUl, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './pages.scss'

let HomePage = class extends React.Component {
    static displayName = 'Home'

    render() {
        return (
            <Fragment>
                <SimpleHeader title={Headers.DEEPMAPPER}/>
                <div className='home-icons'>
                    <div className='list-icon'>
                        <span><FontAwesomeIcon icon={faListUl}/></span>
                    </div>
                    <div className='map-icon'>
                        <span><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                    </div>
                </div>
                <FilterablePlacecastTiles />
            </Fragment>
        )
    }
}

HomePage = fetchDependencies([
    Dependencies.EXPERTS
])(HomePage)

export default HomePage
