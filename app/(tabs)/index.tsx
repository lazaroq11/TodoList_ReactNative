import React, { useState } from 'react';
import { Text, TextInput, Pressable, Alert, SafeAreaView, View, StyleSheet, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TaskList from '@/components/TaskList';


export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);


  const addTask = () => {
    if (text) {
      setTasks([...tasks, { text, completed: false }]);
      setText(''); 
      setModalVisible(false); 
    } else {
      Alert.alert('Please enter a task');
    }
  };

  const deleteTask = (taskToDelete:string)=>{
    setTasks(tasks.filter(task => task.text !== taskToDelete));
  };

  const onComplete = (taskToToggle: string) => {
    setTasks(tasks.map(task =>
      task.text === taskToToggle ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseText} numberOfLines={1} ellipsizeMode='tail' selectable>
        TodoList
      </Text>

      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={onComplete} />

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Tarefa</Text>
              <SafeAreaView>
                <TextInput
                  style={styles.input}
                  onChangeText={setText}
                  value={text}
                  placeholder="Enter task"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setNumber}
                  value={number}
                  placeholder="Numeric input"
                  keyboardType="numeric"
                />
              </SafeAreaView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={addTask}>
                <Text style={styles.textStyle}>Add Task</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <MaterialIcons name="add" size={40} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    padding: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  baseText: {
    textAlign: 'center',
    fontSize: 30,
    padding:20,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#000',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 10, 
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
