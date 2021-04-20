import React from 'react';
import { asset, Image, Text, VrButton, StyleSheet } from 'react-360';

const LevelButton = ({level, currentLevel, choose}) => {
    console.log(currentLevel)
    const isActive =  currentLevel >= level

    const selectLevel = () => {
        isActive && choose(level)
    }

    return (
        <VrButton onClick={() => selectLevel()}>
            {isActive ?
                <Image source={asset('unlock.png')} style={styles.levelButton}/> :
                <Image source={asset('lock.png')} style={styles.levelButton}/>
            }
        </VrButton>
    );
}

const styles = StyleSheet.create({
    levelButton: {
      // Fill the entire surface
      width: 50,
      height: 50,
    },
});
  

export default LevelButton