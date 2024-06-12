import { SafeAreaView,View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import r2d2Image from '../../assets/r2d2.png';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles.js';
 
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
export default SecondIntro;