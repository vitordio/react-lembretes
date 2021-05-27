import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LembreteInput from './components/LembreteInput';
import LembreteItem from './components/LembreteItem';

export default function App() {
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContador] = useState(0);
  let teste = [];

  const adicionarLembrete = (lembrete) => {
    if(lembrete != '')
    {
      setLembretes(lembretes => {
        setContador(contadorLembretes + 1);
        return [...lembretes, { key: contadorLembretes.toString(), value: lembrete}]
      })
    }
  }

  const removerLembrete = (keyASerRemovida) => {
    setLembretes (lembretes => {
      return lembretes.filter((lembrete) =>
        lembrete.key !== keyASerRemovida
      )
    });
  };

  return (
    <View style={styles.container}>
      { /* Entrada dos lembretes */}
      <LembreteInput onAdicionarLembrete={adicionarLembrete} />

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
            lembrete =>
            <LembreteItem
              chave={ lembrete.item.key }
              lembrete={ lembrete.item.value }
              onDelete={ removerLembrete }
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
})