import {createSelector} from 'reselect'
import {find, isEmpty} from 'lodash'

export const placecastsSelector = state => state.placecasts.items
export const streetViewPlacecastSelector = state => state.placecasts.streetViewId

export const getPlacecasts = createSelector(
    placecastsSelector,
    items => {
        return items.map((item) => {
            const geom = JSON.parse(item.geom)
            const longitude = geom.coordinates[0]
            const latitude = geom.coordinates[1]
            return {...item, latitude, longitude}
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
            return {latitude, longitude}
        }
    }
)
