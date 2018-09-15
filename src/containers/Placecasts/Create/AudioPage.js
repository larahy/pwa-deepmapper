import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import {infoStepCompleted, audioSkipped} from '../../../actions/placecasts/create'
import PropTypes from 'prop-types'
import EditableAudioRecorder from './EditableAudioRecorder'
class AudioPage extends Component {

    static propTypes = {
        isReadyToSubmitAudio: PropTypes.bool
    }

    render() {

        return (
            <Fragment>
                <SkippableStepHeader
                    title='STEP 3: RECORD PLACECAST'
                    phase={3}
                    onSkip={audioSkipped()}
                    onNext={infoStepCompleted()}/>
                <EditableAudioRecorder />
            </Fragment>
        )
    }
}

const mapStateToProps = () => {
    return {
        isReadyToSubmitAudio: false
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPage);

