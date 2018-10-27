import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import AudioClipUploader from './AudioClipUploader'

class S3Page extends React.Component {

    render() {
        const {fetching, s3, onRequestBucket, error} = this.props;
        return (
            <div className='container is-fluid'>
                <div id='list'>
                    <ul>{s3.map((file, i) => <li key={i}>{file.Key}</li>)}</ul>
                </div>
                <div>

                    {fetching ? (
                        <button disabled>Fetching...</button>
                    ) : (
                        <button onClick={onRequestBucket}>Request Bucket Contents</button>
                    )}

                    {error && <p style={{color: 'red'}}>Uh oh - something went wrong!</p>}
                </div>
                <AudioClipUploader />
            </div>
        );
    }
}


S3Page.propTypes = {
    fetching: PropTypes.bool,
    s3: PropTypes.array,
    error: PropTypes.object,
    onRequestBucket: PropTypes.func,

}

const mapStateToProps = state => {
    return {
        fetching: state.s3.fetching,
        s3: state.s3.items,
        error: state.s3.audioError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestBucket: () => dispatch({type: 'FETCH_BUCKET_CONTENTS_REQUESTED'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(S3Page);

