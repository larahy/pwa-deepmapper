/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'

export default class PlaybackPanel2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playPauseIcon: faPlay,
            currentTime: '0.00',
            totalTime: '0.00',
            progress: {width: '0%'}
        }
    }

    static formatTime(time) {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return min + ':' + ((sec<10) ? ('0' + sec) : sec);
    }

    displayTime =(event) => {
        const player = document.querySelector('.audio-player audio');

        this.setState({
            totalTime: PlaybackPanel2.formatTime(player.duration),
        })
        event.preventDefault()
    }

    updateProgress = (event) => {
        const player = document.querySelector('.audio-player audio');
        const current = player.currentTime;
        const percent = (current / player.duration) * 100;
        this.setState({
            currentTime: PlaybackPanel2.formatTime(current),
            progress: {width: percent + '%'}
        })
        event.preventDefault()
    }

    getCoefficient = (event) => {
        const player = document.querySelector('.audio-player audio');
        const slider = document.querySelector('.audio-player.slider');
        let offsetX = event.clientX - slider.offsetLeft;
        let width = slider.clientWidth;
        const K = offsetX / width;
        player.currentTime = player.duration * K;
    }

    togglePlay = (event) => {
        const player = document.querySelector('.audio-player audio');

        if(player.paused) {
            this.setState({
                playPauseIcon: faPause,
            })
            player.play();
        } else {
            this.setState({
                playPauseIcon: faPlay,
            })
            player.pause();
        }
        event.preventDefault()
    }

    audioEnded = (event) => {
        const player = document.querySelector('.audio-player audio');
        player.currentTime = 0;
        this.setState({
            playPauseIcon: faPlay,
        })
        event.preventDefault()
    }


    render() {
        const {src} = this.props;
        const {currentTime, progress, totalTime} = this.state;

        return <div className="media">
            <div className="audio audio-player">
                <a className="button is-medium is-white play-pause-btn" onClick={this.togglePlay}>
                    <span className="icon is-medium">
                        <FontAwesomeIcon icon={this.state.playPauseIcon}/>
                    </span>
                </a>

                <div className="controls">
                    <span className="current-time">{currentTime}</span>
                    <div className="slider" data-direction="horizontal">
                        <div className="progress" style={progress}>
                            <div draggable={true} className="pin" id="progress-pin" onDragEndCapture={this.getCoefficient} ></div>
                        </div>
                    </div>
                    <span className="total-time">{totalTime}</span>
                </div>

                <audio src={src} type="audio/mpeg" onTimeUpdate={this.updateProgress} onEnded={this.audioEnded} onLoadedMetadata={this.displayTime}>
                </audio>
            </div>
        </div>
    }
}

PlaybackPanel2.propTypes = {
    src: PropTypes.string.isRequired,
}

