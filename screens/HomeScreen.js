import { ScrollView, StyleSheet } from 'react-native';
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { string } from "prop-types";

class HomeScreen extends Component {
  state = {
    data: []
  };
  componentDidMount = () => {
    this.fetchData();
  };
  fetchData = async () => {
    const response = await fetch(
      "https://thawing-hollows-21222.herokuapp.com/artists"
    );
    const json = await response.json();
    this.setState({ data: json.data });
  };

  alertItemName = item => {
    const main =
      "Email:" + item.email + "\nName:" + item.name + "\nBody:" + item.body;
    alert(main);
  };
  render() {
    return (
      
      <ScrollView style={styles.container}>
<View>
        {this.state.data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
           onPress={() => this.props.navigation.navigate('ArtistDetails',
           {
             artist : item
             //func: alertItemName()
           })}
          // onPress={() => this.alertItemName(item)}
           
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}</View>
      </ScrollView>
      
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 3,
    //backgroundColor: "#d9f9b1",
    //alignItems: "center"
  },
  text: {
    color: "#4f603c"
  }
});
