import React from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from '../reducers/CounterReducer'

const Counter = props => (
    <div className="container">
        <h1>Home</h1>
        <p>Count: {props.count}</p>

        <p>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
                Increment Async
            </button>
        </p>

        <p>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
                Decrement Async
            </button>
        </p>

        <p>
            <button onClick={() => props.changePage()}>
                Go to about page via redux
            </button>
        </p>
    </div>
)

Counter.propTypes = {
    count: PropTypes.number,
    isIncrementing: PropTypes.bool,
    isDecrementing: PropTypes.bool,
    increment: PropTypes.func,
    incrementAsync: PropTypes.func,
    decrement: PropTypes.func,
    decrementAsync: PropTypes.func,
    changePage: PropTypes.func
}

const mapStateToProps = ({counter}) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
            changePage: () => push('/experts')
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)