import {connect} from 'react-redux'
import HeaderWithNavigation from '../../components/Navigation/HeaderWithNavigation'

export const mapStateToProps = (state, ownProps) => {
    return  {
        ...ownProps,
        title: ownProps.title,
        readyToSubmit: ownProps.readyToSubmit,
        loading: state.create.uploadProcessing,
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBack: () => dispatch(ownProps.onBack),
        onNext: () => dispatch(ownProps.onNext)
    }
}

const HeaderWithNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderWithNavigation)

export default HeaderWithNavigationContainer
