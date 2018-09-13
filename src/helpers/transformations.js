import {map, filter, reduce, isEmpty, reject, intersection} from 'lodash'
import {whereSupported, requiresValidation, satisfies} from './validations'
import {hasAttributeFor} from './queries'
import {
    initialAttributeFor,
    validAttributeFor,
    invalidAttributeFor,
    notApplicableAttributeFor
} from './constructors'

export const where = (property, value) => object => {
    return object[property] === value
}

export const mapIn = (array, finder, mapper) => {
    return map(array, element => finder(element)
        ? mapper(element)
        : element)
}

export const ifForScope = (scope, state, fieldStateOrAttribute, fn) => {
    return fieldStateOrAttribute.scope === scope
        ? fn(fieldStateOrAttribute, state)
        : state
}

export const whereHasAnyTagIn = tags => {
    return attribute => !isEmpty(intersection(attribute.tags, tags))
}

export const withInitialAttributeFor = fieldStateOrAttribute => attributes => {
    return [...attributes, initialAttributeFor(fieldStateOrAttribute)]
}

export const withMappedAttributeFor = (fieldStateOrAttribute, mapper) => attributes => {
    return mapIn(attributes, where('name', fieldStateOrAttribute.name), mapper)
}

export const updateAttributesIn = (state, mapper) => {
    return {...state, attributes: mapper(state.attributes)}
}

export const updateAttributeIn = (state, fieldStateOrAttribute, mapper) => {
    return updateAttributesIn(state, withMappedAttributeFor(fieldStateOrAttribute, mapper))
}

export const ensureInitialAttributeFor = (state, fieldStateOrAttribute) => {
    return hasAttributeFor(state.attributes, fieldStateOrAttribute.name)
        ? state
        : updateAttributesIn(state, withInitialAttributeFor(fieldStateOrAttribute))
}

export const attributeErrorsFromValidations = ({validations, value}) => {
    return reduce(filter(validations, whereSupported), (errors, validation) => {
        return satisfies(validation)(value) ? errors : [...errors, validation.name]
    }, [])
}

export const validatedAttributeFor = (fieldStateOrAttribute, attributeErrors = [], shouldUpdateErrors = true) => {
    if (requiresValidation(fieldStateOrAttribute)) {
        const newErrors = attributeErrorsFromValidations(fieldStateOrAttribute)
        let errorsToPropagate = attributeErrors
        if (shouldUpdateErrors) {
            errorsToPropagate = newErrors
        }
        return isEmpty(newErrors)
            ? validAttributeFor(fieldStateOrAttribute, errorsToPropagate)
            : invalidAttributeFor(fieldStateOrAttribute, errorsToPropagate)
    } else {
        return notApplicableAttributeFor(fieldStateOrAttribute)
    }
}

export const mapAttributesIn = (state, mapper) => {
    return updateAttributesIn(state, attributes => map(attributes, mapper))
}

export const rejectAttributesIn = (state, predicate) => {
    return updateAttributesIn(state, attributes => reject(attributes, predicate))
}

export const validateAttribute = (state, fieldStateOrAttribute, shouldUpdateErrors = true) => {
    return updateAttributeIn(state, fieldStateOrAttribute, attribute => {
        return validatedAttributeFor(fieldStateOrAttribute, attribute.errors, shouldUpdateErrors)
    })
}

export const updateAttributeValueValidityAndErrors = (state, fieldStateOrAttribute) => {
    return validateAttribute(state, fieldStateOrAttribute, true)
}

export const updateAttributeValueAndValidity = (state, fieldStateOrAttribute) => {
    return validateAttribute(state, fieldStateOrAttribute, false)
}

export const validateAttributes = state => {
    return mapAttributesIn(state, validatedAttributeFor)
}

