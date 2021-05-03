import React from "react";
import { View, Text, VrButton, StyleSheet } from "react-360";

const GameOver = ({ length, pts, onSuccess, onFailed }) => {
  const isPassed = pts / length > 0.6;

  passLevel = () => {
    if (isPassed) {
      onSuccess();
    } else {
      onFailed();
    }
  };

  return (
    <View>
      <Text style={styles.title}>{isPassed ? "Conguration" : "Sorry"} </Text>
      <Text style={styles.content}>
        You did {pts} out of {length}!
      </Text>
      <VrButton onClick={() => passLevel()}>
        <Text style={styles.text}>{isPassed ? "Go Next" : "Retry"}</Text>
      </VrButton>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontWeight: "bold",
  },
  content: {
    fontSize: 30,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    marginBottom: 50,
  },
  text: {
    backgroundColor: "#333333",
    fontSize: 40,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontWeight: "bold",
  },
  button: {
    fontSize: 40,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
  },
});

export default GameOver;
