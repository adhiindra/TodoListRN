import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Setting = ({navigation}: {navigation: any}) => {
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={Logout}><Text style={styles.btnText}>Log Out</Text></TouchableOpacity>
    </View>
  );

  function Logout(){
    return navigation.navigate('Login');
  }

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#36393F",
  },
  btnText:{
    color: "#ffffff",
    fontWeight:'bold',
  },
  btn: {
    backgroundColor: '#C33939',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
  }
});

export default Setting;