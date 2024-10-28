import { View, Text } from 'react-native'
import React from 'react'
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;