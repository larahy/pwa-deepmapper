import React from 'react'
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash'

import './styles.scss'

export default class PhotoStep extends React.Component {
    static propTypes = {
        onNext: PropTypes.func,
        onUpload: PropTypes.func,
        imageUrl: PropTypes.obj
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            image: {}
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onNext()
    }

    onPhotoChosen = (e) => {
        const files = e.target.files
        this.setState({
            image: files,
        })
        this.doSomethingWithFiles(files)
    };

    doSomethingWithFiles = (fileList) => {
        let file = null;

        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].type.match(/^image\//)) {
                file = fileList[i];
                break;
            }
        }

        if (file !== null) {
            const imageUrl = URL.createObjectURL(file);
            this.props.onUpload(file)
            const output = document.getElementById('output');
            output.src = imageUrl
            console.log('the image from props', this.props.imageUrl)
        }
    }

    render() {
        const imageClasses = isEmpty(this.state.image) ? 'is-hidden' : ''
        const instructionsClasses = isEmpty(this.state.image) ? '' : 'is-hidden'
        return (
            <div>
                <div className="steps-container">
                    <div className="container has-text-centered">
                        <div className={imageClasses}>
                            <figure className="image is-3by2">
                                <img id="output"/>
                            </figure>
                        </div>
                        <div className={instructionsClasses}>
                            <h1 className="title is-2">
                                Step 1:
                            </h1>
                            <h2 className="subtitle is-4">
                                Please choose or take a photo to accompany your placecast
                            </h2>
                        </div>
                        <br></br>
                        <p>
                            <label
                                className="fileContainer button is-primary is-uppercase has-text-weight-bold">
                                Choose photo!
                                <input type="file" accept="image/*" id="file-input" onChange={this.onPhotoChosen}/>
                            </label>
                        </p>
                    </div>
                </div>
                <div className={imageClasses}>
                    <div className="container is-widescreen next-container">
                        <form onSubmit={this.handleSubmit}>
                            <button
                                type='submit'
                                className='button is-primary is-inverted is-outlined is-fullwidth'>
                                NEXT
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
