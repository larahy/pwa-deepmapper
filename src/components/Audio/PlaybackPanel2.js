import React from 'react'
import PropTypes from 'prop-types'
import './Audio.scss'

export default class PlaybackPanel2 extends React.Component {
    componentDidMount() {

        var aud = document.querySelector('audio');
        var playpause = document.querySelector('.play-pause')
        playpause.addEventListener('click', function () {
            if (aud.paused) {
                aud.play();
                playpause.classList.remove('icon-play');
                playpause.classList.add('icon-stop');
            }
            else {
                aud.pause();
                playpause.classList.remove('icon-stop');
                playpause.classList.add('icon-play');
            }

        })

    }

    render() {
        const {placecast} = this.props;

        return <div className="media">
            <audio src={`http://d31dl1irjvblxj.cloudfront.net/${placecast.s3_audio_filename}`}>
            </audio>
            <div className='player'>
                <div className='info'>
                    <div className='name'>{placecast.title}</div>
                    <div className='singer'>Dan Snow</div>
                </div>
                <div className='btns'>
                    <div className="iconfont play-pause icon-play"></div>
                </div>
            </div>
        </div>
    }
}

PlaybackPanel2.propTypes = {
    placecast: PropTypes.object.isRequired,
}

