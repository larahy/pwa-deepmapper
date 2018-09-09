import { handleActions } from 'redux-actions';
import {
    fetchPlacecastsSucceeded,
    fetchPlacecastsFailed,
    fetchPlacecastsRequested,
    openStreetViewModal,
    closeStreetViewModal,
    photoSkippedSuccess
} from '../actions/placecasts';

const initialState = {
    fetching: false,
    items: [],
    error: null,
    showStreetViewModal: false,
    streetViewId: null,
    photoSkipped: false

};

export const PlacecastsReducer = handleActions({
    [fetchPlacecastsRequested]: (state, ) => {
        return { ...state, fetching: true, error: null }
    },

    [fetchPlacecastsSucceeded().type]: (state, action) => {
        return { ...state, fetching: false, items: action.placecasts }
    },

    [fetchPlacecastsFailed().type]: (state, action) => {
        return { ...state, fetching: false, items: null, error: action.error }
    },
    [openStreetViewModal]: (state, action) => {
        return { ...state, showStreetViewModal: true, streetViewId: action.payload}
    },
    [closeStreetViewModal]: (state, ) => {
        return { ...state, showStreetViewModal: false }
    },
    [photoSkippedSuccess]: state => ({
        ...state,
        photoSkipped: true
    }),
}, initialState)