import React, { Component } from 'react';

class TodoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    }

    componentDidMount() {
        this.props.onGetTodo();
    }

    render() {
        const { todos } = this.props.todos;
        return (
            <div className="bg-info meeting-form">
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <b>Name:</b>
                    </div>
                    <div className="col-sm-8 col-md-10">
                        <input
                            type="text"
                            value={this.state.todo}
                            onChange={e => this.setState({ todo: e.target.value })}
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-2">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.props.onAddToDo(this.state.todo)}
                            > Add
                        </button>
                    </div>
                </div>

                {todos && todos.length > 0 ?
                    <ul>
                                    {todos.map((todo, index) => {
                                        return (
                                            <li key={index}>
                                                {todo.todoText}
                                            </li>
                                        );
                                    })}
                                </ul>
                     : null}
            </div>
        );
    }
}

export default TodoComponent;