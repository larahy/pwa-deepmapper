import { createSelector } from 'reselect'

export const placecastsSelector = state => state.placecasts.items

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