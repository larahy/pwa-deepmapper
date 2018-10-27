// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
// import {connect} from 'react-redux';
// import Placecasts from '../components/Placecasts/Placecasts'
// import {fetchPlacecastsRequested} from '../actions/placecasts'
//
// class AllPlacecasts extends Component {
//     render() {
//         const {fetching, placecasts, onRequestPlacecast, error} = this.props;
//         return (
//             <div className='App'>
//                 <header className='App-header'>
//                     <h1 className='App-title'>Welcome to Placecast Saga</h1>
//                 </header>
//
//                 {placecasts ? (
//                     <Placecasts placecasts={placecasts} />
//                 ) : (
//                     <p className='App-intro'>Replace the emptiness with a placecast!</p>
//                 )}
//
//                 {fetching ? (
//                     <button disabled>Fetching...</button>
//                 ) : (
//                     <button onClick={onRequestPlacecast}>Request a Placecast</button>
//                 )}
//
//                 {error && <p style={{color: 'red'}}>Uh oh - something went wrong!</p>}
//
//             </div>
//         );
//     }
// }
//
// AllPlacecasts.propTypes = {
//     fetching: PropTypes.bool,
//     placecasts: PropTypes.array,
//     error: PropTypes.object,
//     onRequestPlacecast: PropTypes.func
// }
//
//
// const mapStateToProps = state => {
//     return {
//         fetching: state.placecasts.fetching,
//         placecasts: state.placecasts.items,
//         error: state.placecasts.error
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onRequestPlacecast: () => dispatch(fetchPlacecastsRequested())
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(AllPlacecasts);
