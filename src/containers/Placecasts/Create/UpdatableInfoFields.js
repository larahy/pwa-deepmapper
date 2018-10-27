import InfoFields from '../../../components/Placecasts/Create/InfoFields'
import {connect} from 'react-redux'
import {infoStepCompleted} from '../../../actions/create'

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
