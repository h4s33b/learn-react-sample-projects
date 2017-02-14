import React, {Component} from 'react';

class Timer extends React.Component {
    render() {
            return <h1>Time left: {this.props.timeLeft}</h1>;
        }
    }

export default Timer;