import {AttributeScopes, Validity, Tags} from '../constants/attributes';
import {createSelector} from 'reselect';
import {hasAllAttributesWithValidity, propertyOrNull, propertyOrEmptyArray} from './common';
import {includes, filter} from 'lodash';
import {findAttributeValueFor} from '../helpers/queries'

export const getCreate = state => propertyOrNull(state, AttributeScopes.CREATE)

export const getCreateAttributes = state => propertyOrEmptyArray(state, [AttributeScopes.CREATE, 'attributes'])

const getCreateAttributesForTag = tag => createSelector(
    [getCreateAttributes],
    attributes => {
        return filter(attributes, attribute => includes(attribute.tags, tag))
    })

export const getCreateInfoAttributes = getCreateAttributesForTag(Tags.INFO)

export const isReadyToSubmitInfo = hasAllAttributesWithValidity(getCreateInfoAttributes, [ Validity.VALID, Validity.NOT_APPLICABLE ])

export const getTitle = createSelector(
    [ getCreateAttributes ],
    attributes => findAttributeValueFor(attributes, 'title'))