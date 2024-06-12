import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, ActivityIndicator, Image } from 'react-native';
import { styles } from './styles';
import luke from '../../assets/default.png';

function Profile() {
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

  const sections = [
    { title: 'Character Details', data: [
      { key: 'Height', value: character.height },
      { key: 'Mass', value: character.mass },
      { key: 'Hair Color', value: character.hair_color },
      { key: 'Skin Color', value: character.skin_color },
      { key: 'Eye Color', value: character.eye_color },
      { key: 'Birth Year', value: character.birth_year },
      { key: 'Gender', value: character.gender },
      { key: 'Homeworld', value: character.homeworld.name },
    ] },
    { title: 'Films', data: character.films.map(film => ({ key: film.title })) }
  ];

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.key + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.key}: {item.value || ''}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      ListHeaderComponent={
        <View style={styles.imageContainer}>
          <Image source={luke} style={styles.image} />
          <Text style={styles.title}>{character.name}</Text>
        </View>
      }
      style={styles.container}
    />
  );
}

export default Profile;
