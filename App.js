import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContador] = useState(0);

  // Função de captura do lembrete na digitação
  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado);
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      setContador(contadorLembretes + 1);
      return [...lembretes, { key: contadorLembretes.toString(), value: lembrete}]
    })
  }

  return (
    <View style={styles.container}>
      { /* Entrada dos lembretes */}
      <View style={styles.lembreteView}>
        <TextInput
          placeholder="O que deseja lembrar?"
          style={styles.lembreteInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />

        <Button
          title="+ inserir lembrete"
          onPress={adicionarLembrete}
        />
      </View>

      { /* Lista dos lembretes */}
      {/* ScrollView gera a barra de rolagem na tela, porém tem funcionamento
      possivelmente indesejável, dependendo das circunstâncias. Ocorre que esse tipo de componente
      renderiza todos os componentes que serão seus filhos, muito embora não necessariamente todos serão exibidos.
      
      Iremos usar o FlatList para corrigir o problema

      O componente FlatList funciona diferente. Ele somente renderiza os elementos que
      necessariamente serão exibidos na tela. Ou seja, a renderização se dá sob demanda, conforme o
      usuário utiliza a barra de rolagem.
      */}
      {/* <ScrollView>
        {
          lembretes.map(lembrete => (
            <View key={lembrete} style={ styles.itemNaLista }>
              <Text>{ lembrete }</Text> 
            </View>
          ))
        }
      </ScrollView> */}

      <View style={{ width: '100%', alignSelf: 'center' }}>
        <FlatList
          data={lembretes}
          renderItem={
            lembrete => (
              <View style={styles.itemNaLista}>
                <Text>{lembrete.item.key} - {lembrete.item.value}</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  lembreteView: {
    marginBottom: 16
  },
  lembreteInput: {
    textAlign: 'center',
    borderColor: '#f2f2f2',
    borderWidth: 2,
    borderRadius: 3,
    marginBottom: 15,
    padding: 15,
  },
  itemNaLista: {
    padding: 15,
    backgroundColor: '#F0F0',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 3,
    alignItems: 'center'
  }
})