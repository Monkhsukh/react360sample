import React from "react";
import { View, StyleSheet } from "react-360";

import Quiz from "./Quiz";
import BeginView from "./BeginView";

export default class QuizGame extends React.Component {
  state = {
    start: false,
  };

  constructor(props) {
    super(props);
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

    return (
      <View style={styles.panel}>
        {this.state.start ? (
          <Quiz quiz={quiz} onSuccess={this.succssed} onFailed={this.failed} />
        ) : (
          <BeginView
            level={level}
            title={"Take the quiz"}
            onClick={this.startGame}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    backgroundColor: "rgba(255, 255, 255, 0)",
    justifyContent: "center",
    alignItems: "center",
  },
});
