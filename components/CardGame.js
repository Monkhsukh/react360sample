import React from "react";
import { View, StyleSheet, VrButton, asset, Text } from "react-360";
import Entity from "Entity";

import BeginView from "./BeginView";
import Card from "../CardGame/card";

export default class CardGame extends React.Component {
  state = {
    start: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

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

  render() {
    const { quiz, level, onPassLevel, onFailedLevel } = this.props;
    return (
      <View>
        {this.state.start ? (
          <Card onPassLevel={onPassLevel} />
        ) : (
          <BeginView
            level={level}
            title={"Start 3rd game"}
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
