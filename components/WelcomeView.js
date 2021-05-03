import React from "react";
import {
  asset,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
} from "react-360";

function click1(view) {
  console.log(view);
  Environment.setBackgroundImage(asset(view));
}

const WelcomeView = ({ title, view1, view2, view3, onClick }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.panel}>
        <VrButton onClick={() => click1(view1)} style={styles.BeginButton}>
          <Text style={styles.text}>#1</Text>
        </VrButton>
        <VrButton onClick={() => click1(view2)} style={styles.BeginButton}>
          <Text style={styles.text}>#2</Text>
        </VrButton>
        <VrButton onClick={() => click1(view3)} style={styles.BeginButton}>
          <Text style={styles.text}>#3</Text>
        </VrButton>
      </View>

      <VrButton onClick={() => onClick()} style={styles.BeginButton}>
        <Text style={styles.text}>Next country!</Text>
      </VrButton>
    </View>
  );
};

const styles = StyleSheet.create({
  startButton: {},
  panel: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(255, 255, 255, 0)",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 400,
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
    paddingLeft: 10,
    paddingRight: 10,
    margin: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontWeight: "bold",
    color: "#ff00ff",
  },
  level: {
    fontSize: 45,
    fontWeight: "400",
    paddingBottom: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
  },
});

export default WelcomeView;
