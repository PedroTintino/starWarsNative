import { SafeAreaView,View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import background from '../../assets/background.jpg';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import logo from '../../assets/logo.png';
import googleBtn from '../../assets/googlebtn.png';
import { styles } from "./styles";

function LoginPage(){
    const navigation = useNavigation();

    function goToNextStep(){
        navigation.navigate('CreateAccount');
    }

    function getIn(){
        navigation.navigate('Home');
    }

    return(
        <ImageBackground source={background} style={styles.background}>
        <Image source={logo} style={styles.logo}/>
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
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
                    onPress={getIn}
                >
                    <Text style={styles.buttonText} >Enter</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.method}>
                    <Image source={googleBtn} style={styles.google}/>
                </TouchableOpacity>
            <Text style={styles.fakeLink} onPress={goToNextStep}>Create an account</Text>
                
        </SafeAreaView>
        </ImageBackground>
    )
}
export default LoginPage;