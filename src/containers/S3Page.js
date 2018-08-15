import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {
    uploadAudioClipRequested
} from '../actions/s3'

class S3Page extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            file: null,
            readyToSubmit: false
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        if (this.state.readyToSubmit) {
            this.props.handleUpload(this.state.file)
        } else {
            console.log('wheres the file')
        }
    }

    handleFile(event) {
        const file = event.target.files[0]
        this.setState({file: file, readyToSubmit: true})

    }

    render() {
        const {fetching, s3, onRequestBucket, error, fileUploadSuccess} = this.props;
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
                <div>
                    <div>
                        {fileUploadSuccess ? (
                            <div className="notification is-danger">
                                <button className="delete"></button>
                                Primar lorem ipsum dolor sit amet, consectetur
                                adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
                                placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
                                gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
                                consectetur adipiscing elit
                            </div>

                        ) : (null)}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input label='upload file' type='file' onChange={this.handleFile}/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        );
    }
}


S3Page.propTypes = {
    fetching: PropTypes.bool,
    fileUploadSuccess: PropTypes.bool,
    s3: PropTypes.array,
    error: PropTypes.object,
    onRequestBucket: PropTypes.func,
    handleUpload: PropTypes.func,

}

const mapStateToProps = state => {
    return {
        fetching: state.s3.fetching,
        s3: state.s3.items,
        error: state.s3.error,
        fileUploadSuccess: state.s3.fileUploadSuccess
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestBucket: () => dispatch({type: 'FETCH_BUCKET_CONTENTS_REQUESTED'}),
        handleUpload: file => dispatch(uploadAudioClipRequested({file}))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(S3Page);

