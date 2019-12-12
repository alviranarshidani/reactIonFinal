import React, {
  useState,
  useEffect,
 
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ListItem,
  Image,
  Alert,
  Button,
  TextInput,
 SafeAreaView,

 
} from 'react-native';

import {Icon, SearchBar} from 'react-native-elements';
// import * as Animate from 'react-native-animatable';
import { startAsync } from 'expo/build/AR';
import { isTemplateElement } from '@babel/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PerformanceDetails } from '../components/PerformanceDetails';
import ExpoLinksScreen from '@expo/samples/ExpoLinksView';
import 'firebase'


const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignContent: "flex-start",
    // width: "50%",
    height: "50%",
    maxWidth: "30%",
    borderRadius: 50/2,
    aspectRatio: 2,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "black",
    resizeMode: "cover",
    
  },
  font: {
    fontWeight: "700",
    
  },
  container: {
    // flex: 1,
    borderStyle: "solid",
    alignContent: "center",
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
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
    flexWrap: "wrap"
},
tag: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "white",
    padding: 3,
    marginTop: 5
},
  
});


  
const LinksScreen = (props) => {
  
  const [performances, setPerformances] = useState([]);

  const [artists, setArtists] = useState([]);
  const [stages, setStages] = useState([]);
  const [performancesDetails, setPerformanceDetails] = useState([]);
  const [sortBy, setSortBy] = useState('artist');
  const [ search, setSearch ] = useState('');
 
  
  
  useEffect(() => {
    if(performances.length === 0){
      fetch('https://thawing-hollows-21222.herokuapp.com/performances')
          .then(res => res.json())
          .then(({data}) => {
              setPerformances(data);
          })
  }
  
  if(artists.length === 0){
      fetch('https://thawing-hollows-21222.herokuapp.com/artists')
          .then(res => res.json())
          .then(({data}) => {
              setArtists(data);
          })
  }

  if(stages.length === 0){
      fetch('https://thawing-hollows-21222.herokuapp.com/stages')
          .then(res => res.json())
          .then(({data}) => {
              setStages(data);
          })
  }
  });
  
  
  useEffect(() => {
        if (performances.length && artists.length && stages.length) {
            const details = [];
            performances.forEach(performance => {
                const artist = artists.find(artist => artist.id === performance.artistId);
                const stage = stages.find(stage => stage.id === performance.stageId);
                details.push({
                    ...performance,
                    artist,
                    stage,
                });
            });
            details.sort((a, b) => {
                if (sortBy === 'stage') {
                    if (a.stage.name > b.stage.name) {
                        return 1;
                    }
    
                    if (a.stage.name < b.stage.name) {
                        return -1;
                    }
                    
                    return 0;
                } else if (sortBy === 'date') {
                    if (a.date > b.date) {
                        return 1;
                    }
    
                    if (a.date < b.date) {
                        return -1;
                    }
                    
                    return 0;
                }

                
                
            });

            const filtered = details.filter(i => i.artist.name.toLowerCase().includes(search.toLowerCase()))
            setPerformanceDetails(filtered);
        }
        
    }, [performances.length, artists.length, stages.length, sortBy, search])
  
    

  
  
  
  return (
    
    <View >
      
          <View >
            
          <SearchBar
                    placeholder='Search...'
                    onChangeText={setSearch}
                    value={search}
                />
          <Button title= { sortBy === 'stage' ? 'date' : 'stage' }  style={styles.button} 
          color = "green" onPress={ () => setSortBy(sortBy === 'stage' ? 'date' : 'stage') }  /> 
          </View>
          
           <SafeAreaView >
                
                <ScrollView >
              
                  <FlatList
                    
                     horizontal={false}
                    data={ performancesDetails.length > 0 ? performancesDetails : artists }
                    renderItem={({item}) => <PerformanceDetails { ...item } />}
                    keyExtractor={(item,index)=> `${index}`}
                  /> 
                
                </ScrollView>
            </SafeAreaView>

          
  </View>
  
      );
        }

      
  

      
    

LinksScreen.navigationOptions = {
  title: 'Performances',
};
 
export default LinksScreen;
