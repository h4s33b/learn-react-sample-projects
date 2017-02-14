import React, {Component} from 'react';
import Timer from '../timer/timer';
import Button from '../button/button';

class TimerWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 0,
            timer: null
        }
        this.startTimer = this
            .startTimer
            .bind(this)

    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            console.log('2: Inside of setInterval')
            var timeLeft = this.state.timeLeft>0?this.state.timeLeft - 1:0;
            if (timeLeft === 0) 
                clearInterval(timer)
            this.setState({timeLeft: timeLeft})
        }, 1000)
        console.log('1: After setInterval')
        return this.setState({timeLeft: timeLeft, timer: timer})
    }

    render() {
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group">
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="10" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                    <Button time="0" startTimer={this.startTimer}/>
                </div><Timer timeLeft={this.state.timeLeft}/>
            </div>
        );
    }
}

export default TimerWrapper;