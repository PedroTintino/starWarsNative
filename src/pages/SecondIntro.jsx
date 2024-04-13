import { SafeAreaView,View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import r2d2Image from '../assets/r2d2.png';
import { useNavigation } from "@react-navigation/native";

function SecondIntro(){
    const navigation = useNavigation();

    function goToNextStep(){
        navigation.navigate('ThirdStep');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image source={r2d2Image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>We use your information to offer a better experience!</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToNextStep}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150,
        backgroundColor: '#0a0a0a',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 150
    },
    text: {
        color: '#fff',
        marginBottom: 15,
        fontSize: 18,
        textAlign: 'center'
    },
    image: {
        width: '40%',
        height: '30%'
    },
    button: {
        backgroundColor: 'transparent',  
        borderWidth: 2,
        borderColor: '#FFE81F',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        elevation: 3,
        display: 'flex',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFE81F'
    },
    textContainer: {
        paddingHorizontal: 20
    }
  });
  

export default SecondIntro;