// TaskList.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItem, Pressable, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


interface TaskListProps {
  tasks: { text: string; completed: boolean }[];
  onDelete: (task:string)=> void;
  onComplete:(task:string)=>void;
}

export default function TaskList({ tasks, onDelete, onComplete }: TaskListProps) {
    const renderItem: ListRenderItem<{ text: string; completed: boolean }> = ({ item }) => (
    <View style={styles.item}>

        <Text style={[styles.taskText, item.completed && styles.completedTask]}>{item.text}</Text>
        <Switch value={item.completed} onValueChange={()=>onComplete(item.text)}style={styles.switch}/>
      <Pressable onPress={()=>onDelete(item.text)}>
      <MaterialIcons name="delete" size={40} color="#000" />
      </Pressable>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: '#ccc',
      },
      taskText: {
        flex: 1,
        fontSize: 20,
      },
      completedTask: {
        textDecorationLine: 'line-through',
        color: 'gray',
      },
      switch: {
        marginRight: 10,
      },

});
