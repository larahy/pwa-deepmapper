import { createSelector } from 'reselect'
import {hasAllAttributesWithValidity, propertyOrNull} from './common'
import {Validity, InputTypes, Scopes} from '../constants/attributes'
import {findAttributeValueFor} from '../helpers/queries'

export const getLogin = state => propertyOrNull(state, Scopes.LOGIN)

export const getLoginAttributes = createSelector(
    [ getLogin ],
    login => propertyOrNull(login, 'attributes'))

export const isReadyToLogin = hasAllAttributesWithValidity(
    getLoginAttributes,
    [ Validity.VALID, Validity.NOT_APPLICABLE ])

export const getLoginEmail = createSelector(
    [ getLoginAttributes ],
    attributes => findAttributeValueFor(attributes, InputTypes.EMAIL))

export const getLoginPassword = createSelector(
    [ getLoginAttributes ],
    attributes => findAttributeValueFor(attributes, InputTypes.PASSWORD))
