import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  var count = 7;

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

  const addItem = text => {
    if (text.length > 3) {
      var obj = { text: text, key: Math.random().toString() };
      var todoss = [obj, ...todos];
      settodos(todoss);
    } else {
      Alert.alert("Oppss", "Todo must be 3 char long", [
        {
          text: "Ok",
          onPress: () => {
            console.log("alert closed");
          }
        }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addItem={addItem} />
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
