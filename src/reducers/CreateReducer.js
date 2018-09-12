import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    photoStepCompletedSuccess,
    infoStepCompletedSuccess
} from '../actions/placecasts/create'
import { attributesReducersFor } from './AttributesReducer'
const initialState = {
    photoSkipped: false,
    imageName: '',
    attributes: []
};

export const CreateReducer = handleActions({
    ...attributesReducersFor('create'),

    [photoSkippedSuccess]: state => ({
        ...state,
        photoSkipped: true
    }),
    [photoStepCompletedSuccess]: (state, action) => {
        return { ...state, photoSkipped: false, imageName: action.payload.file.name}
    },
    [infoStepCompletedSuccess]: (state) => {
        return { ...state, photoSkipped: false}
    },
}, initialState)