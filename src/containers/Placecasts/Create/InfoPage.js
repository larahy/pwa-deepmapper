import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import UpdatableInfoFields from './UpdatableInfoFields'
import {photoSkipped} from '../../../actions/placecasts/create'
import {infoStepCompleted} from '../../../actions/placecasts/create'

class InfoPage extends Component {
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
                    onSkip={photoSkipped()}
                    onNext={infoStepCompleted()}/>
                <UpdatableInfoFields />
            </Fragment>
        )
    }
}

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);

