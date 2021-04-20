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

import StartButton from './components/StartButton'
import LevelStates from './components/LevelStates'
import Game from './components/Game'

AppRegistry.registerComponent("Sphere", () => Sphere);

const { AudioModule } = NativeModules;

export default class hello_vr extends React.Component {
  state = {
    show: false,
    playSound: false,
    level: 'start',
    topLevel: 1,
    quiz: []
  };

  _playSound = () => {
    this.setState({
      playSound: !this.state.playSound,
    });

    if (this.state.playSound) {
      AudioModule.createAudio("sza", {
        source: asset("mixkit-dog-barking-twice-1.wav"),
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

  startGame = () => {
    // this.setState({ ...this.state, level: 1})

    // this.turnLevel()
    this.goLevel(1)
  }

  nextLevel = () => {
    this.goLevel(this.state.level + 1)
  }

  playAgain = () => {
    this.goLevel(this.state.level)
  }

  goLevel = level => {
    const topLevel = this.state.level == 'start' ? 1 : level > this.state.topLevel ? level : this.state.topLevel

    this.setState({ ...this.state, level, topLevel})
    this.turnLevel(level)
  }

  shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

  turnLevel = level => {
    switch(level) {
      case 1:
        Environment.setBackgroundImage(
          asset(`360_world.jpg`)
        )
        break
      case 2:
        Environment.setBackgroundImage(
          asset(`Heros square.jpg`)
        )
        break
      default:
        Environment.setBackgroundImage(
          asset(`Fisherman.jpg`)
        )
        break
    }

    fetch(`./static_assets/${level}.json`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then((res) => res.json())
    .then((data) => {
      const quiz = data.map(item => (
        {
            question: item.question,
            options: this.shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer
        }
      ))
      this.setState({...this.state, quiz})
    })
    .catch((data) => {
      console.log('failed to get data', data)
    })
  }

  render() {
    return (
      <View style={styles.panel}>
        { this.state.level === 'start' && <StartButton startGame={this.startGame} /> }
        {(this.state.level >= 1) &&
            <LevelStates level={this.state.topLevel} choose={this.goLevel}/>
        }
        {(this.state.level >= 1) &&
            <Game level={this.state.level} quiz={this.state.quiz} onPassLevel={this.nextLevel} onFailedLevel={this.playAgain}/>
        }
        {/* {(this.state.level >= 1) &&
          <VrButton onClick={this.nextLevel}><Text style={{backgroundColor: '#eeeeee11'}}>Pass Level</Text></VrButton>
        } */}
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
    display: 'flex',
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
