import {fetchPlacecastsRequested} from '../actions/placecasts'
import {fetchExpertsRequested} from '../actions/experts'

export const Scopes = {
    CREATE: 'create',
    USER: 'user',
    LOGIN: 'login',
    SESSION: 'session',
    EXPERTS: 'experts',
    APPLICATION: 'application'
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
    LOGIN: 'LOGIN'
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
    PLACECASTS: 'placecasts'
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




