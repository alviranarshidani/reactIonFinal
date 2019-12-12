import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TextInput } from 'react-native';

import {Button, Input} from 'galio-framework';
import firebase from '../firebase';

export default props =>{
  
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
 


 const handleSubmit =  async () => {
   await firebase.auth().signInWithEmailAndPassword(email, password);
   
   props.navigation.navigate('Main');
   
}

   
   


 const goToSignUp = () => {
    props.navigation.navigate('SignUp');
 };


    return (
      <ImageBackground source={require('../assets/images/splashguitar.png')} style={styles.backgroundImage} >
      <View style={{ margin: 200, marginTop: 300}}>
        <View>
          <TextInput
            
            value={ email }
            placeholder='Enter email'
            autoCapitalize='none'
            style={styles.tag}
            onChangeText={ setEmail }
          />
      
          <TextInput
            value={ password }
            secureTextEntry
            placeholder='Enter password'
            autoCapitalize='none'
            style={styles.tag}
            onChangeText={ setPassword }
          />
        
        
        <Button  onPress={ handleSubmit } round size="small" color="success" style={styles.button}>LOGIN</Button>
      
        <Button  onPress ={ goToSignUp } round size="small" color="success" style={styles.button}>SIGNUP</Button>
        
          
          </View>
          </View>
      </ImageBackground>
    )
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