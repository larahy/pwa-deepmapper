/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'

export default class PlaybackPanel2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playPauseIcon: faPlay
        }
    }

    componentDidMount() {
        var audioPlayer = document.querySelector('.audio-player');
        var playpauseBtn = audioPlayer.querySelector('.play-pause-btn');
        var progress = audioPlayer.querySelector('.progress');

        var player = audioPlayer.querySelector('audio');
        var currentTime = audioPlayer.querySelector('.current-time');
        var totalTime = audioPlayer.querySelector('.total-time');


        player.addEventListener('timeupdate', updateProgress);
        player.addEventListener('loadedmetadata', () => {
            totalTime.textContent = formatTime(player.duration);
        });
        player.addEventListener('canplay', makePlay);
        player.addEventListener('ended', function(){
            player.currentTime = 0;
        });
        function updateProgress() {
            var current = player.currentTime;
            var percent = (current / player.duration) * 100;
            progress.style.width = percent + '%';
            currentTime.textContent = formatTime(current);
        }


        function formatTime(time) {
            var min = Math.floor(time / 60);
            var sec = Math.floor(time % 60);
            return min + ':' + ((sec<10) ? ('0' + sec) : sec);
        }

        function makePlay() {
            playpauseBtn.style.display = 'block';
        }
    }

    getCoefficient = (event) => {
        var audioPlayer = document.querySelector('.audio-player');
        var player = audioPlayer.querySelector('audio');
        const slider = audioPlayer.querySelector('.slider');

        let offsetX = event.clientX - slider.offsetLeft;
        let width = slider.clientWidth;
        const K = offsetX / width;
        player.currentTime = player.duration * K;
    }

    togglePlay = (event) => {
        let audioPlayer = document.querySelector('.audio-player');
        const player = audioPlayer.querySelector('audio')
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


    render() {
        const {src} = this.props;

        return <div className="media">
            <div className="audio audio-player">
                <a className="button is-medium is-white play-pause-btn" onClick={this.togglePlay}>
                    <span className="icon is-medium">
                        <FontAwesomeIcon icon={this.state.playPauseIcon}/>
                    </span>
                </a>

                <div className="controls">
                    <span className="current-time">0:00</span>
                    <div className="slider" data-direction="horizontal">
                        <div className="progress">
                            <div draggable={true} className="pin" id="progress-pin" onDragEndCapture={this.getCoefficient} ></div>
                        </div>
                    </div>
                    <span className="total-time">0:00</span>
                </div>

                <audio crossOrigin>
                    <source src={src}
                            type="audio/mpeg" />
                </audio>
            </div>
        </div>
    }
}

PlaybackPanel2.propTypes = {
    src: PropTypes.string.isRequired,
}

