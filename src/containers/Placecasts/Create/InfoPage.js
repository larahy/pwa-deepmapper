import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import UpdatableInfoFields from './UpdatableInfoFields'
import {infoStepCompleted} from '../../../actions/placecasts/create'
import {
    isReadyToSubmitInfo,
} from '../../../selectors/create'
import PropTypes from 'prop-types'
class InfoPage extends Component {

    static propTypes = {
        isReadyToSubmitInfo: PropTypes.bool
    }
    constructor(props) {
        super(props)
        this.state = {
            readyToSubmit: false
        }
    }

    render() {

        return (
            <Fragment>
                <SkippableStepHeader
                    title='STEP 1: BASIC INFO'
                    phase={1}
                    onNext={infoStepCompleted()}/>
                <UpdatableInfoFields />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isReadyToSubmitInfo: isReadyToSubmitInfo(state)
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);

