import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      paddingTop: 50,
    },
    button:{
        backgroundColor: '#FFE81F',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 24,
        borderRadius: 10,

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
    }
  });