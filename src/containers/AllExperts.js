import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class AllExperts extends Component {
    render() {
        const {fetching, dog, onRequestDog, error} = this.props;
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={dog}/>
                    <h1 className='App-title'>Welcome to Dog Saga</h1>
                </header>

                {dog ? (
                    <p className='App-intro'>Keep clicking for new dogs</p>
                ) : (
                    <p className='App-intro'>Replace the React icon with a dog!</p>
                )}

                {fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={onRequestDog}>Request a Dog</button>
                )}

                {error && <p style={{color: 'red'}}>Uh oh - something went wrong!</p>}

            </div>
        );
    }
}

AllExperts.propTypes = {
    fetching: PropTypes.bool,
    dog: PropTypes.string,
    error: PropTypes.func,
    onRequestDog: PropTypes.func
}


const mapStateToProps = state => {
    return {
        fetching: state.dogs.fetching,
        dog: state.dogs.dog,
        error: state.dogs.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestDog: () => dispatch({type: 'API_CALL_REQUEST'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllExperts);
