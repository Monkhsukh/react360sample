import React, { PureComponent } from "react";
import { asset, Text, VrButton, AmbientLight, PointLight } from "react-360";
import Entity from "Entity";
import { subscribe, win } from "./actions";
import { View } from "react-native";

export default class Sphere extends PureComponent {
  state = {
    rotated: 0,
    isShow: false,
    numbers: [],
    scaleObj: 0,
  };

  generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  componentDidMount() {
    subscribe(this.startGame);
    let mp = [];
    [...Array(5)].map((_, i) =>
      mp.push({
        key: i.toString(),
        x: this.generateNumber(-10, 10),
        y: this.generateNumber(-10, 10),
        z: this.generateNumber(-10, 10),
      })
    );

    this.setState({
      numbers: mp,
    });
  }

  clickedObj = (key) => {
    nums = this.state.numbers;
    let obj;
    nums.map((i, _) => {
      if (i.key === key) {
        obj = i;
      }
    });

    const index = nums.indexOf(obj);
    if (index > -1) nums.splice(index, 1);

    this.setState({ numbers: nums });
    if (nums.length == 0) win();
  };

  render() {
    const { rotated, isShow, numbers, scaleObj } = this.state;

    return (
      isShow && (
        <View>
          {numbers.map((obj) => (
            <VrButton
              onClick={() => this.clickedObj(obj.key)}
              onEnter={() => this.setState({ scaleObj: 0.01 })}
              onExit={() => this.setState({ scaleObj: 0 })}
              key={obj.key}
            >
              <AmbientLight intensity={1} />
              <PointLight
                style={{
                  color: "white",
                  transform: [{ translate: [0, 1, 2] }],
                }}
              />
              <Entity
                source={{
                  obj: asset("Mesh_Hummingbird.obj"),
                  mtl: asset("Mesh_Hummingbird.mtl"),
                }}
                lit={false}
                style={{
                  transform: [
                    {
                      translate: [obj.x, obj.y, obj.z],
                    },
                    { scale: 0.02 + scaleObj },
                    { rotateX: rotated },
                  ],
                }}
              />
            </VrButton>
          ))}
        </View>
      )
    );
  }

  startGame = () => {
    this.setState({ isShow: true });
  };
}
