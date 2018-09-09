import React, {Component} from 'react';
import {connect} from 'react-redux';
import SkippableStepHeader from './SkippableStepHeader'
import EnsurePhotoStep from './EnsurePhotoStep'


class PhotoPage extends Component {


    render() {

        return (
            <section className="is-bold">
                <SkippableStepHeader title='PHOTO' />
                <EnsurePhotoStep />
            </section>
        )
    }
}

PhotoPage.propTypes = {}

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps)(PhotoPage);

