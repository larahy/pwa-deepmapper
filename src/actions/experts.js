import createAction from 'redux-actions/es/createAction'

export const fetchExpertsRequested = createAction('FETCH_EXPERTS_REQUESTED')
export const fetchExpertsSucceeded = createAction('FETCH_EXPERTS_SUCCEEDED')
export const fetchExpertsFailed = createAction('FETCH_EXPERTS_FAILURE')


export const fetchLoggedInExpertRequested = createAction('FETCH_LOGGED_IN_EXPERT_REQUESTED')
export const fetchLoggedInExpertSucceeded = createAction('FETCH_LOGGED_IN_EXPERT_SUCCEEDED')
export const fetchLoggedInExpertFailed = createAction('FETCH_LOGGED_IN_EXPERT_FAILED')

export const becomeAnExpertRequested = createAction('BECOME_A_EXPERT_REQUESTED')
export const becomeAnExpertSucceeded = createAction('BECOME_A_EXPERT_SUCCEEDED')
export const becomeAnExpertFailed = createAction('BECOME_A_EXPERT_FAILED')

export const updateMyDeepmapperCurrentFeedViewTo = createAction('UPDATE_MY_DEEPMAPPER_CURRENT_FEED_VIEW_TO')
