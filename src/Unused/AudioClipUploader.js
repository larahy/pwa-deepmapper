import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {
    uploadRequested
} from '../actions/s3'

class AudioClipUploader extends React.Component {

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
        const {error, audioUploadSuccess} = this.props;
        return (
            <div className='container is-fluid'>
                <div>
                    {error && <p style={{color: 'red'}}>Uh oh - something went wrong!</p>}
                </div>
                <div>
                    <div>
                        {audioUploadSuccess ? (
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


AudioClipUploader.propTypes = {
    audioUploadSuccess: PropTypes.bool,
    error: PropTypes.object,
    handleUpload: PropTypes.func,

}

const mapStateToProps = state => {
    return {
        error: state.s3.error,
        audioUploadSuccess: state.s3.audioUploadSuccess
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUpload: file => dispatch(uploadRequested({file}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioClipUploader);

