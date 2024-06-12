import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  