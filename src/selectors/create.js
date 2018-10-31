import {Scopes, Validity, Tags} from '../constants/attributes';
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

export const getCreate = state => propertyOrNull(state, Scopes.CREATE)

export const getCreateAttributes = state => propertyOrEmptyArray(state, [Scopes.CREATE, 'attributes'])

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
    return propertyOrEmptyString(create, 'photoSrc')
})

export const getAddress = createSelector([getCreate], create => {
    return propertyOrEmptyObject(create, 'address')
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

export const getPitch = createSelector([getAddress], create => {
    return propertyOrZero(create, 'pitch')
})
export const getHeading = createSelector([getAddress], create => {
    return propertyOrZero(create, 'heading')
})
export const getZoom = createSelector([getAddress], create => {
    return propertyOrZero(create, 'zoom')
})