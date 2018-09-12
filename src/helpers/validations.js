import {Validations} from '../constants/attributes'
import {Validator, Assert} from 'validator.js'
import Password from './password'

export const validator = new Validator()
export const is = Assert
    .extend({
        Password
    })

import {map, isEmpty, intersection} from 'lodash'

export const whereSupported = validation => {
    return supportedValidations[validation.name]
}

export const satisfies = validation => value => {
    return supportedValidations[validation.name](value, validation)
}

export const requiresValidation = fieldStateOrAttribute => {
    return !isEmpty(intersection(map(fieldStateOrAttribute.validations, 'name'), [
        Validations.MANDATORY, Validations.MAX_LENGTH
    ]))
}

export const supportedValidations = {
    [Validations.MANDATORY]: value => {
        return (value && (
            validator.validate(value, is.notBlank()) === true))
    },
    [Validations.MAX_LENGTH]: (value, validation) => {
        return (validator.validate(value, is.ofLength({max: validation.value})) === true)
    },

}
