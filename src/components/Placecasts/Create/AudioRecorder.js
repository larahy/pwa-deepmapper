import React from 'react'
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faPauseCircle} from '@fortawesome/free-regular-svg-icons'
import {faPause, faStop, faPlay, faMicrophone, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
// import {AttributeScopes, Validations, Tags} from '../../../constants/attributes'

export default class AudioRecorder extends React.Component {
    static propTypes = {
        onNext: PropTypes.func
    }
    static defaultProps = {
        onNext: () => {
        }
    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onAudioChosen = (e) => {
        const player = document.querySelector('audio')
        const file = e.target.files[0];
        player.src = URL.createObjectURL(file);
        // const play = document.querySelector('.play')
        // const pause = document.querySelector('.pause')
        // play.addEventListener('click', function () {
        //     player.play();
        // })
        // pause.addEventListener('click', function () {
        //     player.pause();
        // })
        e.preventDefault()
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onNext()
    }

    handlePlay = (event) => {
        const player = document.querySelector('audio')
        player.play()
        event.preventDefault()
    }

    handlePause = (event) => {

        const player = document.querySelector('audio')
        player.pause()
        event.preventDefault()
    }


    handleDelete = (event) => {

        const player = document.querySelector('audio')
        player.src = null
        event.preventDefault()
    }


    render() {

        return (

            <div className="steps-container is-centered">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-two-thirds is-centered">
                            <p>BUTTON GROUP 1</p>
                            <div className="buttons has-addons is-centered">
                                <p className="control">
                                    <a className="button">
                                        <span className="icon is-large">
                                            <FontAwesomeIcon icon={faMicrophone}/>
                                        </span>
                                        <span>Record</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button play" onClick={this.handlePlay}>
                                        <span className="icon is-large">
                                            <FontAwesomeIcon className="fa-align-right" icon={faPlay}/>
                                        </span>
                                        <span>Play</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button pause" onClick={this.handlePause}>
                                        <span className="icon is-large">
                                            <FontAwesomeIcon icon={faPause}/>
                                        </span>
                                        <span>Pause</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button"onClick={this.handleDelete} >
                                        <span className="icon is-large">
                                            <FontAwesomeIcon className="fa-align-right" icon={faTrashAlt}/>
                                        </span>
                                        <span>Delete</span>
                                    </a>
                                </p>
                            </div>
                            <p>BUTTON GROUP 2</p>
                            <div className="buttons is-centered">
                                <a className="button is-medium is-primary is-outlined is-rounded">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faMicrophone}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined is-rounded">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faStop}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined is-rounded">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faPlay}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined is-rounded">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faPause}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined is-rounded">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </span>
                                </a>
                            </div>
                            <p>BUTTON GROUP 3</p>
                            <div className="buttons is-centered has-addons-fullwidth">
                                <a className="button is-medium is-primary is-outlined">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faMicrophone}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faStop}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faPlay}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faPause}/>
                                    </span>
                                </a>
                                <a className="button is-medium is-primary is-outlined">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </span>
                                </a>
                            </div>
                            <p>BUTTON GROUP 4</p>
                            <div className="buttons is-centered has-addons">
                                <a className="button is-medium">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faMicrophone}/>
                                    </span>
                                </a>
                                <a className="button is-medium">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faStop}/>
                                    </span>
                                </a>
                                <a className="button is-medium">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faPlay}/>
                                    </span>
                                </a>
                                <a className="button is-medium">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faPause}/>
                                    </span>
                                </a>
                                <a className="button is-medium">
                                    <span className="icon is-large">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="media">
                        <audio></audio>
                    </div>

                    <div className="field">
                        <div className="file is-centered">
                            <label className="file-label">
                                <input className="file-input" type="file" accept="audio/*" onChange={this.onAudioChosen} capture id="recorder"/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">Upload audio</span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}
