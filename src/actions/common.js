import {createAction} from 'redux-actions'

export const fieldInitialised = createAction('framework/FIELD_INITIALISED')
export const fieldCompleted = createAction('framework/FIELD_COMPLETED')
export const fieldChanged = createAction('framework/FIELD_CHANGED')
export const validationsTriggered = createAction('framework/FORCE_VALIDATION')


