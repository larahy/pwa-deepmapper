import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash'
import {photoStepCompleted} from '../actions/create'
import {getPhotoSrc} from '../selectors/create'
import PropTypes from 'prop-types'
import UploadPhotoFile from '../components/Photo/CreateUploadPhotoFile'
import PhotoPanel from '../components/Photo/PhotoPanel'
import {Headers} from '../constants/attributes'
import HeaderWithNavigationContainer from '../containers/Shared/HeaderWithNavigationContainer'

class PhotoPage extends Component {

    static propTypes = {
        photoSrc: PropTypes.string
    }

    render() {
        const {photoSrc} = this.props;
        const readyToSubmit = !isEmpty(photoSrc)
        return (
            <Fragment>
                <HeaderWithNavigationContainer
                    displayBackButton={false}
                    displayNextButton={true}
                    title={Headers.PHOTO}
                    readyToSubmit={readyToSubmit}
                    onNext={dispatch => (dispatch(photoStepCompleted()))}/>
                <div className="columns is-desktop">
                    <div className="column is-6 is-offset-3">
                        <PhotoPanel sourceUrl={photoSrc}/>
                        <br></br>
                        <UploadPhotoFile/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photoSrc: getPhotoSrc(state),
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

