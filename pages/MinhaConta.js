import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert, Image} from 'react-native';
import api from '../pages/Api';

export default function Frutas(){

const[dadosFrutas, setdadosFrutas] = useState([]);    

async function getFrutas(){
    try{
        const resultado = await api.get(`/hortfruit`);
        return resultado.data
    }catch(error){
        console.log(error)
        return []
    }
}

useEffect(async()=> {
    const resp = await getFrutas()
    setdadosFrutas(resp);
},[]);


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Dados Cliente</Text>
            <FlatList
                data={dadosFrutas}
                keyExtractor={dadosFrutas => dadosFrutas.id}
                renderItem={({item})=>
                <View style={styles.listafrutas}>
                    <TouchableOpacity style={styles.botaofrutas}>
                        <Text style={styles.nomefruta}>{item.fruta}</Text>
                        <Text style={styles.valorfruta}>{item.valor}</Text>
                    </TouchableOpacity>
                </View>
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D873FA',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo: {
        fontSize: 20,
        marginTop: 15
    },

    listafrutas: {

    },

    botaofrutas: {
        backgroundColor: '#0FA935',
        width: 200,
        height: 80,
        borderRadius: 40,
        marginTop: 50,
    },

    nomefruta: {
        textAlign: 'center',
        marginTop: 9,
        fontSize: 17,
        fontWeight: 'bold'
    },

    valorfruta: {
        textAlign: 'center',
        marginTop: 9,
        fontSize: 17,
        fontWeight: 'bold'
    }
  });