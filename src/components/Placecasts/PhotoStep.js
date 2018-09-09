import React from 'react'
import PropTypes from 'prop-types';

export default class PhotoStep extends React.Component {
    static propTypes = {
        onNext: PropTypes.func
    }

    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {
        event.preventDefault()
        this.props.onNext()
    }

    onPhotoChosen = (e) => {
        const files = e.target.files
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
            const output = document.getElementById('output');
            output.src = URL.createObjectURL(file);
        }
    }

    render() {

        return (
            <div className="container has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <figure className="image is-4by3">
                            <img id="output"/>
                        </figure>
                    </div>
                    <div className="column is-6 is-offset-1">
                        <h1 className="title is-2">
                            Step 1:
                        </h1>
                        <h2 className="subtitle is-4">
                            Please choose or take a photo to accompany your placecast
                        </h2>
                        <p className="has-text-centered">
                            <label
                                className="fileContainer button is-primary is-uppercase has-text-weight-bold">
                                Take photo!
                                <input type="file" accept="image/*" id="file-input" onChange={this.onPhotoChosen}/>
                            </label>
                        </p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <button
                                type='submit'
                                className='button'>
                                NEXT
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}
