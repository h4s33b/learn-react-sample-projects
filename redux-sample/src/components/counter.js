import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //This is called for Loading Initial State
        this.props.loadInitialState();
    }

    render() {
        //We are setting variables to be used in our templates
        const { counter } = this.props.counter;
        return (
            <div className="container">
                {counter}
                <br />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.incrementCounterNow()}
                    >
                    Increment Counter
                </button>
                <br />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.decrementCounterNow()}
                    >
                    Decrement Counter
                </button>
            </div>
        );
    }
}

export default Counter;