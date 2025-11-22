import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addTask }) {

  const [taskText, setTaskText] = React.useState('');

  const handleAdd = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />

      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10
  }
});
