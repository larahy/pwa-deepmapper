import {createSelector} from 'reselect'
import {find, isEmpty} from 'lodash'

export const placecastsSelector = state => state.placecasts.items
export const streetViewPlacecastSelector = state => state.placecasts.streetViewId

export const getPlacecasts = createSelector(
    placecastsSelector,
    items => {
        return items.map((item) => {
            const geom = JSON.parse(item.geom)
            const lng = geom.coordinates[0]
            const lat = geom.coordinates[1]
            const address = {lat, lng, pitch: item.pitch, zoom: item.zoom, heading: item.heading}
            const photoSrc = `http://d31dl1irjvblxj.cloudfront.net/${item.s3_photo_filename}`
            const audioSrc = `http://d31dl1irjvblxj.cloudfront.net/${item.s3_audio_filename}`
            return {...item, audioSrc, photoSrc, address}
        })
    }
)

export const getStreetViewPlacecast = createSelector(
    [placecastsSelector, streetViewPlacecastSelector],
    (items, id) => {
        const placecast = find(items, {id})
        if (isEmpty(placecast)) {
            return placecast
        }
        else {
            const geom = JSON.parse(placecast.geom)
            const longitude = geom.coordinates[0]
            const latitude = geom.coordinates[1]
            return {address: latitude, longitude}
        }
    }
)
