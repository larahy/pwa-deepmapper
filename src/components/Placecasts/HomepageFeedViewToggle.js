import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faListUl, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

export default class HomepageFeedViewToggle extends Component {

    static propTypes = {
        currentView: PropTypes.string,
        changeHomepageFeedViewTo: PropTypes.func,
    }

    constructor(props) {
        super(props)
    }


    toggleOn(view) {
        return this.props.changeHomepageFeedViewTo(view)
    }


    render() {
        const {currentView} = this.props

        const mapElementClasses = currentView === 'map' ? 'active-toggle' : '';
        const listElementClasses = currentView === 'list' ? 'active-toggle' : '';

        return (
            <Fragment>
                <div className='home-icons'>
                    <div 
                        className={`list-icon ${listElementClasses}`} 
                        onClick={() => this.toggleOn('list')}
                    >
                        <span>
                            <FontAwesomeIcon icon={faListUl}/>
                        </span>
                    </div>
                    <div 
                        className={`map-icon ${mapElementClasses}`} 
                        onClick={() => this.toggleOn('map')}
                    >
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        </span>
                    </div>
                </div>
            </Fragment>
        )
    }
}
