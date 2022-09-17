import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// COMPONETS LOCAIS
import Dados from './components/Dados';

export default function App() {

  const [name, setName] = useState("");
  

  return (
    <View style={styles.container}>

      <View style={styles.blocoInput}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(value) => setName(value)}
        />
      </View>

      <View style={styles.blocoInputTwo}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}
                onPress={() => monstrar()}
          >Mostrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blocoInputThree}>
        <Dados name="Maria"/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  blocoInput: {
    marginTop: 200,
    marginHorizontal: 40
  },

  blocoInputTwo: {
    flex: 0,
    marginTop: 30,
    alignItems: 'center'
  },

  blocoInputThree: {
    marginHorizontal: 40,
    marginTop: 30
  },

  input: {
    width: '100%',
    height: 50,
    borderRadius: 6,
    backgroundColor: '#ECF0F1',
    fontSize: 20
  },

  label: {
    fontSize: 20
  },

  btn: {
    backgroundColor: '#2C3E50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },

  btnText: {
    fontSize: 25,
    color: '#ECF0F1'
  },
  
});
