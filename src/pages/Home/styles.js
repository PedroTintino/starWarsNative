import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      paddingTop: 80,
    },
    button:{
        backgroundColor: '#FFE81F',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 24,
        borderRadius: 10,
    },
    container: {
      flex: 1,
      display: 'flex',
      
    },
    item: {
      backgroundColor: '#FFE81F',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 24,
      borderRadius: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: "600",
    },
    headerTitle: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '700',
        marginLeft: 8,
        marginBottom: 10,
        textDecorationLine: "underline"
    },
    list:{
        maxHeight: 450,
        overflow:"hidden"
    },
    menu:{
      marginTop: 40,
      marginHorizontal: 20,
      backgroundColor: '#FFE81F',
    },
    menuItem: {
      fontWeight: '600',
      fontSize: 24
    }
  });