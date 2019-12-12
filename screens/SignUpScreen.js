import React, { useState, useEffect } from 'react';
import {  Input, Text, Button, Toast } from 'galio-framework';
import { StyleSheet, TextInput, View, ImageBackground } from 'react-native';
import firebase from '../firebase';

export default props => {
    

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    

    const handleSubmit = async () => {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          props.navigation.navigate('Main');
        } catch (error) {
          setErrorMessage('Error');
        }
      }

      
    return(
        <ImageBackground source={require('../assets/images/splashguitar.png')} style={styles.backgroundImage} >
        <View style={{ margin: 200, marginTop: 300}}>
        <View>
          <TextInput
            name='email'
            value={ email }
            placeholder='Enter email'
            autoCapitalize='none'
            style={styles.tag}
            onChangeText={ setEmail }
          />
        </View>
        <View >
           
          <TextInput
            name='password'
            value={ password }
            placeholder='Enter password'
            password
            viewPass
            style={styles.tag}
            onChangeText={ setPassword }
          />
        </View>
        
        <Button   onPress={ handleSubmit }round size="small" color="success" style={styles.button} >SIGN UP </Button>
     
        <Button onPress={ () => {props.navigation.navigate('Login')} }round size="small" color="success" style={styles.button}>LOGIN </Button>
      </View>
      {/* <Toast isShow={ errorMessage } positionIndicator="center" color="warning" >
        { errorMessage }
      </Toast> */}
      </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tag: {
      alignSelf: "center",
      borderWidth: 1,
      flexDirection: "column",
      borderRadius: 10,
      borderColor: "gray",
      backgroundColor: "#ffffed",
    
      padding: 3,
      marginTop: 5,
      width: 300,
      height: 45,
      
  },
  button: {
    alignSelf: "center",
    borderWidth: 1,
  
    borderRadius: 10,
    borderColor: 'gray',
    padding: 3,
    marginTop: 10,
    width: 250,
    height: 45,
    
   },
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  }
  
  })