import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * (Tocando em elementos na lista) Suponha que desejamos realizar alguma operação (como
 * remover) quando um elemento da lista for tocado. Os componentes de nossa lista são próprios.
 * Cada um deles é do tipo LembreteItem. Assim, não podemos esperar que algo como o evento
 * onPress funcione. Precisaríamos implementar toda essa lógica. Há um componente próprio do
 * React Native que permite tornar qualquer componente tocável. Intuitivamente, ele se chama
 * TouchableOpacity.
 * 
 * Nota: A palavra “opacity” no nome do componente se refere ao efeito visual que será disparado
 * quando o evento acontecer. Considere usar outros como TouchableHighlight.
 * 
 * - Para usar o componente TouchableOpacity, basta aninhar a ele a definição do componente que
 * desejamos tornar tocável. Neste caso, é a View raiz do componente LembreteItem. */

/** Representa cada item na lista **/
const LembreteItem = (props) => {
    return (
        <TouchableOpacity onPress={ props.onDelete.bind(this, props.chave) }>
            <View style={styles.itemNaLista}>
                <Text>{ props.lembrete }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

/**
 * Esse componente será importado por outros. Precisamos indicar que, quando uma instrução
 * import for feita se referindo a esse arquivo, o componente a ser exportado por padrão é o
 * LembreteItem.
*/
export default LembreteItem;