import React, { Component } from 'react';
import './List.css';

class List extends Component {

  render() {
    return (
      <div className="todo" onClick={this.props.deleteTodo}>
      <ul>
        {this.props.text}
      </ul>
      </div>

    );
  }
}

export default List;
