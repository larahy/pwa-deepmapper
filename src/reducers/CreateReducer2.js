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
        return {
            ...state,
            address: action.payload.address,
            audioSrc: action.payload.audioSrc,
            photoSrc: action.payload.photoSrc,
            title: action.payload.title,
            attributes: [{
                name: 'title',
                value: action.payload.title,
                validity: 'valid',
                errors: []
            }]
        }
    },
}, initialState)
