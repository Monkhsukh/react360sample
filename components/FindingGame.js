import React from "react";
import { View, StyleSheet, VrButton, asset, Text } from "react-360";
import Entity from "Entity";

import BeginView from "./BeginView";

import { rotate, subscribe1 } from "../Sphere/actions";

export default class FindingGame extends React.Component {
  state = {
    start: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    subscribe1(this.props.onPassLevel);
  }

  componentDidUpdate(prevProp) {
    if (prevProp.level != this.props.level) {
      this.setState({ start: false });
    }
  }

  startGame = () => {
    this.setState({ start: true });
  };

  failed = () => {
    const { quiz, onPassLevel, onFailedLevel } = this.props;
    this.setState({ start: false });
    onFailedLevel();
  };

  succssed = () => {
    const { quiz, onPassLevel, onFailedLevel } = this.props;
    this.setState({ start: false });
    onPassLevel();
  };

  handleClick = () => {
    rotate();
  };

  render() {
    const { quiz, level, onPassLevel, onFailedLevel } = this.props;

    return (
      <View>
        {this.state.start ? (
          <VrButton onClick={this.handleClick}>
            <Text style={styles.title}>Find 5 hummingbirds!</Text>
          </VrButton>
        ) : (
          <BeginView
            level={level}
            title={"Play the game"}
            onClick={this.startGame}
          />
        )}
      </View>
    );
  }
}

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
    color: "#ff00ff",
  },
});
