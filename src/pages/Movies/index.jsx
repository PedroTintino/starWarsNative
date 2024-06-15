import React, { useEffect, useState } from 'react';
import background from '../../assets/background.jpg';
import { View, Text, FlatList, ActivityIndicator, ImageBackground, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

function Movies(){
  const navigation = useNavigation();
  const [films, setFilms] = useState([]);
  const [loadingFilms, setLoadingFilms] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(json => {
        setFilms(json.results);
        setLoadingFilms(false);
      })
      .catch(error => {
        console.error(error);
        setLoadingFilms(false);
      });
  }, []);

  const renderFilm = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>Diretor: {item.director}</Text>
      <Text style={styles.subtitle}>Produtor: {item.producer}</Text>
      <Text style={styles.subtitle}>Lançamento: {item.release_date}</Text>
    </View>
  );

  const returnPage = () => {
    navigation.navigate('Home');
  }
    
  return (
    <ImageBackground source={background} style={styles.background}>  
      <Text style={styles.returnOpt} onPress={returnPage}>Return</Text>
      {loadingFilms ? (
        <ActivityIndicator size="large" color="#FFE81F" style={{display: 'flex', flex:1,alignItems: 'center', justifyContent:'center'}}/>
      ) : (
        <>
          <Text style={styles.header}>Filmes</Text>
          <FlatList
            data={films}
            renderItem={renderFilm}
            keyExtractor={item => item.title}
          />
        </>
      )}
    </ImageBackground>
    )
}   

export default Movies;