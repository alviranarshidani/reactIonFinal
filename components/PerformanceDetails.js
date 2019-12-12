import React, { useState, useEffect, setState } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Entypo';
import firebase from 'firebase';
import { string } from 'prop-types';


const styles = StyleSheet.create({
    img: {
      // width: "50%",
      height: 50,
      maxWidth: 100,
      borderRadius: 50/2,
      aspectRatio: 2,
      overflow: "hidden",
      
      borderColor: "black",
      resizeMode: "cover",
      
    },
    font: {
      fontWeight: "700",
      
    },
    container: {
      // flex: 1,
      borderWidth: 1,
      alignContent: "center",
      flexDirection: "row",
      marginTop: 20,
     
      borderStyle: "solid",
      borderColor: "black",
      backgroundColor: '#CED0CE',
      
      
    },
  
    button: {
      backgroundColor: '#00f',
      padding: 1,
      borderColor: "black", 
      borderWidth: 1,
      
      
    },
    tagView: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      
  },
  tag: {
      //borderWidth: 1,
     // borderRadius: 10,
     // borderColor: "red",
     // backgroundColor: '#ffffed',
      padding: 15,
      marginTop: 10,
  },
    
  });



export const PerformanceDetails = props => {
  const [icon, setIcon] = useState();
  // const [favs, setFavs] = useState('');

  
    var currentUser;

     const addToFavourites = async () => {
      
      setIcon(icon ==='star-outlined' ? 'star' : 'star-outlined');
       
      currentUser = await firebase.auth().currentUser;
      var databaseRef = await firebase.database().ref(currentUser.uid).child('Favourites').push();
      databaseRef.set({
        'date': props.date,
        'name': props.artist.name,
        'stage': props.stage.name
      })
      // favs = await AsyncStorage.getItem(databaseRef)
      // setFavs(favs)
      
    }

    
    

    return (
        
        props.artist ?
        
            <View style={styles.tag}>
             
          
            <Text style={{flexDirection : "column",flex:6}}> 
            <Text style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
            <Icon name={icon ==='star-outlined' ? 'star' : 'star-outlined'} color="red" size={24} background='transparent'
              onPress={addToFavourites}/>
            <Text style={{flex:1}}>       { props.date }</Text>       
            <Text style={{flex:1}}>       {props.stage.name }</Text>  
            <Text style={{flex:1}}>       {props.artist.name }</Text> 
            </Text>
            
             </Text>
         

             </View>
          
       
        :
        null
        
    );
}