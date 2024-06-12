import { SafeAreaView,View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import yodaImage from '../../assets/yoda.png';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

function Intro(){
    const navigation = useNavigation();

    function goToNextStep(){
        navigation.navigate('SecondStep');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image source={yodaImage} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Welcome to your Star Wars Mobile Guide!</Text>
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

  

export default Intro;