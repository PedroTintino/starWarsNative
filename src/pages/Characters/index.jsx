import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import background from '../../assets/background.jpg';
import { styles } from './styles';

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
  }, []);

  const renderCharacter = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => goToProfile(item.url)}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  function goToProfile(url) {
    const id = url.split('/').filter(Boolean).pop(); // Extracting ID from URL
    navigation.navigate('Profile', { id });
  }

  const returnPage = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={{ display: 'flex', width: '100%' }}>
        <Text style={styles.headerTitle}>Personagens</Text>
        <Text style={styles.returnOpt} onPress={returnPage}>Return</Text>
      </View>
      {loadingCharacters ? (
        <ActivityIndicator size="large" color="#FFE81F" style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }} />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderCharacter}
          keyExtractor={item => item.name}
        />
      )}
    </ImageBackground>
  );
}

export default Characters;
