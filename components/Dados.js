import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Dados(props) {
    return (
      <View>
        <Text style={styles.text}>Nome: {props.name}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black'
    },
});