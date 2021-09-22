import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'finish this tutorial', key: '1'},
    {text: 'make the I app I want to do', key: '2'},
    {text: 'find a job', key: '3'},
    {text: 'get money', key: '4'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
