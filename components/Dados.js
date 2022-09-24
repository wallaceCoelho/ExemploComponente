import React from "react";
import { StyleSheet, Text, View } from "react-native";
//O PARÂMENTRO É USADO PARA RECEBER ATRIBUTOS DA CHAMADA DESSE COMPONETNE POR MEIO DE ARGUMENTOS
export default function Dados(props) { 
  
    return (

      <View>
        {/*CHAMADA DO ATRIBUTO 'NAME' E 'DATE' NA TAG <DADOS> DO APP.JS PRINCIPAL*/}
        <Text style={styles.text}>Nome: {props.name}</Text> 
        <Text style={styles.text}>Idade: {props.age != "" ? 2022 - props.age: ""}</Text>
      </View>

    );
  }

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black'
    },
});