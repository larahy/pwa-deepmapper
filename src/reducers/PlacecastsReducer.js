import { handleActions } from 'redux-actions';
import {
    fetchPlacecastsSucceeded,
    fetchPlacecastsFailed,
    fetchPlacecastsRequested,
    updateCurrentViewTo, updateHomepageCurrentFeedViewTo
} from '../actions/placecasts';

const initialState = {
    fetching: false,
    items: [],
    error: null,
    currentView: 'photo',
    currentFeedView: 'list'
};

export const PlacecastsReducer = handleActions({
    [fetchPlacecastsRequested]: (state) => {
        return { ...state, fetching: true, error: null }
    },

    [fetchPlacecastsSucceeded().type]: (state, action) => {
        return { ...state, fetching: false, items: action.placecasts }
    },

    [fetchPlacecastsFailed().type]: (state, action) => {
        return { ...state, fetching: false, items: null, error: action.error }
    },
    [updateCurrentViewTo]: (state, action ) => {
        return { ...state, currentView: action.payload }
    },
    [updateHomepageCurrentFeedViewTo]: (state, action ) => {
        return { ...state, currentFeedView: action.payload }
    },
}, initialState)