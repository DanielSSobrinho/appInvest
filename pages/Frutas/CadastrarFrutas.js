import React ,{useState} from "react";
import {Text,View,StyleSheet,Alert,TouchableOpacity,TextInput} from 'react-native';
import {salvarNovaFruta} from './ModelFrutas';

export default function CadastrarFruta(){
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function cadastro(){
        const resultado = await salvarNovaFruta(idp,frutap,valorp,fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta cadastrada com sucesso!!');
        }else{
            Alert.alert('Erro ao cadastrar a fruta');
        }
    }

    return(
        <View style={styles.container}>
            <TextInput
            value={idp}
            placeholder="Digite o código da fruta"
            style={styles.TextInputTodos}
            onChangeText={setIdp}
            />

            <TextInput
            value={frutap}
            placeholder="Digite o nome da fruta"
            style={styles.TextInputTodos}
            onChangeText={setFrutap}
            />

            <TextInput
            value={valorp}
            placeholder="Digite o valor da fruta"
            style={styles.TextInputTodos}
            onChangeText={setValorp}
            />

            <TextInput
            value={fotop}
            placeholder="Selecione a foto da fruta"
            style={styles.TextInputTodos}
            onChangeText={setFotop}
            />

            <TouchableOpacity style={styles.botaoCadastrar} onPress={cadastro}>
                <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#e9c46a'
    },

    TextInputTodos: {

    },

    botaoCadastrar: {

    }

});