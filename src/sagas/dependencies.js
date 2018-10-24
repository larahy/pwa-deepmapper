import {put} from 'redux-saga/effects'
import {fetchDependenciesSucceeded} from '../actions/dependencies'
import {map} from 'lodash'
import {DependencyActions} from '../constants/attributes'

export function* fetchDependencies(action) {
    yield map(action.payload.dependencies, dependency => put(DependencyActions[dependency]()))
    yield put(fetchDependenciesSucceeded(action.payload))
}
