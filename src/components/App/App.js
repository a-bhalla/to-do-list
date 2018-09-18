import React, { Component } from 'react';
import List from '../List/List';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    //textInput = values entered in
    this.state ={
      addTodo: '',
      list: [],
    }
  }

  updateTodo = (addTodo) => {
    this.setState ({ addTodo: addTodo.target.value})
  }

  addItem = () => {
    if (this.state.addItem === '') {
      return;
    }
    let listArray = this.state.list;
    listArray.push(this.state.addTodo);
    this.setState({ addTodo: '' }); //makes sure the input field is blank after entering something.
    this.textInput.focus(); //focuses on the field after input.
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      let listArray = this.state.list;
      listArray.push(this.state.addTodo);
      this.setState({ addTodo: '' });
    }
  }

  deleteMethod = (index) => {
    let listArray = this.state.list;
    listArray.splice(index, 1); //removes notes from notes array.
    this.setState({ list: listArray })
  }

  render() {
    let list = this.state.list.map((val, key) => {
      return <List key={key} text={val}
              deleteTodo={ () => this.deleteMethod(key)} />
    })

    return (
      <div className="container">
        <div className="header">Burn List 🔥</div>
        {list}

        <div className="btn" onClick={this.addItem}>+</div>

        <input type="text"
               ref={((input) => {this.textInput = input})}
               className="textInput"
               value={this.state.addTodo}
               onChange={addTodo => this.updateTodo(addTodo)}
               onKeyPress={this.handleKeyPress}/>
      </div>
    );
  }
}

export default App;
