import { createSelector } from 'reselect'
import {toLower} from 'lodash'
import {hasAllAttributesWithValidity, propertyOrNull} from './common'
import {Validity, Fields, Scopes} from '../constants/attributes'
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
    attributes => toLower(findAttributeValueFor(attributes, Fields.EMAIL)))

export const getLoginPassword = createSelector(
    [ getLoginAttributes ],
    attributes => findAttributeValueFor(attributes, Fields.PASSWORD))
