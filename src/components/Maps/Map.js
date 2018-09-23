// import React, { Component } from 'react'
// import { Consumer as MapConsumer } from '../../context/locations'
// import GoogleMap from './GoogleMap'
// /* eslint-disable */
//
// import React, {Fragment} from 'react'
// import {GoogleMap, withGoogleMap, Marker, Polyline, InfoWindow} from 'react-google-maps'
//
// class Map extends Component {
//     static propTypes = {
//         onUpdatePosition: PropTypes.func,
//         onUpdatePOV: PropTypes.func,
//         address: PropTypes.object.isRequired,
//
//     }
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             position: null,
//             pov: null
//         };
//     }
//
//     handleUpdatePosition(newPosition) {
//         this.setState({
//             position: newPosition
//         })
//         return this.props.onUpdatePosition({lat: this.state.position.lat(), lng: this.state.position.lng()})
//     }
//
//     handleOpenItem = item => e => {
//         this.setState({ openItem: this.state.openItem === item ? null : item })
//     }
//
//     render() {
//         const {address} = this.props;
//
//         const { openItem } = this.state
//         return (
//                 <GoogleMap defaultZoom={8} center={true}>
//                             <Marker
//                                 onClick={this.handleOpenItem(address)}
//                                 position={address}
//                                 label={`${++i}`}
//                                 draggable
//                                 onDragEnd={this.handleUpdatePosition(address)}
//                             />
//                             {openItem &&
//                             openItem.lng === address.lng &&
//                             openItem.lat === address.lat && (
//                                 <InfoWindow
//                                     options={{pixelOffset: new google.maps.Size(0, -30)}}
//                                     position={address}
//                                     onCloseClick={this.handleOpenItem(address)}
//                                 >
//                                     <div>{address.name}</div>
//                                 </InfoWindow>
//                             )}
//                 </GoogleMap>
//             </div>
//
//
//
//
//         )
//     }
// }
//
// export default Map
