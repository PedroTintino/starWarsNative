import React, { useEffect, useState } from 'react';
import background from '../../assets/background.jpg';
import { View, Text, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { styles } from './styles';
import { Button, Menu, Provider } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

function Home(){
    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

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
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu} style={styles.menu} mode="contained">
                            <Text style={styles.menuItem}>Open Menu</Text>
                        </Button>}
                    >
                        <Menu.Item onPress={goToPeople} title="Characters" />
                        <Menu.Item onPress={goToMovies} title="Movies" />
                    </Menu>
                </View>
    </ImageBackground>
    )
}   

export default Home;