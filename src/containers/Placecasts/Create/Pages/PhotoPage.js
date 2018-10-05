import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash'
import SkippableStepHeader from '../SkippableStepHeader'
import {photoSkipped, photoStepCompleted} from '../../../../actions/placecasts/create'
import {getPhotoSrc, getTitle} from '../../../../selectors/create'
import PropTypes from 'prop-types'
import UploadPhotoFile from '../../../../components/Photo/UploadPhotoFile'
import PhotoPanel from '../../../../components/Photo/PhotoPanel'

class PhotoPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        photoSrc: PropTypes.string
    }

    render() {
        const {photoSrc} = this.props;
        const readyToSubmit = !isEmpty(photoSrc)
        const imageClasses = readyToSubmit ? '' : 'is-hidden'

        return (
            <Fragment>
                <SkippableStepHeader
                    title='PHOTO'
                    readyToSubmit={readyToSubmit}
                    onSkip={photoSkipped()}
                    onNext={dispatch => (dispatch(photoStepCompleted()))}/>
                <div className="columns is-desktop">
                    <div className="column is-6 is-offset-3">
                        <div className={imageClasses}>
                            <PhotoPanel sourceUrl={photoSrc}/>
                        </div>
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
        placeCastTitle: getTitle(state),
        photoSrc: getPhotoSrc(state),
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

