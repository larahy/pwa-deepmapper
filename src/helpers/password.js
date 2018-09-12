import {Validator, Violation, Assert as is} from 'validator.js'

export default function passwordAssert() {
    this.__class__ = 'Password'

    const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-zA-Z]).*$/

    this.validate = value => {
        if (typeof value !== 'string') {
            throw new Violation(this, value, {
                value: Validator.errorCode.must_be_a_string
            })
        }

        try {
            is.Regexp(PASSWORD_PATTERN).validate(value)
        } catch (e) {
            throw new Violation(this, value)
        }

        return true
    }

    return this
}
