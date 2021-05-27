import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const LembreteInput = (props) => {
    const [lembrete, setLembrete] = useState('');
    
    // Função de captura do lembrete na digitação
    const capturarLembrete = (lembreteDigitado) => {
        setLembrete(lembreteDigitado);
    }

    return (
        /* Entrada dos lembretes */
        <View style={styles.lembreteView}>
            <TextInput
                placeholder="O que deseja lembrar?"
                style={styles.lembreteInput}
                onChangeText={capturarLembrete}
                value={lembrete}
            />
            <Button
                title="+ inserir lembrete"
                onPress={() => {
                    props.onAdicionarLembrete(lembrete)
                    setLembrete('')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default LembreteInput;