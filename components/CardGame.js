import React from "react";
import { View, StyleSheet, VrButton, asset, Text } from "react-360";
import Entity from "Entity";

import BeginView from "./BeginView";

export default class CardGame extends React.Component {
  state = {
    start: false,
    cards: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let mp = [];
    [...Array(12)].map((_, i) =>
      mp.push({
        key: i.toString(),
      })
    );

    this.setState({
      cards: mp,
    });
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

  render() {
    const { quiz, level, onPassLevel, onFailedLevel } = this.props;
    const { cards } = this.state;
    return (
      <View>
        {this.state.start ? (
          cards.map((obj) => (
            <VrButton
              // onClick={() => this.clickedObj(obj.key)}
              key={obj.key}
            >
              <Text>{obj.key}</Text>
            </VrButton>
          ))
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
