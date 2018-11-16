// import { handleActions } from 'redux-actions';
// import {
//     cancelPhotoEdit,
//     populateEdit,
//     updateIsEditing,
//     cancelMapEdit,
//     editAddress,
//     saveNewAddress,
//     cancelAudioEdit,
//     editAudio,
//     updateIsEditingAudio, editPhoto, publishPlacecastSuccess, deletePlacecastSuccess, populateCreate
// } from '../actions/edit'
// import {postPlacecastSucceeded, putPlacecastFailed, putPlacecastSucceeded} from '../actions/placecasts'
// import {concat, isEmpty} from 'lodash'
// import {attributesReducersFor} from './AttributesReducer'
// import {Scopes} from '../constants/attributes'
// import {populatePlacecast} from '../actions/editOrCreate'
// const initialState = {
//     attributes: [],
//     placecast: {},
//     isEditing: false,
//     displayEditVisualsButton: true,
//     displaySaveOrCancelButtons: false,
//
//     photoEdited: false,
//     displayBinButton: false,
//
//     audioEdited: false,
//     displayEditAudioButton: true,
//     displayAudioBinButton: false
// };
//
// export const EditReducer = handleActions({
//     ...attributesReducersFor(Scopes.CREATE),
//     [populatePlacecast]: (state, action) => {
//         const audioSrc = !isEmpty(action.payload.audioFilename) ? action.payload.audioSrc : null
//         const photoSrc = !isEmpty(action.payload.photoFilename) ? action.payload.photoSrc : null
//         return {
//             ...state,
//             address: action.payload.address,
//             audioSrc: audioSrc,
//             photoSrc: photoSrc,
//             title: action.payload.title,
//             attributes: [{
//                 name: 'title',
//                 value: action.payload.title,
//                 validity: 'valid',
//                 errors: []
//             }]
//         }
//     },
//     [updateIsEditingAudio]: (state) => {
//         return ({ ...state, isEditingAudio: true, displayEditAudioButton: false } )
//     },
//     [editAudio]: (state, action) => {
//         return ({ ...state, audioEdited: true, isEditingAudio: false, newAudioSrc: action.payload, displayAudioBinButton: true, displayEditAudioButton: false } )
//     },
//     [cancelAudioEdit]: (state) => {
//         return ({ ...state,
//             audioEdited: false,
//             newAudioSrc: null,
//             isEditingAudio: false,
//             displayAudioBinButton: false,
//             displayEditAudioButton: true } )
//     },
//
//     [editPhoto]: (state, action) => {
//         return ({ ...state,
//             photoEdited: true,
//             isEditing: false,
//             newPhotoSrc: action.payload,
//             displayEditVisualsButton: false,
//             displayBinButton: true } )
//     },
//     [cancelPhotoEdit]: (state) => {
//         return ({ ...state,
//             photoEdited: false,
//             newPhotoSrc: null, isEditing: false,
//             displayEditVisualsButton: true,
//             displayBinButton: false } )
//     },
//
//     [populateEdit]: (state, action) => {
//         return { ...state, placecast: action.payload }
//     },
//     [updateIsEditing]: (state) => {
//         return ({ ...state, isEditing: true, displayEditVisualsButton: false } )
//     },
//     [cancelMapEdit]: (state) => {
//         return ({ ...state, isEditing: false, newAddress: null, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
//     },
//     [editAddress]: (state, action) => {
//         const mergedaddress = { ...state.newAddress, ...action.payload };
//         return ({ ...state, newAddress: mergedaddress, displaySaveOrCancelButtons: true, displayEditVisualsButton: false } )
//     },
//     [saveNewAddress]: (state) => {
//         return ({ ...state, isEditing: false, displaySaveOrCancelButtons: false, displayEditVisualsButton: true } )
//     },
//     [publishPlacecastSuccess]: () => initialState,
//     [putPlacecastSucceeded]: () =>  {
//         return initialState
//     },
//     [postPlacecastSucceeded]: () =>  {
//         return initialState
//     },
//     [putPlacecastFailed]: (state, action) => {
//         return { ...state, errors: concat(state.errors, action.payload.response.data)}
//     },
//     [deletePlacecastSuccess]: () =>  {
//         return initialState
//     },
//
// }, initialState)
