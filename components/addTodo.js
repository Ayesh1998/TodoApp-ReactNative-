import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const AddTodo = () => {
  const [text, settext] = useState(initialState);

  const changeHandler = value => {
    settext(value);
  };

  return (
    <View>
      <TextInput placeholder="new todo.." onChangeText={changeHandler} />
    </View>
  );
};

export default AddTodo;
