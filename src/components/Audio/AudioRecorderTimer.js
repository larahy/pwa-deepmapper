import React, { Component } from 'react';
const prettyMs = require('pretty-ms');

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
              <h3>{this.state.time > 0 && prettyMs(this.state.time)}</h3>
          </div>
      );
  }
}

export default AudioRecorderTimer;