import { StyleSheet } from "react-native"

const globalStyle = StyleSheet.create({
    button:{
        backgroundColor: '#000000',
        color: 'red',
        textTransform: 'lowercase'
    },

    p: {
        color: 'red',
        fontSize: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10,
        backgroundColor: '#000',
        color: '#fff'
    }

});

export default globalStyle;