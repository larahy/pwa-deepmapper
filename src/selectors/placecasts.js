import {createSelector} from 'reselect'
import {propertyOrEmptyArray, propertyOrEmptyObject, propertyOrEmptyString, propertyOrNull} from './common'
import {Scopes} from '../constants/attributes'
import {getLoggedInUserId} from './session'
import {filter, sortBy, reverse} from 'lodash'

export const getPlacecastsItems = state => propertyOrEmptyArray(state, [Scopes.PLACECASTS, 'items'])
export const getCurrentView = state => propertyOrEmptyString(state, [Scopes.PLACECASTS, 'currentView'])
export const getPlacecastErrors = state => propertyOrEmptyObject(state, [Scopes.PLACECASTS, 'error'])
export const isFetchingPlacecasts = state => propertyOrNull(state, [Scopes.PLACECASTS, 'fetching'])
export const getHomepageCurrentFeedView = state => propertyOrEmptyString(state, [Scopes.PLACECASTS, 'currentFeedView'])

export const getPlacecasts = createSelector(
    getPlacecastsItems,
    items => {
        return items.map((item) => {
            const geom = JSON.parse(item.geom)
            const lng = geom.coordinates[0]
            const lat = geom.coordinates[1]
            const address = {lat, lng, pitch: item.pitch, zoom: item.zoom, heading: item.heading}
            const photoFilename = item.s3_photo_filename
            const audioFilename = item.s3_audio_filename
            const photoSrc = `https://d31dl1irjvblxj.cloudfront.net/${item.s3_photo_filename}`
            const audioSrc = `https://d31dl1irjvblxj.cloudfront.net/${item.s3_audio_filename}`
            return {...item, audioFilename, photoFilename, address, photoSrc, audioSrc}
        })
    }
)
export const getPlacecastsOrderedByDate = createSelector(
    [getPlacecasts], (placecasts) => {
        return reverse(sortBy(placecasts, placecast => {
            return placecast.created_at
        }))
    })

export const getPublishedPlacecasts = createSelector(
    [getPlacecastsOrderedByDate],
    (placecasts) => {
        return filter(placecasts, placecast => {
            return placecast.published === true
        })
    })

export const getDraftPlacecastsForLoggedInUser = createSelector(
    [getPlacecastsOrderedByDate, getLoggedInUserId],
    (placecasts, id) => {
        return filter(placecasts, placecast => {
            return placecast.published === false &&  placecast.user_id === id
        })
    })

export const getPublishedPlacecastsForLoggedInUser = createSelector(
    [getPlacecastsOrderedByDate, getLoggedInUserId],
    (placecasts, id) => {
        return filter(placecasts, placecast => {
            return placecast.user_id === id && placecast.published === true
        })
    })