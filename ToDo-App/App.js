import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddToDo from './components/addToDo';
import Header from './components/header';
import ToDoItem from './components/toDoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'finish this tutorial', key: '1' },
    { text: 'make the I app I want to do', key: '2' },
    { text: 'find a job', key: '3' },
    { text: 'get money', key: '4' },
  ]);

  onPress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  onSubmit = (text) => {
    if (text.length >= 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("OOPS!", "ToDos should be at least 3 characters long."), [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo onSubmit={this.onSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} onPress={this.onPress} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
