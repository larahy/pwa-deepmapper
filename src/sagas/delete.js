import {call, put, select} from 'redux-saga/effects';
import {ErrorCodes, Scopes} from '../constants/attributes'
import {deletePlacecastFailed, deletePlacecastSuccess} from '../actions/create2'
import {getToken} from '../selectors/session'
import {getPlacecastId} from '../selectors/edit'
import {updateCurrentViewTo} from '../actions/placecasts'
import {goToMyDeepMapper} from '../actions/navigation'
import axios from 'axios'
import {addError} from '../actions/Errors'
/* eslint-disable no-undef */
const apiUrl = API_URL

/* eslint-disable no-undef */

function deletePlacecast({token, id}) {
    return axios.delete(`${apiUrl}/api/v1/placecasts/${id}`, {
        params: {foo: 'bar'},
        headers: {
            'X-Token': token
        },
    })
}


export function* deletePlacecastSaga(action) {
    const [token, id] = yield [
        select(getToken),
        select(getPlacecastId)
    ]
    const phase = action.payload
    if (phase === Scopes.CREATE) {
        try {
            yield put(deletePlacecastSuccess())
        } catch (error) {
            yield put(deletePlacecastFailed);
            yield put(addError(ErrorCodes.SOMETHING_WENT_WRONG));

        }
    } else if (phase === Scopes.EDIT) {
        try {
            yield call(deletePlacecast, {token, id});
            yield put(deletePlacecastSuccess())
            yield put(updateCurrentViewTo('photo'));
            yield put(goToMyDeepMapper());

        } catch (error) {
            yield put(deletePlacecastFailed(error));
            yield put(addError(ErrorCodes.SOMETHING_WENT_WRONG));
        }
    }
}
