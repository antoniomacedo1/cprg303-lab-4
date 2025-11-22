import { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoForm from '../ToDoForm';
import ToDoList from '../ToDoList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    setTasks([...tasks, taskText]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>My ToDo List</Text>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
}
