import { View, Text } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Text key={index} style={{ fontSize: 18 }}>
          • {task}
        </Text>
      ))}
    </View>
  );
}
