import { handleActions } from 'redux-actions';
import {fetchExpertsFailed, fetchExpertsRequested, fetchExpertsSucceeded} from '../actions/experts'

const initialState = {
    fetching: false,
    items: [],
    error: null,
};

export const ExpertsReducer = handleActions({
    [fetchExpertsRequested]: (state, ) => {
        return { ...state, fetching: true, error: null }
    },

    [fetchExpertsSucceeded().type]: (state, action) => {
        return { ...state, fetching: false, items: action.experts }
    },

    [fetchExpertsFailed().type]: (state, action) => {
        return { ...state, fetching: false, items: null, error: action.error }
    },
}, initialState)