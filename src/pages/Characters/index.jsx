import React, { useEffect, useState } from 'react';
import background from '../../assets/background.jpg';
import { View, Text, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function Characters(){
  const navigation = useNavigation();
  const [characters, setCharacters] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(json => {
        setCharacters(json.results);
        setLoadingCharacters(false);
      })
      .catch(error => {
        console.error(error);
        setLoadingCharacters(false);
      });
    },[]);


  const renderCharacter = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={goToProfile}>
      <Text style={styles.title} >{item.name}</Text>
    </TouchableOpacity>
  );   

  function goToProfile(){
    navigation.navigate('Profile');
  }
  return (
    <ImageBackground source={background} style={styles.background}>
        <Text style={styles.headerTitle}>Personagens</Text>
        {loadingCharacters ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <FlatList
            data={characters}
            renderItem={renderCharacter}
            keyExtractor={item => item.name}
          />
        </>
      )}
    </ImageBackground>
    )
}   

export default Characters;