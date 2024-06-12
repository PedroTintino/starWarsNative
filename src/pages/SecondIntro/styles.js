import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  
