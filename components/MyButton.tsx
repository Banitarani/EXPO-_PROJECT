import { StyleSheet,Text,TouchableOpacity } from 'react-native'
import React from 'react';

const MyButton = ({title ,onPress}) => {
  return (
      <TouchableOpacity 
      activeOpacity={0.6}  style={styles.button} onPress={onPress}>
      <Text style={styles.text} >{title}</Text>
      </TouchableOpacity>
  )
};
const styles = StyleSheet.create({
  button:{
    backgroundColor: '#FFF',
    borderRadius: 15,
    width:280,
    height:50,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 2,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
              color: '#FF4500',
              fontSize: 18,
              fontFamily: 'Times New Roman',
              fontWeight: 'bold',
              
  }
});
export default MyButton;  