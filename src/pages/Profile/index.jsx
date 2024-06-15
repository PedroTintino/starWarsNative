import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, ActivityIndicator, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import luke from '../../assets/default.png';
import { useRoute } from '@react-navigation/native';

function Profile() {
  const route = useRoute();
  const { id } = route.params; // Get the character ID from the route parameters
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('Character ID is missing');
      setLoading(false);
      return;
    }

    // Fetch character details
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(response => response.json())
      .then(async json => {
        try {
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
        } catch (error) {
          setError('Failed to fetch additional character details');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Failed to fetch character data');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFE81F" style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Character data not available</Text>
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
    <ScrollView>
    
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
    </ScrollView>
  );
}

export default Profile;
