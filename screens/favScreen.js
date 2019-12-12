import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    FlatList,
    AsyncStorage, 
} from 'react-native';
import { startAsync } from 'expo/build/AR';
import { isTemplateElement, isFlow } from '@babel/types';
import firebase from '../firebase';
import { Container, Content, ListItem, Item} from 'native-base';

var data = []
var currentUser


 class favScreen extends React.Component{
    constructor(props){
        super(props)
        

        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})

        this.state = {
            listViewData : data
        }
    }
componentDidMount(){
    
    this.getFavourites()
    
}

getFavourites = async (data) => {
    

    currentUser = await firebase.auth().currentUser
 var that = this
  firebase.database().ref(currentUser.uid).child('Favourites').on('child_added', function(data){
    var newData = [...that.state.listViewData]
    newData.push(data);
    
    that.setState({ listViewData : newData })
  })
   favs = await AsyncStorage.getItem(data);
        if(favs==null){
            this.setState({data:[]})
        }else{
            console.log(favs);
            this.setState({data:JSON.parse(favs)})
        }

}
render(){
   
    return(
        <Container style={{flex: 1, backgroundColor: 'white', marginTop: 20,}}>
            <Content>
                
                <ListView
                enableEmptySections
                dataSource={this.ds.cloneWithRows(
                this.state.listViewData
                )} 
                renderRow={data => 
            <ListItem>
            <Text style={{flex:1}}>       { data.val().date }</Text>       
            <Text style={{flex:1}}>       {data.val().name }</Text>  
            <Text style={{flex:1}}>       {data.val().stage }</Text>                 
          </ListItem>  }/>
                
                
            </Content>
        </Container>
    );
}

}
export default favScreen;

favScreen.navigationOptions = {
    title: 'favScreen',
  };