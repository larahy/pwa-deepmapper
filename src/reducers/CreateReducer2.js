import {handleActions} from 'redux-actions';
import {attributesReducersFor} from './AttributesReducer'
import {Scopes} from '../constants/attributes'
import {
    photoSkippedSuccess,
    selectPlacecastAddress,
    uploadPhotoFileSuccess,
    audioSkippedSuccess,
    audioAddedSuccess, populateCreate
} from '../actions/create2'
import {saveNewAddress, saveNewAudio} from '../actions/edit'
import {postPlacecastFailed, postPlacecastSucceeded} from '../actions/placecasts'
import {concat, isEmpty} from 'lodash'

const initialState = {
    attributes: [],
    address: {},
    errors: []
};

export const CreateReducer = handleActions({
    ...attributesReducersFor(Scopes.CREATE),
    [uploadPhotoFileSuccess]: (state, action) => {
        return ({...state, photoSrc: action.payload})
    },
    [selectPlacecastAddress]: (state, action) => {
        return ({...state, address: action.payload})
    },
    [audioAddedSuccess]: (state, action) => {
        return {...state, audioSrc: action.payload}
    },
    [saveNewAddress]: (state, action) => {
        return ({...state, address: action.payload})
    },
    [saveNewAudio]: (state, action) => {
        return ({...state, audioSrc: action.payload})
    },
    [photoSkippedSuccess]: state => ({...state, photoSkipped: true}),
    [audioSkippedSuccess]: state => ({...state, audioSkipped: true}),
    [populateCreate]: (state, action) => {
        const audioSrc = !isEmpty(action.payload.audioFilename) ? action.payload.audioSrc : null
        const photoSrc = !isEmpty(action.payload.photoFilename) ? action.payload.photoSrc : null
        return {
            ...state,
            address: action.payload.address,
            audioSrc: audioSrc,
            photoSrc: photoSrc,
            title: action.payload.title,
            attributes: [{
                name: 'title',
                value: action.payload.title,
                validity: 'valid',
                errors: []
            }]
        }
    },
    [postPlacecastSucceeded]: () =>  {
        return initialState
    },
    [postPlacecastFailed]: (state, action) => {
        return { ...state, errors: concat(state.errors, action.payload.response.data)}
    },
}, initialState)
