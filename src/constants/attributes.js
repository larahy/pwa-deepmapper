import {fetchPlacecastsRequested} from '../actions/placecasts'
import {fetchExpertsRequested} from '../actions/experts'

export const Scopes = {
    CREATE: 'create',
    LOGIN: 'login',
    SESSION: 'session',
    EXPERTS: 'experts',
    APPLICATION: 'application',
    PLACECASTS: 'placecasts',
    EDIT: 'edit',
    ERROR: 'error'
}

export const ErrorCodes = {
    EMAIL_ALREADY_EXISTS: 'users_email_unique',
    PLACECASTS_TITLE_ALREADY_EXISTS: 'Conflict',
    SOMETHING_WENT_WRONG: 'Internal Server Error',
    NON_EXISTENT_USER: 'NOT_FOUND',
    INCORRECT_CREDENTIALS: 'Unauthorized'
}

export const ErrorMessageFactory = {
    [ErrorCodes.EMAIL_ALREADY_EXISTS]: 'This email address is already registered. Please login to proceed',
    [ErrorCodes.SOMETHING_WENT_WRONG]: 'We are sorry, an error has occurred. Please try again.',
    [ErrorCodes.NON_EXISTENT_USER]: 'Oh dear, it seems we dont have you in the system, please apply to become an expert',
    [ErrorCodes.INCORRECT_CREDENTIALS]: 'Either your password or email is incorrect, please check and try again.',
    [ErrorCodes.PLACECASTS_TITLE_ALREADY_EXISTS]: 'Oh dear! A placecast with that title already exists'
}

export const Headers = {
    DEEPMAPPER: 'DEEPMAPPER',
    MY_DEEPMAPPER: 'MY DEEPMAPPER',
    BECOME_A_DEEPMAPPER: 'BECOME A DEEPMAPPER',
    MAP: 'MAP',
    PHOTO: 'PHOTO',
    AUDIO: 'AUDIO',
    STREET_VIEW: 'STREET VIEW',
    REVIEW: 'REVIEW',
    LOGIN: 'LOGIN',
    ABOUT: 'ABOUT',
    EDIT: 'EDIT PLACECAST',
    CREATE: 'CREATE PLACECAST'
}


export const Validity = {
    UNTOUCHED: 'untouched',
    VALID: 'valid',
    INVALID: 'invalid',
    NOT_APPLICABLE: 'not-applicable'
}

export const Validations = {
    MANDATORY: 'mandatory',
    MAX_LENGTH: 'max-length',
}

export const Tags = {
    INFO: 'info',
    PHOTO: 'photo',
    LOCATION: 'location',
    STREET_VIEW: 'street-view',
    AUDIO: 'audio',
}

export const Fields = {
    EMAIL: 'email',
    PASSWORD: 'password',
    FIRST_NAME: 'first name',
    LAST_NAME: 'last name',
    BIO: 'bio'
}

export const Dependencies = {
    EXPERTS: 'experts',
    PLACECASTS: 'placecasts',
    EDIT: 'edit'
}

export const DependencyActions = {
    [Dependencies.PLACECASTS]: fetchPlacecastsRequested,
    [Dependencies.EXPERTS]: fetchExpertsRequested,
}

export const FetchDependenciesStatus = {
    SUCCESS: 'success',
    IN_PROGRESS: 'in-progress',
    FAILED: 'failed'
}

export const RequestStatus = {
    PENDING: 'pending',
    IN_PROGRESS: 'in-progress',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed'
}
