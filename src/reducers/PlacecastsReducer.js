
// action types
const PLACECASTS_REQUEST = 'PLACECASTS_REQUEST';
const PLACECASTS_SUCCESS = 'PLACECASTS_SUCCESS';
const PLACECASTS_FAILURE = 'PLACECASTS_FAILURE';

// reducer with initial state
const initialState = {
    fetching: false,
    items: null,
    error: null
};

export function PlacecastsReducer(state = initialState, action) {
    switch (action.type) {
        case PLACECASTS_REQUEST:
            return { ...state, fetching: true, error: null };
        case PLACECASTS_SUCCESS:
            return { ...state, fetching: false, items: action.placecasts };
        case PLACECASTS_FAILURE:
            return { ...state, fetching: false, items: null, error: action.error };
        default:
            return state;
    }
}

