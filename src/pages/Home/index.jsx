import React, { useEffect, useState } from 'react';
import background from '../../assets/background.jpg';
import { View, Text, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

function Home(){
    const navigation = useNavigation();

    function goToMovies(){
        navigation.navigate('Movies');
    }
    
    function goToPeople(){
        navigation.navigate('Characters');
    }
    
  return (
    <ImageBackground source={background} style={styles.background}>
        <Text style={styles.headerTitle}>Select an option: </Text>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}><Text style={styles.title} onPress={goToPeople}>Characters</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.title} onPress={goToMovies}>Movies</Text></TouchableOpacity>
        </View>
    </ImageBackground>
    )
}   

export default Home;