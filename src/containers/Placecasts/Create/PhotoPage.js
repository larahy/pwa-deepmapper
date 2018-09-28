import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import {photoSkipped, photoStepCompleted} from '../../../actions/placecasts/create'
import {getPhotoSrc, getTitle} from '../../../selectors/create'
import PropTypes from 'prop-types'
import UploadPhotoFile from '../../../components/Photo/UploadPhotoFile'

class PhotoPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        loading: PropTypes.bool,
        readyToSubmit: PropTypes.bool,
        photoSrc: PropTypes.string
    }

    render() {
        const {readyToSubmit, photoSrc} = this.props;
        const imageClasses = readyToSubmit ? '' : 'is-hidden'

        return (
            <Fragment>
                <SkippableStepHeader
                    title='PHOTO'
                    readyToSubmitOther={readyToSubmit}
                    onSkip={photoSkipped()}
                    onNext={dispatch => (dispatch(photoStepCompleted()))}/>

                <div className={imageClasses}>
                    <figure className="image is-4by3">
                        <img src={photoSrc}/>
                    </figure>
                </div>
                <br></br>

                <UploadPhotoFile/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        placeCastTitle: getTitle(state),
        photoSrc: getPhotoSrc(state),
        readyToSubmit: state.create.readyToSubmitPhoto
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

