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
        const instructionsClasses = readyToSubmit ? 'is-hidden' : ''

        return (
            <Fragment>
                <SkippableStepHeader
                    title='STEP 2: PHOTO'
                    readyToSubmitOther={readyToSubmit}
                    onSkip={photoSkipped()}
                    onNext={dispatch => (dispatch(photoStepCompleted()))}/>
                <div className="steps-container">
                    <div className="container has-text-centered">
                        <div className={imageClasses}>
                            <figure className="image is-4by3">
                                <img src={photoSrc}/>
                            </figure>
                        </div>
                        <div className={instructionsClasses}>
                            <h2 className="subtitle is-4">
                                Please choose or take a photo to accompany your placecast
                            </h2>
                        </div>
                        <br></br>
                    </div>
                </div>

                <UploadPhotoFile />
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

