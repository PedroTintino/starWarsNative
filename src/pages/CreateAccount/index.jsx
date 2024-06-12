import { SafeAreaView,View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import background from '../../assets/background.jpg';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import logo from '../../assets/logo.png'
import { styles } from "./styles";


function CreateAccount(){
    const navigation = useNavigation();

    function goToNextStep(){
        navigation.navigate('LoginPage');
    }

    return(
        <ImageBackground source={background} style={styles.background}>
        <Image source={logo} style={styles.logo}/>
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>User: </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Create a username"
                />
                <Text style={styles.text}>Email addres</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter a valid email"
                />
                <Text style={styles.text}>Password</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    placeholder="Enter password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToNextStep}
                >
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </ImageBackground>
    )
}

export default CreateAccount;