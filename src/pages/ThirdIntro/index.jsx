import { SafeAreaView,View, Text, Image, StyleSheet, TouchableOpacity,Linking } from "react-native";
import chewieImage from '../../assets/chewie.png';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";


function ThirdIntro(){
    const navigation = useNavigation();

    function goToNextStep(){
        navigation.navigate('LoginPage');
    }

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
                    onPress={goToNextStep}
                >
                    <Text style={styles.buttonText}>I agree</Text>
                </TouchableOpacity>
                <Text style={styles.fakeLink} onPress={openLink}>read more</Text>
            </View>
        </SafeAreaView>
    )
}


export default ThirdIntro;