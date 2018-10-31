import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash'
import PropTypes from 'prop-types'
import HeaderWithNavigationContainer from '../../containers/Shared/HeaderWithNavigationContainer'
import UploadPhotoFile from '../../components/Photo/CreateUploadPhotoFile'
import {step2Skipped} from '../../actions/create2'
import {getPhotoSrc} from '../../selectors/create'
import {CreateSequenceInstructions} from '../../components/Placecasts/Create/CreateSequenceInstructions'
import {Headers} from '../../constants/attributes'

class PhotoPage2 extends Component {

    static propTypes = {
        photoSrc: PropTypes.string
    }

    render() {
        const {photoSrc} = this.props;
        const readyToSubmit = !isEmpty(photoSrc)
        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={true}
                    displayNextButton={true}
                    title={Headers.DEEPMAPPER}
                    readyToSubmit={readyToSubmit}
                    onNext={dispatch => (dispatch(step2Skipped()))}/>
                <CreateSequenceInstructions stepNumber='2'/>
                <UploadPhotoFile/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photoSrc: getPhotoSrc(state),
    };
};

export default connect(mapStateToProps)(PhotoPage2);

