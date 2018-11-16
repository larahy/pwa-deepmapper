import {handleActions} from 'redux-actions';
import {attributesReducersFor} from './AttributesReducer'
import {Scopes} from '../constants/attributes'
import {saveNewAddress, deletePlacecastSuccess} from '../actions/edit'
import {postPlacecastFailed, postPlacecastSucceeded} from '../actions/placecasts'
import {concat, isEmpty} from 'lodash'
import {populateCreate, selectPlacecastAddress} from '../actions/create2'

const initialState = {
    attributes: [],
    address: {},
    errors: []
};

export const CreateReducer = handleActions({
    ...attributesReducersFor(Scopes.CREATE),
    [selectPlacecastAddress]: (state, action) => {
        return ({...state, address: action.payload})
    },
    [saveNewAddress]: (state, action) => {
        return ({...state, address: action.payload})
    },
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
    [deletePlacecastSuccess]: () =>  {
        return initialState
    },
}, initialState)
