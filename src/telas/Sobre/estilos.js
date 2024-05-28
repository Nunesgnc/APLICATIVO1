import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    fotoFitas: {
        height: 500,
        alignSelf: "center",
    },
    sobre:{
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    textoSobre: {
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 10,
        color: "black",
        textAlign: "justify"
    },
})

export default styles;