import { handleActions } from 'redux-actions';
import { attributesReducersFor } from './AttributesReducer'
import {Scopes} from '../constants/attributes'
import {
    photoSkippedSuccess,
    selectPlacecastAddress,
    uploadPhotoFileSuccess,
    audioSkippedSuccess,
    audioStepCompletedSuccess
} from '../actions/create2'
import {saveNewAddress} from '../actions/edit'
const initialState = {
    attributes: [],
    address: {},
    errors: []
};

export const CreateReducer = handleActions({
    ...attributesReducersFor(Scopes.CREATE),
    [uploadPhotoFileSuccess]: (state, action) => {
        return ({ ...state, photoSrc: action.payload } )
    },
    [selectPlacecastAddress]: (state, action) => {
        return ({ ...state, address: action.payload})
    },
    [audioStepCompletedSuccess]: (state, action) => {
        return {...state, audioSrc: action.payload }
    },
    [saveNewAddress]: (state, action) => {
        return ({ ...state, address: action.payload } )
    },
    [photoSkippedSuccess]: state => ({ ...state, photoSkipped: true}),
    [audioSkippedSuccess]: state => ({ ...state, audioSkipped: true}),
}, initialState)
