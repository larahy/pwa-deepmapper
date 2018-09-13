import {Validity} from '../constants/attributes'
import {isEmpty, pick} from 'lodash'

const newAttributeFor = (fieldStateOrAttribute, validity, errors = []) => {
    return { ...pick(fieldStateOrAttribute, 'name', 'value', 'tags', 'validations'), validity, errors }
}

export const initialAttributeFor = fieldStateOrAttribute => isEmpty(fieldStateOrAttribute.validations)
    ? notApplicableAttributeFor(fieldStateOrAttribute)
    : untouchedAttributeFor(fieldStateOrAttribute)

export const untouchedAttributeFor = fieldStateOrAttribute => {
    return newAttributeFor(fieldStateOrAttribute, Validity.UNTOUCHED)
}

export const notApplicableAttributeFor = fieldStateOrAttribute => {
    return newAttributeFor(fieldStateOrAttribute, Validity.NOT_APPLICABLE)
}

export const validAttributeFor = (fieldStateOrAttribute, errors = []) => {
    return newAttributeFor(fieldStateOrAttribute, Validity.VALID, errors)
}

export const invalidAttributeFor = (fieldStateOrAttribute, errors) => {
    console.log('invalid honk honk');
    return newAttributeFor(fieldStateOrAttribute, Validity.INVALID, errors)
}
