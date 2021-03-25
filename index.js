import React from "react";
import {
  asset,
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton,
} from "react-360";

import Sphere from "./Sphere";

AppRegistry.registerComponent("Sphere", () => Sphere);

const { AudioModule } = NativeModules;

export default class hello_vr extends React.Component {
  state = {
    show: false,
    playSound: false,
  };

  _playSound = () => {
    this.setState({
      playSound: !this.state.playSound,
    });

    if (this.state.playSound) {
      AudioModule.createAudio("sza", {
        source: asset("brokenclocks.mp3"),
        volume: 0.5,
      });

      AudioModule.play("sza");
    } else {
      AudioModule.stop("sza");
    }
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <View style={styles.panel}>
        {this.state.show ? (
          <View style={styles.greetingBox}>
            <Text style={styles.textbox}>
              The third large unit of the monument complex is the southern
              bastion court and its associated founder, it is initially made by
              the Stephen I of Hungary, the first king of Hungary.
            </Text>
          </View>
        ) : (
          <View />
        )}
        {this.state.show ? (
          <VrButton onClick={this._playSound} style={styles.greetingBox}>
            <Text>{"Listen"}</Text>
          </VrButton>
        ) : (
          <View />
        )}

        <VrButton onClick={this.toggle} style={styles.greetingBox}>
          <Text>{this.state.show ? "Hide" : "Show"}</Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#F4A896",
    borderColor: "#358597",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  textbox: {
    width: 400,
  },
});

AppRegistry.registerComponent("hello_vr", () => hello_vr);
