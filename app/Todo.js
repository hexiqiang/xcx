import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoButton from './TodoButton';
const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{todo.title}</Text>
      <View style={styles.buttons}>
        <TodoButton
          name="Done"
          complete={todo.complete}
          onPress={() => toggleComplete(todo.todoIndex)}
        />
        <TodoButton name="Delete" onPress={() => deleteTodo(todo.todoIndex)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
  },
  todoText: {
    fontSize: 17,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Todo;
