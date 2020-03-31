/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Botton from './Botton';
import TodoList from './TodoList';
import TabBar from './TabBar';
let todoIndex = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValut: '',
      todos: [],
      types: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.setType = this.setType.bind(this);
  }
  inputChange(inputValut) {
    this.setState({inputValut});
  }
  submitTodo() {
    if (this.state.inputValut.match(/^\s/)) {
      return;
    }
    const todo = {
      title: this.state.inputValut,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos, inputValut: ''}, () => {});
  }
  // eslint-disable-next-line no-shadow
  deleteTodo(todoIndex) {
    let {todos} = this.state;
    todos = todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({todos});
  }
  // eslint-disable-next-line no-shadow
  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach(todo => {
      // alert(todo.todoIndex);
      // alert(todoIndex);
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({todos});
  }
  setType(types) {
    this.setState({types});
  }
  render() {
    const {inputValut, todos, types} = this.state;
    // alert(types)
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValut={inputValut}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            type={types}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <Botton submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={types} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
