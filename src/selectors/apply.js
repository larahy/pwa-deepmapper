import { createSelector } from 'reselect'
import {toLower} from 'lodash'
import {hasAllAttributesWithValidity, propertyOrNull} from './common'
import {Validity, Fields, Scopes} from '../constants/attributes'
import {findAttributeValueFor} from '../helpers/queries'

export const getApplication = state => propertyOrNull(state, Scopes.APPLICATION)

export const getApplicationAttributes = createSelector(
    [ getApplication ],
    application => propertyOrNull(application, 'attributes'))

export const isReadyToApply = hasAllAttributesWithValidity(
    getApplicationAttributes,
    [ Validity.VALID, Validity.NOT_APPLICABLE ])

export const getApplicationEmail = createSelector(
    [ getApplicationAttributes ],
    attributes => toLower(findAttributeValueFor(attributes, Fields.EMAIL)))

export const getApplicationPassword = createSelector(
    [ getApplicationAttributes ],
    attributes => findAttributeValueFor(attributes, Fields.PASSWORD))

export const getApplicationBio = createSelector(
    [ getApplicationAttributes ],
    attributes => findAttributeValueFor(attributes, Fields.BIO))

export const getApplicationFirstName = createSelector(
    [ getApplicationAttributes ],
    attributes => findAttributeValueFor(attributes, Fields.FIRST_NAME))

export const getApplicationLastName = createSelector(
    [ getApplicationAttributes ],
    attributes => findAttributeValueFor(attributes, Fields.LAST_NAME))
