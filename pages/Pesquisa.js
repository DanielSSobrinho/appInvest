import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {pesquisarNomeFruta} from '../pages/Frutas/ModelFrutas';


export default function Pesquisa(){
const [dadosFrutas, setdadosFrutas] = useState([]);

async function buscarFrutas(){
    const resultado = await pesquisarNomeFruta(nomeFruta);
    if (resultado) {
        setdadosFrutas(resultado);
    } else {
        Alert.alert('Fruta não encontrada!!');
        setdadosFrutas('');
    }
}

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Qual Fruta você deseja?</Text>
            <TextInput
                placeholder='Digite o nome da fruta' style={styles.TextInput}
            />
            <TouchableOpacity style={styles.botao} onPress={()=> buscarFrutas()}>
                <Text style={styles.textoBotao}>Pesquisar</Text>
            </TouchableOpacity>
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
    }
  });