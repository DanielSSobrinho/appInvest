import React ,{useState} from "react";
import {Text,View,StyleSheet,Alert,TouchableOpacity,TextInput} from 'react-native';
import {alterarFrutas, deletarFrutas} from './ModelFrutas';

export default function AlterarFruta(){
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function alterar(){
        const resultado = await alterarFrutas(idp,frutap,valorp,fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta alterada com sucesso!!');
        }else{
            Alert.alert('Erro ao alterar a fruta');
        }
    }

    async function deletar(){
        const resultado = await deletarFrutas(idp,frutap,valorp,fotop);
        if(resultado == 'Sucesso'){
            Alert.alert('Fruta deletada com sucesso!!');
        }else{
            Alert.alert('Erro ao deletar a fruta');
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
            placeholder="Digite o código da fruta"
            style={styles.TextInputTodos}
            onChangeText={setFotop}
            />

            <TouchableOpacity style={styles.botaoCadastrar} onPress={alterar}>
                <Text style={styles.textoBotaoCadastrar}>Alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCadastrar} onPress={deletar}>
                <Text style={styles.textoBotaoCadastrar}>Deletar</Text>
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
        textAlign: 'center'
    },

    botaoCadastrar: {
        marginLeft: 175
    }

});