import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default ArtistDetails = (props) => {
  const artist = props.navigation.getParam('artist');

  
  return (
    <View>
      <Text>{artist.id}</Text>
      <Text>{artist.website}</Text>
      <Text>{artist.name }</Text>
      <Text>{artist.website}</Text>
      <Text>{artist.twitter}</Text>
      <Text>{artist.facebook}</Text>
      <Text>{artist.instagram}</Text>
      <Text>{artist.email}</Text>
      <Text>{artist.bio}</Text>

    </View>
  );
}

ArtistDetails.navigationOptions = {
  title: 'Artist',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
