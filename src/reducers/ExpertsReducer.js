import { handleActions } from 'redux-actions';
import {
    fetchExpertsFailed,
    fetchExpertsRequested,
    fetchExpertsSucceeded,
    fetchLoggedInExpertSucceeded
} from '../actions/experts'
import {logoutSucceeded} from '../actions/session'

const initialState = {
    fetching: false,
    items: [],
    error: null,
    loggedInExpert : {}
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
    [fetchLoggedInExpertSucceeded]: (state, action) => {
        return { ...state, loggedInExpert: action.payload.response }
    },
    [logoutSucceeded]: (state) => {
        return { ...state, loggedInExpert: {} }
    }
}, initialState)