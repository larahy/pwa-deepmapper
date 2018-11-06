import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'

import './Search.scss'

class Search extends Component {
    static propTypes = {
        onSelectAddress: PropTypes.func,
    }

    state = {
        locations: []
    }

    handleAddLocation = newLocation => {
        this.setState(({locations}) => ({
            locations: locations.concat(newLocation)
        }))
        this.props.onSelectAddress(newLocation)

    }

    handlePickPlace = handler => () => {
        const places = this.searchBox.getPlaces().slice(-1)
        const {geometry, name} = places[0]
        handler({
            lat: geometry.location.lat(),
            lng: geometry.location.lng(),
            name
        })
    }

    onSearchBoxMounted = ref => (this.searchBox = ref)

    render() {
        return (
            <Fragment>
                <StandaloneSearchBox
                    ref={this.onSearchBoxMounted}
                    onPlacesChanged={this.handlePickPlace(this.handleAddLocation)}
                > 
                    <div className='input-field'>
                        <div className='input-control'>
                            <input type='text' placeholder='Location' className='is-primary searchBox'/>
                        </div>
                    </div>
                    
                </StandaloneSearchBox>
            </Fragment>
        )
    }
}

export default Search
