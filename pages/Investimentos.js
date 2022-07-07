import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ImageBackground} from 'react-native';

export default function Pesquisa(){
    function pesquisarFruta(){
        Alert.alert('Atenção','Estamos fora do ar!!')
    }

    return(
        <View style={styles.container}>
            <ImageBackground  style={styles.backgroundImage} source={require('../assets/Investimentos.gif')}>

            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FAA4',
      alignItems: 'center',
      justifyContent: 'center',
    },

    TextInput: {
        fontSize: 20,
        marginTop: 15
    },

    botao: {
        backgroundColor: 'lightgreen',
        width: 200,
        height: 40,
        borderRadius: 40,
        marginTop: 50,
    },

    textoBotao: {
        textAlign: 'center',
        marginTop: 7,
        fontSize: 17,
        fontWeight: 'bold'
    },

    titulo: {
        fontSize: 25
    },

    backgroundImage: {
        flex:1,
        width: 390,
    }
  });