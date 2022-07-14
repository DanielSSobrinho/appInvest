import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import api from '../Api';

export default function ListarFrutas(props){

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
            <Text style={styles.titulo}>Lista de Frutas</Text>

            <TouchableOpacity style={styles.botaoCadFruta} onPress={()=> props.navigation.navigate('Cadastrar')}>
                <Text style={styles.textoBotaoCadFruta}>Cadastrar Fruta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCadFruta} onPress={()=> props.navigation.navigate('Alterar')}>
                <Text style={styles.textoBotaoCadFruta}>Alterar Fruta</Text>
            </TouchableOpacity>

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
      backgroundColor: '#F9FAA4',
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
        backgroundColor: '#FA7664',
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