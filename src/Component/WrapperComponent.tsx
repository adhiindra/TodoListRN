import { TextInput, Button } from "@react-native-material/core";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Platform, } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { useStoreTodo } from "../TodoData";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

const WrapperComponent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const { addTodo } = useStoreTodo()
  const [datenow, setDatenow] = useState(new Date(Date.now()));

  const onChange = (event, value) => {
    setDatenow(value);
    setDate(moment(value).format('DD/MM/YYYY'))
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View>
      <TouchableOpacity style={styles.floatingBtn} onPress={toggleModal}>
        <Icon name='plus' size={25} color='#36393F' />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{ height: '42%', backgroundColor: '#36393F', padding: 25, marginBottom: 100 }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, marginBottom: 40, }}>Add New List</Text>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
              placeholder="Title"
              variant='outlined'
              onChangeText={(title) => setTitle(title)}
            />
            <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center',marginVertical:20}}>
              <Text style={{color:'white',fontSize:15, fontWeight:'bold'}}> Select Date :</Text>

              <View style={styles.timepicker}>
                <DateTimePicker
                  value={datenow}
                  mode={'date'}
                  minimumDate={new Date()}
                  display={'default'}
                  themeVariant={'dark'}
                  onChange={onChange}
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'column', marginTop: 10, alignItems: 'center' }}>
            <View style={{ width: 150, marginBottom: 10 }}>
              <Button title="Save" onPress={() => addTodo(title, date, "OPEN")} />
            </View>
            <View style={{ width: 150 }}>
              <Button color='#36393F' title="Cancel" onPress={toggleModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingBtn: {
    width: 60,
    height: 60,
    paddingTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#01c853',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  textInput: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  timepicker: {
    width:200,
    justifyContent: 'center'
  }
});

export default WrapperComponent;

