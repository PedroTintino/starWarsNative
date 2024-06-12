import React, { useEffect, useState } from 'react';
import background from '../../assets/background.jpg';
import { View, Text, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Movies(){
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
    
  return (
    <ImageBackground source={background} style={styles.background}>  
      {loadingFilms ? (
        <ActivityIndicator size="large" color="#0000ff" />
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