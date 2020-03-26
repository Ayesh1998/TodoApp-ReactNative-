import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, settodos] = useState([
    { text: "Fishing", key: "1" },
    { text: "Fishing", key: "2" },
    { text: "Fishing", key: "3" },
    { text: "Fishing", key: "4" },
    { text: "Fishing", key: "5" }
  ]);

  const pressHandler = id => {
    settodos(prevState => {
      return prevState.filter(item => item.key !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          {/*  */}
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  },
  header: {
    paddingTop: 30,
    marginTop: 60
  }
});
