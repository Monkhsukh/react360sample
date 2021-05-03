import React from "react";
import { View, StyleSheet } from "react-360";

import LevelButton from "./LevelButton";

const LevelStates = (props) => {
  const currentLevel = props.level;

  return (
    <View style={styles.panel}>
      <LevelButton
        level={2}
        currentLevel={currentLevel}
        choose={props.choose}
      />
      <LevelButton
        level={5}
        currentLevel={currentLevel}
        choose={props.choose}
      />
      <LevelButton
        level={8}
        currentLevel={currentLevel}
        choose={props.choose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default LevelStates;
