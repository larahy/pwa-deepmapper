import {find, isUndefined} from 'lodash'

export const findAttributeFor = (attributes, name) => {
    return find(attributes, ['name', name])
}

export const hasAttributeFor = (attributes, name) => {
    return !isUndefined(findAttributeFor(attributes, name))
}