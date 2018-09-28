import {AttributeScopes, Validity, Tags} from '../constants/attributes';
import {createSelector} from 'reselect';
import {
    hasAllAttributesWithValidity,
    propertyOrNull,
    propertyOrEmptyArray,
    propertyOrEmptyString,
    propertyOrEmptyObject, propertyOrZero
} from './common';
import {includes, filter} from 'lodash';
import {findAttributeValueFor} from '../helpers/queries'

export const getCreate = state => propertyOrNull(state, AttributeScopes.CREATE)

export const getCreateAttributes = state => propertyOrEmptyArray(state, [AttributeScopes.CREATE, 'attributes'])
export const getAddress = state => propertyOrEmptyObject(state, [AttributeScopes.CREATE, 'address'])

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

export const getPhotoSrc = createSelector([getCreate], create => {
    return propertyOrEmptyString(create, 'photoFile')
})

export const getAudioSrc = createSelector([getCreate], create => {
    return propertyOrEmptyString(create, 'audioSrc')
})
export const getLatitude = createSelector([getAddress], address => {
    const num = propertyOrZero(address, 'lat')
    return num.toFixed(5)
})
export const getLongitude = createSelector([getAddress], address => {
    const num = propertyOrZero(address, 'lng')
    return num.toFixed(5)
})
// export const getAddress = createSelector([getCreate], create => propertyOrEmptyObject(create, 'address'))