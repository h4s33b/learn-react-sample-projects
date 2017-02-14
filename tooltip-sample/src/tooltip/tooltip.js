import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Tooltip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: false,
            toggleEvent: null
        };
        this.toggle = this
            .toggle
            .bind(this);
    }

    toggle(e) {
        if (this.state.toggleEvent !== null && this.state.toggleEvent === e.type) {
            const tooltipNode = ReactDOM.findDOMNode(this)
            this.setState({
                opacity: !this.state.opacity,
                top: tooltipNode.offsetTop,
                left: tooltipNode.offsetLeft,
                toggleEvent : e.type
            })
        }else if(this.state.toggleEvent === null && e.type!=='click'){
            const tooltipNode = ReactDOM.findDOMNode(this)
            this.setState({
                opacity: !this.state.opacity,
                top: tooltipNode.offsetTop,
                left: tooltipNode.offsetLeft,
                toggleEvent : null
            })
        }
    }

    render() {
        const moveMent = {
            top: this.props.pos
                ? -30
                : 20
        };
        const style = {
            zIndex: (this.state.opacity)
                ? 1000
                : -1000,
            opacity: + this.state.opacity,
            top: (this.state.top || 0) + moveMent.top,
            left: (this.state.left || 0) - 30
        }
        return (
            <div style={{
                display: 'inline'
            }}>
                <span
                    style={{
                    color: 'blue'
                }}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}
                    onClick={this.toggle}>
                    {this.props.children}
                </span>
                <div
                    className={this.props.pos
                    ? 'tooltip ' + this.props.pos
                    : 'tooltip bottom'}
                    style={style}
                    role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tooltip;