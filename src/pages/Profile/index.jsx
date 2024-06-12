import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';

function Profile(){
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch character details
    fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(async json => {
        const homeworld = await fetch(json.homeworld).then(res => res.json());
        const films = await Promise.all(json.films.map(url => fetch(url).then(res => res.json())));
        const vehicles = await Promise.all(json.vehicles.map(url => fetch(url).then(res => res.json())));
        const starships = await Promise.all(json.starships.map(url => fetch(url).then(res => res.json())));

        setCharacter({
          ...json,
          homeworld,
          films,
          vehicles,
          starships
        });
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFE81F" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <Text style={styles.detail}>Height: {character.height}</Text>
      <Text style={styles.detail}>Mass: {character.mass}</Text>
      <Text style={styles.detail}>Hair Color: {character.hair_color}</Text>
      <Text style={styles.detail}>Skin Color: {character.skin_color}</Text>
      <Text style={styles.detail}>Eye Color: {character.eye_color}</Text>
      <Text style={styles.detail}>Birth Year: {character.birth_year}</Text>
      <Text style={styles.detail}>Gender: {character.gender}</Text>
      <Text style={styles.detail}>Homeworld: {character.homeworld.name}</Text>

      <Text style={styles.subtitle}>Films:</Text>
      <FlatList
        data={character.films}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={item => item.url}
      />

      <Text style={styles.subtitle}>Vehicles:</Text>
      <FlatList
        data={character.vehicles}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.url}
      />

      <Text style={styles.subtitle}>Starships:</Text>
      <FlatList
        data={character.starships}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.url}
      />
    </View>
  );
};



export default Profile;
