import {createSelector} from 'reselect'
import {includes, every, isNil, isArray, isEmpty, head, tail} from 'lodash'

export const propertyOr = (defaultValue, object, propertyOrArray) => {
    if (isArray(propertyOrArray)) {
        if (isEmpty(propertyOrArray)) {
            return object
        } else {
            const firstProperty = head(propertyOrArray)
            const remainingProperties = tail(propertyOrArray)
            const objectForFirstProperty = propertyOr(defaultValue, object, firstProperty)

            return propertyOr(defaultValue, objectForFirstProperty, remainingProperties)
        }
    }
    if (isNil(object)) {
        return defaultValue
    }
    if (isNil(object[propertyOrArray])) {
        return defaultValue
    }
    return object[propertyOrArray]
}
export const propertyOrNull = (object, property) => propertyOr(null, object, property)
export const propertyOrEmptyArray = (object, property) => propertyOr([], object, property)
export const propertyOrUndefined = (object, property) => propertyOr(undefined, object, property)
export const propertyOrEmptyString = (object, property) => propertyOr('', object, property)
export const propertyOrZero = (object, property) => propertyOr(0, object, property)
export const propertyOrEmptyObject = (object, property) => propertyOr({}, object, property)

export const hasAllAttributesWithValidity = (attributesSelector, validities) => createSelector(
    [attributesSelector],
    attributes => every(attributes, attribute => {
        return includes(validities, attribute.validity)
    }))
