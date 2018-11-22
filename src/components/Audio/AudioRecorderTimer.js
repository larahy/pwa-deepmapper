import React, { Component } from 'react';
import Time from 'react-time-format';

class AudioRecorderTimer extends Component {
  state = {
      time: 0,
      isOn: false,
      start: 0
  }

  componentDidMount() {
      this.setState({
          isOn: false,
          time: this.state.time,
          start: Date.now() - this.state.time
      });

      this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
      }), 1000);
  }

  componentWillUnmount() {
      this.setState({ isOn: false })
      clearInterval(this.timer);
  }

  render() {
      return (
          <div className='recorder-timer-container'>
              <Time value={this.state.time} format="mm:ss" />
          </div>
      );
  }
}

export default AudioRecorderTimer;