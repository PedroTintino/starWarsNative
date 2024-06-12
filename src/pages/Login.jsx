import { SafeAreaView,View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import background from '../assets/background.jpg';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import logo from '../assets/logo.png';
import googleBtn from '../assets/googlebtn.png';

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
const styles = StyleSheet.create({
    text: {
        color: '#fff',
        marginBottom: 15,
        marginTop: 15,
        fontSize: 18,
    },
    button: {
        backgroundColor: '#FFE81F',  
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
        color: '#000',
        fontWeight: 'bold'
    },
    textContainer: {
        paddingHorizontal: 40
    },
    background: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'center', 
        
      },
    input: {
        backgroundColor: '#d1d1d1',
        color: '#000',
        height: 40,
        marginBottom: 10,
        padding: 10,
        borderRadius: 8
    },
    logo: {
        marginTop:150 ,
        width: '100%',
        height: '20%'
    },
    fakeLink: {
        color: '#FFE81F',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 18
    },
    method:{
        paddingHorizontal: 35,
        marginTop: 20
    },
    google:{
        width: '100%' ,
        height: '30%',
    }
  });
  

export default LoginPage;