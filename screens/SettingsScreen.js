import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Block, Card, theme, Text , Button} from 'native-base';

import firebase from '../firebase';

export default UserProfile = props => {
  const [ user, setUser ] = useState();

  const handleLogout = async () => {
    await firebase.auth().signOut();
  }

  firebase.auth().onAuthStateChanged(setUser);

  const navigateTo = (route) => {
    props.navigation.navigate(route);
  }

  // useEffect(() => {
  //   if (!user) {
  //     const firebaseUser = firebase.auth().currentUser;
  //     if (firebaseUser) {
  //       setUser(firebaseUser);
  //     } else {
  //       navigateTo('Login');
  //     }
  //   }
  // });

  return (
    <ImageBackground source={require('../assets/images/splashguitar.png')} style={styles.backgroundImage} >

      <Block flex>
        <Text style={styles.tag}>
        { user && <Text>Signed in with { user.email }</Text> }
        </Text>
        <Button onPress={ user ? handleLogout : () => navigateTo('Login') } style={styles.button}>
          { user ? 'Logout' : 'Login' }
          
        </Button>
        
        {/* {
          user ? null :
          <Button onPress={ user ? handleLogout : () => navigateTo('SignUp') }>
            Sign Up
          </Button>
        } */}
      </Block>
  </ImageBackground>
  );
}

UserProfile.navigationOptions = {
  title: 'User Profile',
};

const styles = StyleSheet.create({
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
  },
  tag: {
    alignSelf: "center",
    
    flexDirection: "column",
    borderRadius: 10,
    borderColor: "gray",
    fontSize: 17,
    color: "#ffffff",
    padding: 3,
    marginTop: 5,
    width: 320,
    height: 45,
    
},
  
});