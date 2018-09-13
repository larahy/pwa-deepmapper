import { includes, some, isEmpty } from 'lodash'
import {
    fieldInitialised,
    fieldCompleted,
    fieldChanged,
    validationsTriggered,
} from '../actions/common'
import {
    ifForScope,
    ensureInitialAttributeFor,
    updateAttributeValueValidityAndErrors,
    updateAttributeValueAndValidity,
    validatedAttributeFor,
    mapAttributesIn
} from '../helpers/transformations'

export const attributesReducersFor = scope => ({
    [fieldInitialised]: (state, {payload}) => {
        return ifForScope(scope, state, payload, () => {
            return ensureInitialAttributeFor(state, payload)
        })
    },
    [fieldCompleted]: (state, {payload}) => {
        return ifForScope(scope, state, payload, () => {
            return updateAttributeValueValidityAndErrors(state, payload)
        })
    },
    [fieldChanged]: (state, {payload}) => {
        return ifForScope(scope, state, payload, () => {
            return updateAttributeValueAndValidity(state, payload)
        })
    },
    [validationsTriggered]: (state, { payload }) => {
        return ifForScope(scope, state, payload, () => {
            const stateWithValidationAttributes = mapAttributesIn(state, attribute => {
                if (isEmpty(payload.tags) || some(payload.tags, tag => includes(attribute.tags, tag))) {
                    return validatedAttributeFor(attribute)
                } else {
                    return attribute
                }
            })
            return stateWithValidationAttributes
        })
    },
})
