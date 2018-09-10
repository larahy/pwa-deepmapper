import { handleActions } from 'redux-actions';
import {
    photoSkippedSuccess,
    photoStepCompletedSuccess
} from '../actions/placecasts/create'

const initialState = {
    photoSkipped: false,
    imageName: ''
};

export const CreateReducer = handleActions({
    [photoSkippedSuccess]: state => ({
        ...state,
        photoSkipped: true
    }),
    [photoStepCompletedSuccess]: (state, action) => {
        return { ...state, photoSkipped: false, imageName: action.payload.file.name}
    },
}, initialState)