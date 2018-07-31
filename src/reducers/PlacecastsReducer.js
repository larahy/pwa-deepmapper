import { handleActions } from 'redux-actions';
import {fetchPlacecastsSucceeded, fetchPlacecastsFailed, fetchPlacecastsRequested} from '../actions/placecasts';

const initialState = {
    fetching: false,
    items: null,
    error: null
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
    }
}, initialState)