/* eslint-disable */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import {publishPlacecast, savePlacecast} from '../../../actions/placecasts/create'
import {getAudioSrc, getPhotoSrc, getTitle} from '../../../selectors/create'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash'
import UpdatablePlaybackPanel from './UpdatablePlaybackPanel'


class ReviewPage extends Component {

    static propTypes = {
        placeCastTitle: PropTypes.string,
        photoSrc: PropTypes.string,
        audioSrc: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            readyToSubmit: true,
        }
    }



    render() {
        const {photoSrc, audioSrc} = this.props
        const playbackElement = audioSrc === "" ? <audio></audio> : <UpdatablePlaybackPanel src={audioSrc}/>
        const imageSrcUrl = photoSrc === "" ? 'https://bulma.io/images/placeholders/640x480.png' : photoSrc

        return (
            <Fragment>
                <SkippableStepHeader
                    title='FINALLY: REVIEW'
                    readyToSubmitOther={this.state.readyToSubmit}
                    onSkip={savePlacecast()}
                    onNext={dispatch => (dispatch(publishPlacecast()))}/>
                <div className="steps-container is-centered">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-two-thirds is-centered">
                                <div className="tile is-parent">
                                    <article className="tile is-child">
                                        <figure className="image is-4by3">
                                            <img src={imageSrcUrl} />
                                        </figure>
                                    </article>
                                </div>
                                {playbackElement}
                            </div>
                        </div>

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
        audioSrc: getAudioSrc(state),
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);

