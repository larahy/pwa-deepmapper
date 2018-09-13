import {find, isUndefined} from 'lodash'
import {propertyOrUndefined} from '../selectors/common'

export const findAttributeFor = (attributes, name) => {
    return find(attributes, ['name', name])
}

export const findAttributeValueFor = (attributes, name) => {
    return propertyOrUndefined(findAttributeFor(attributes, name), 'value')
}

export const hasAttributeFor = (attributes, name) => {
    return !isUndefined(findAttributeFor(attributes, name))
}