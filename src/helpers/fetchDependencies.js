import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDependenciesRequested } from '../actions/dependencies'

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doDispatch: ownProps.doDispatch || (action => dispatch(action))
    }
}

export const mapStateToProps = (_, ownProps) => {
    return { ...ownProps }
}

export const fetchDependencies = dependencies => {
    return Component => {
        const FetchDependencies = class extends React.Component {
            static displayName = `FetchDependencies(${Component.displayName})`

            static propTypes = {
                doDispatch: PropTypes.func.isRequired
            }

            componentDidMount () {
                this.props.doDispatch(fetchDependenciesRequested({
                    component: Component.displayName,
                    dependencies
                }))
            }

            render () {
                return <Component {...this.props} />
            }
        }

        return connect(mapStateToProps, mapDispatchToProps)(FetchDependencies)
    }
}
