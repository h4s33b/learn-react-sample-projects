import React, {Component} from 'react';

class Button extends React.Component {

    startTimer(event) {
        return this
            .props
            .startTimer(this.props.time)
    }

    render() {
        return (
            <button
                type="button"
                className='btn-default btn'
                onClick={this
                .startTimer
                .bind(this)}>
                {this.props.time > 0
                    ? this.props.time + 'seconds'
                    : 'Stop Timer'}

            </button>
        );

    }
}

export default Button;