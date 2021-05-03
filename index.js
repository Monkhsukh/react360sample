import React from "react";
import {
  asset,
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
} from "react-360";

import Sphere from "./Sphere";

import StartButton from "./components/StartButton";
import LevelStates from "./components/LevelStates";
import QuizGame from "./components/QuizGame";
import FindingGame from "./components/FindingGame";
import CardGame from "./components/CardGame";
import Card from "./CardGame/card";

import Entity from "Entity";
import WelcomeView from "./components/WelcomeView";

const { AudioModule } = NativeModules;

AppRegistry.registerComponent("Sphere", () => Sphere);

export default class hello_vr extends React.Component {
  state = {
    start: true,
    level: 0,
    quiz: [],
  };

  startGame = () => {
    this.setState({ start: false });
    this.goLevel(1);
  };

  nextLevel = () => {
    this.goLevel(this.state.level + 1);
  };

  playAgain = () => {
    this.goLevel(this.state.level);
  };

  loadQuiz = (level) => {
    fetch(`./static_assets/${level}.json`, {
      credentials: "include",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const quiz = data.map((item) => ({
          question: item.question,
          options: this.shuffle([
            ...item.incorrect_answers,
            item.correct_answer,
          ]),
          answer: item.correct_answer,
        }));
        this.setState({ ...this.state, quiz });
      })
      .catch((data) => {
        console.log("failed to get data", data);
      });
  };

  goLevel = (level) => {
    this.setState({ level: level });

    switch (level) {
      case 1:
        this.loadQuiz(level);
        break;
      case 2:
        Environment.setBackgroundImage(asset(`az1.jpg`));
        break;
      case 3:
        this.loadQuiz(level);
        break;
      case 5:
        Environment.setBackgroundImage(asset(`mgl1.jpg`));
        break;
      case 6:
        this.loadQuiz(level);
        break;
      case 8:
        Environment.setBackgroundImage(asset(`chn1.jpg`));
        break;
      default:
        // Environment.setBackgroundImage(asset(`360_world.jpg`));
        break;
    }
  };

  shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  render() {
    return (
      <View>
        <View style={styles.panel}>
          {this.state.start ? (
            <StartButton startGame={this.startGame} />
          ) : (
            <LevelStates level={this.state.level} choose={this.goLevel} />
          )}
          {(this.state.level == 1 ||
            this.state.level == 3 ||
            this.state.level == 6) && (
            <QuizGame
              level={this.state.level}
              quiz={this.state.quiz}
              onPassLevel={this.nextLevel}
              onFailedLevel={this.playAgain}
            />
          )}

          {this.state.level == 2 && (
            <WelcomeView
              title="Welcome to Azerbaijan!"
              view1="az1.jpg"
              view2="az2.jpg"
              view3="az3.jpg"
              onClick={this.nextLevel}
            />
          )}

          {this.state.level == 4 && (
            <FindingGame
              level={this.state.level}
              onPassLevel={this.nextLevel}
            />
          )}

          {this.state.level == 5 && (
            <WelcomeView
              title="Welcome to Mongolia"
              view1="mgl1.jpg"
              view2="mgl2.jpg"
              view3="mgl3.jpg"
              onClick={this.nextLevel}
            />
          )}

          {this.state.level == 7 && (
            <CardGame level={this.state.level} onPassLevel={this.nextLevel} />
          )}

          {this.state.level == 8 && (
            <WelcomeView
              title="Welcome to China"
              view1="chn1.jpg"
              view2="chn2.jpg"
              view3="chn3.jpg"
              onClick={this.nextLevel}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
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
});

AppRegistry.registerComponent("hello_vr", () => hello_vr);
