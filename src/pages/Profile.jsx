import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import luke from '../assets/default.png';
import { useNavigation } from '@react-navigation/native';


function Profile(){
    const navigate = useNavigation();
    
    function getOut(){
        navigate.navigate('LoginPage');
    }
    // const userData = [
    //     { id: '1', title: 'Item 1' },
    //     { id: '2', title: 'Item 2' },
    //     { id: '3', title: 'Item 3' },
    // ]

    // const renderItem = ({ item }) => (
    //     <View style={styles.item}>
    //       <Text>{item.title}</Text>
    //     </View>
    //   );
    return(
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <View style={styles.profilePic}>
                    <Image source={luke} style={styles.profilePicCenter}/>
                </View>
                <Text style={styles.name}>Luke Skywalker</Text>
                <View style={styles.info}>
                    <Text style={styles.mainTitle}>Profile Info</Text>
                    <Text style={styles.textTitle}>Age:</Text>
                    <Text style={styles.text}>19 years old</Text>
                    <Text style={styles.textTitle}>Race:</Text>
                    <Text style={styles.text}>Human</Text>
                    <Text style={styles.textTitle}>Description:</Text>
                    <Text style={styles.text}>Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. Along with his companions Princess Leia Organa and General Han Solo, Skywalker served as a revolutionary alongside the Alliance to Restore the Republic–an organization committed to the downfall of the Galactic Empire and the restoration of democracy. After the war, Skywalker became a living legend and was remembered as one of the greatest Jedi in galactic history.</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={getOut}
                >
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
            flex: 1,
            backgroundColor: '#0a0a0a',
            alignItems: 'center',
            justifyContent: 'center'
            
    },
    text: {
        color: '#fff',
        marginBottom: 5,
        marginTop: 0,
        fontSize: 14,
    },
    name: {
        color: '#fff',
        marginBottom: 5,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    mainTitle: {
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 18
    },
    textTitle:{
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: 10
    },
    button: {
        backgroundColor: 'red',  
        borderWidth: 2,
        paddingVertical: 12,
        borderRadius: 8,
        elevation: 3,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    },
    textContainer: {
        paddingHorizontal: 0
    },
    profilePic: {
        
        backgroundColor: 'gray',
        borderRadius: 80,
        marginTop: 80,
        width: '50%',
        marginLeft: 120
    },
    info: {
        backgroundColor: 'gray',
        paddingHorizontal: 30
        
    }
  });
  

export default Profile;