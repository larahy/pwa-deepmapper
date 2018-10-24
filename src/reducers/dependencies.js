import {handleActions} from 'redux-actions'

import {
    fetchDependenciesRequested,
    fetchDependenciesSucceeded,
    fetchDependenciesFailed
} from '../actions/dependencies'
import {
    RequestStatus
} from '../constants/attributes'

const initialState = {
    status: RequestStatus.PENDING
}

export const dependencies = handleActions({
    [fetchDependenciesRequested]: state => {
        return {...state, status: RequestStatus.IN_PROGRESS}
    },
    [fetchDependenciesSucceeded]: state => {
        return {...state, status: RequestStatus.SUCCEEDED}
    },
    [fetchDependenciesFailed]: state => {
        return {...state, status: RequestStatus.FAILED}
    }
}, initialState)
