import {connect} from 'react-redux'
import {find, isEmpty} from 'lodash'

import {fieldCompleted, fieldChanged, fieldInitialised} from '../../actions/common'

const findAttribute = (state, name, scope) => {
    const scopedState = state[scope]
    return isEmpty(scopedState) ? {} : find(scopedState.attributes, ['name', name])
}

export const mapStateToProps = (state, ownProps) => {
    return Object.assign({},
        ownProps,
        findAttribute(state, ownProps.name, ownProps.scope))
}

export const mapDispatchToProps = dispatch => {
    return {
        onInitialisation: fieldState => dispatch(fieldInitialised(fieldState)),
        onCompletion: fieldState => dispatch(fieldCompleted(fieldState)),
        onChange: fieldState => dispatch(fieldChanged(fieldState))
    }
}

export default presentationalComponent => {
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(presentationalComponent)
}
