import { SafeAreaView,View, Text, Image, StyleSheet, TouchableOpacity,Linking } from "react-native";
import chewieImage from '../assets/chewie.png';


function ThirdIntro(){

    function openLink(){
        Linking.openURL('https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2FpoIBJRIyQ_Tt8Rke2dfblJOumEMvTMZGoWwa23wEMQI.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D29ff875fc8329d08a67a833e9aad7e4d71b0c8d5')
    }
    return(
        <SafeAreaView style={styles.container}>
                 <Image source={chewieImage} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Please accept our use terms under!</Text>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>I agree</Text>
                </TouchableOpacity>
                <Text style={styles.fakeLink} onPress={openLink}>read more</Text>
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
        fontSize: 18
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
    },
    fakeLink: {
        color: '#0066CC',
        textAlign: 'center',
        marginTop: 10,
        textDecorationLine: 'underline'
    }
  });
  

export default ThirdIntro;