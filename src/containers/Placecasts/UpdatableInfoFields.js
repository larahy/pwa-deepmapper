import InfoFields from '../../components/Placecasts/InfoFields'
import {connect} from 'react-redux'
import {infoStepCompleted} from '../../actions/create2'

export const mapStateToProps = (_, ownProps) => {
    return  {
        ...ownProps,
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onNext: () => dispatch(infoStepCompleted()),
    }
}

const UpdatableInfoFields = connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoFields)

export default UpdatableInfoFields
