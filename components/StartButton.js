import React from 'react';
import { StyleSheet, Text, VrButton } from 'react-360';

const StartButton = ({startGame}) => {
    return (
        <VrButton onClick={() => startGame()} style={styles.startButton}>
            <Text
                style={styles.text}>
                StartGame
            </Text>
        </VrButton>
    );
}

const styles = StyleSheet.create({
    startButton: {
        transform: [{ translate: [400, -250, -10] }]
    },
    text: {
        backgroundColor: '#333333',
        fontSize: 40,
        fontWeight: '400',
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
    }
});

export default StartButton