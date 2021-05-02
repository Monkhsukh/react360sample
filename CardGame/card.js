import React, { Component } from "react";
import { View, StyleSheet, VrButton, Text, Image, asset, box } from "react-360";

//import Quiz from './Quiz'
import BeginButton from "./startb";

//How many kinds of card in the game
var cardArr = [];
function cardNum(n) {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < n; j++) {
      cardArr.push(j);
    }
  }
  //randomCard(cardArr);
}

//random the order of cards
function randomCard(cardArr) {
  for (var i = cardArr.length - 1; i >= 0; i--) {
    var randN = Math.floor(Math.random() * i);
    var dataN = cardArr[randN];
    cardArr[randN] = cardArr[i];
    cardArr[i] = dataN;
  }
}

export default class card extends React.Component {
  state = {
    win: false,
    count: 0,
    before: 20,
    beforeS: null,
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
    s6: false,
    s7: false,
    s8: false,
    s9: false,
    s10: false,
    s11: false,
    s12: false,
    s13: false,
    s14: false,
    s15: false,
    s16: false,
    i1: 1, //6
    i2: 8, //4
    i3: 0, //5
    i4: 10, //1
    i5: 9, //13
    i6: 2, //2
    i7: 3,
    i8: 11,
    i9: 14,
    i10: 0,
    i11: 7,
    i12: 12,
    i13: 9,
    i14: 8,
    i15: 15,
    i16: 10,
  };

  giveValue = () => {
    //this.back()
    //this.setState({i1,i2,i3,i4:cardArr[0],i2:cardArr[1],i3:cardArr[2],i4:cardArr[3]})
    //this.setState({i2:cardArr[1]})
    //this.setState({i3:cardArr[2]})
    //this.setState({i4:cardArr[3]})
    //this.setState({i5:cardArr[4]})
    /*this.setState({i6:cardArr[5]})
        this.setState({i7:cardArr[6]})
        this.setState({i8:cardArr[7]})
        this.setState({i9:cardArr[8]})
        this.setState({i10:cardArr[9]})
        this.setState({i11:cardArr[10]})
        this.setState({i12:cardArr[11]})
        this.setState({i13:cardArr[12]})
        this.setState({i14:cardArr[13]})
        this.setState({i15:cardArr[14]})
        this.setState({i16:cardArr[15]})*/
  };

  finish = () => {
    //this.setState({s1:false})
    //this.setState({s2:false})
    //this.setState({s3:false})
    //this.setState({s4:false})
    //this.setState({count:0})
    this.setState({ win: true });
    const { onPassLevel } = this.props;
    setTimeout(() => {
      onPassLevel();
    }, 1000);
  };

  same = (a, b) => {
    switch (a) {
      case 0:
        if (b == 8) {
          return true;
        } else {
          return false;
        }
      case 1:
        if (b == 9) {
          return true;
        } else {
          return false;
        }
      case 2:
        if (b == 10) {
          return true;
        } else {
          return false;
        }
      case 3:
        if (b == 11) {
          return true;
        } else {
          return false;
        }
      case 4:
        if (b == 12) {
          return true;
        } else {
          return false;
        }
      case 5:
        if (b == 13) {
          return true;
        } else {
          return false;
        }
      case 6:
        if (b == 14) {
          return true;
        } else {
          return false;
        }
      case 7:
        if (b == 15) {
          return true;
        } else {
          return false;
        }
      case 8:
        if (b == 0) {
          return true;
        } else {
          return false;
        }
      case 9:
        if (b == 1) {
          return true;
        } else {
          return false;
        }
      case 10:
        if (b == 2) {
          return true;
        } else {
          return false;
        }
      case 11:
        if (b == 3) {
          return true;
        } else {
          return false;
        }
      case 12:
        if (b == 4) {
          return true;
        } else {
          return false;
        }
      case 13:
        if (b == 5) {
          return true;
        } else {
          return false;
        }
      case 14:
        if (b == 6) {
          return true;
        } else {
          return false;
        }
      case 15:
        if (b == 7) {
          return true;
        } else {
          return false;
        }
    }
  };

  cli = (s) => {
    if (this.state.before == 20) {
      this.putbefore(s);
      this.putbeforeS(s);
    } else {
      if (this.same(this.state.before, this.getvalue(s))) {
        sum = this.state.count + 1;
        if (sum == 3) {
          this.finish();
        } else {
          this.setState({ count: sum });
        }
        this.setState({ beforeS: null });
        this.setState({ before: 20 });
      } else {
        this.close(s);
        this.close(this.state.beforeS);
        this.setState({ beforeS: null });
        this.setState({ before: 20 });
      }
    }
  };

  getvalue = (s) => {
    switch (s) {
      case "s1":
        value = this.state.i1;
        return value;
        break;
      case "s2":
        value = this.state.i2;
        return value;
        break;
      case "s3":
        value = this.state.i3;
        return value;
        break;
      case "s4":
        value = this.state.i4;
        return value;
        break;
      case "s5":
        value = this.state.i5;
        return value;
        break;
      case "s6":
        value = this.state.i6;
        return value;
        break;
      case "s7":
        value = this.state.i7;
        return value;
        break;
      case "s8":
        value = this.state.i8;
        return value;
        break;
      case "s9":
        value = this.state.i9;
        return value;
        break;
      case "s10":
        value = this.state.i10;
        return value;
        break;
      case "s11":
        value = this.state.i11;
        return value;
        break;
      case "s12":
        value = this.state.i12;
        return value;
        break;
      case "s13":
        value = this.state.i13;
        return value;
        break;
      case "s14":
        value = this.state.i14;
        return value;
        break;
      case "s15":
        value = this.state.i15;
        return value;
        break;
      case "s16":
        value = this.state.i16;
        return value;
        break;
    }
  };

  putbefore = (s) => {
    switch (s) {
      case "s1":
        value = this.state.i1;
        this.setState({ before: value });
        break;
      case "s2":
        value = this.state.i2;
        this.setState({ before: value });
        break;
      case "s3":
        value = this.state.i3;
        this.setState({ before: value });
        break;
      case "s4":
        value = this.state.i4;
        this.setState({ before: value });
        break;
      case "s5":
        value = this.state.i5;
        this.setState({ before: value });
        break;
      case "s6":
        value = this.state.i6;
        this.setState({ before: value });
        break;
      case "s7":
        value = this.state.i7;
        this.setState({ before: value });
        break;
      case "s8":
        value = this.state.i8;
        this.setState({ before: value });
        break;
      case "s9":
        value = this.state.i9;
        this.setState({ before: value });
        break;
      case "s10":
        value = this.state.i10;
        this.setState({ before: value });
        break;
      case "s11":
        value = this.state.i11;
        this.setState({ before: value });
        break;
      case "s12":
        value = this.state.i12;
        this.setState({ before: value });
        break;
      case "s13":
        value = this.state.i13;
        this.setState({ before: value });
        break;
      case "s14":
        value = this.state.i14;
        this.setState({ before: value });
        break;
      case "s15":
        value = this.state.i15;
        this.setState({ before: value });
        break;
      case "s16":
        value = this.state.i16;
        this.setState({ before: value });
        break;
    }
  };

  putbeforeS = (s) => {
    switch (s) {
      case "s1":
        this.setState({ beforeS: "s1" });
        break;
      case "s2":
        this.setState({ beforeS: "s2" });
        break;
      case "s3":
        this.setState({ beforeS: "s3" });
        break;
      case "s4":
        this.setState({ beforeS: "s4" });
        break;
      case "s5":
        this.setState({ beforeS: "s5" });
        break;
      case "s6":
        this.setState({ beforeS: "s6" });
        break;
      case "s7":
        this.setState({ beforeS: "s7" });
        break;
      case "s16":
        this.setState({ beforeS: "s16" });
        break;
      case "s8":
        this.setState({ beforeS: "s8" });
        break;
      case "s9":
        this.setState({ beforeS: "s9" });
        break;
      case "s10":
        this.setState({ beforeS: "s10" });
        break;
      case "s11":
        this.setState({ beforeS: "s11" });
        break;
      case "s12":
        this.setState({ beforeS: "s12" });
        break;
      case "s13":
        this.setState({ beforeS: "s13" });
        break;
      case "s14":
        this.setState({ beforeS: "s14" });
        break;
      case "s15":
        this.setState({ beforeS: "s15" });
        break;
    }
  };

  close = (s) => {
    switch (s) {
      case "s1":
        this.setState({ s1: false });
        break;
      case "s2":
        this.setState({ s2: false });
        break;
      case "s3":
        this.setState({ s3: false });
        break;
      case "s4":
        this.setState({ s4: false });
        break;
      case "s5":
        this.setState({ s5: false });
        break;
      case "s6":
        this.setState({ s6: false });
        break;
      case "s7":
        this.setState({ s7: false });
        break;
      case "s8":
        this.setState({ s8: false });
        break;
      case "s9":
        this.setState({ s9: false });
        break;
      case "s10":
        this.setState({ s10: false });
        break;
      case "s11":
        this.setState({ s11: false });
        break;
      case "s12":
        this.setState({ s12: false });
        break;
      case "s13":
        this.setState({ s13: false });
        break;
      case "s14":
        this.setState({ s14: false });
        break;
      case "s15":
        this.setState({ s15: false });
        break;
      case "s16":
        this.setState({ s16: false });
        break;
    }
  };

  change = (s) => {
    switch (s) {
      case 1:
        if (this.state.s1) {
          break;
        } else {
          this.setState({ s1: true });
          setTimeout(() => {
            this.cli("s1");
          }, 500);
        }
        break;
      case 2:
        if (this.state.s2) {
          break;
        } else {
          this.setState({ s2: true });
          setTimeout(() => {
            this.cli("s2");
          }, 500);
        }
        break;
      case 3:
        if (this.state.s3) {
          break;
        } else {
          this.setState({ s3: true });
          setTimeout(() => {
            this.cli("s3");
          }, 500);
        }
        break;
      case 4:
        if (this.state.s4) {
          break;
        } else {
          this.setState({ s4: true });
          setTimeout(() => {
            this.cli("s4");
          }, 500);
        }
        break;
      case 5:
        if (this.state.s5) {
          break;
        } else {
          this.setState({ s5: true });
          setTimeout(() => {
            this.cli("s5");
          }, 500);
        }
        break;
      case 6:
        if (this.state.s6) {
          break;
        } else {
          this.setState({ s6: true });
          setTimeout(() => {
            this.cli("s6");
          }, 500);
        }
        break;
      case 7:
        if (this.state.s7) {
          break;
        } else {
          this.setState({ s7: true });
          setTimeout(() => {
            this.cli("s7");
          }, 500);
        }
        break;
      case 8:
        if (this.state.s8) {
          break;
        } else {
          this.setState({ s8: true });
          setTimeout(() => {
            this.cli("s8");
          }, 500);
        }
        break;
      case 9:
        if (this.state.s9) {
          break;
        } else {
          this.setState({ s9: true });
          setTimeout(() => {
            this.cli("s9");
          }, 500);
        }
        break;
      case 10:
        if (this.state.s10) {
          break;
        } else {
          this.setState({ s10: true });
          setTimeout(() => {
            this.cli("s10");
          }, 500);
        }
        break;
      case 11:
        if (this.state.s11) {
          break;
        } else {
          this.setState({ s11: true });
          setTimeout(() => {
            this.cli("s11");
          }, 500);
        }
        break;
      case 12:
        if (this.state.s12) {
          break;
        } else {
          this.setState({ s12: true });
          setTimeout(() => {
            this.cli("s12");
          }, 500);
        }
        break;
      case 13:
        if (this.state.s13) {
          break;
        } else {
          this.setState({ s13: true });
          setTimeout(() => {
            this.cli("s13");
          }, 500);
        }
        break;
      case 14:
        if (this.state.s14) {
          break;
        } else {
          this.setState({ s14: true });
          setTimeout(() => {
            this.cli("s14");
          }, 500);
        }
        break;
      case 15:
        if (this.state.s15) {
          break;
        } else {
          this.setState({ s15: true });
          setTimeout(() => {
            this.cli("s15");
          }, 500);
        }
        break;
      case 1:
        if (this.state.s16) {
          break;
        } else {
          this.setState({ s16: true });
          setTimeout(() => {
            this.cli("s16");
          }, 500);
        }
        break;
    }
  };

  render() {
    const { onPassLevel } = this.props;
    //cardNum(2);

    return (
      <View>
        <Text style={styles.title}>
          {this.state.win ? "You win!" : "Memory flop game!"}
        </Text>
        <View style={styles.panel}>
          <VrButton onClick={() => this.change(1)} style={styles.BeginButton}>
            {this.state.s1 ? (
              <Image
                source={asset(this.state.i1 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(2)} style={styles.BeginButton}>
            {this.state.s2 ? (
              <Image
                source={asset(this.state.i2 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(3)} style={styles.BeginButton}>
            {this.state.s3 ? (
              <Image
                source={asset(this.state.i3 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(4)} style={styles.BeginButton}>
            {this.state.s4 ? (
              <Image
                source={asset(this.state.i4 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>

          <VrButton onClick={() => this.change(5)} style={styles.BeginButton}>
            {this.state.s5 ? (
              <Image
                source={asset(this.state.i5 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(6)} style={styles.BeginButton}>
            {this.state.s6 ? (
              <Image
                source={asset(this.state.i6 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(7)} style={styles.BeginButton}>
            {this.state.s7 ? (
              <Image
                source={asset(this.state.i7 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(8)} style={styles.BeginButton}>
            {this.state.s8 ? (
              <Image
                source={asset(this.state.i8 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(9)} style={styles.BeginButton}>
            {this.state.s9 ? (
              <Image
                source={asset(this.state.i9 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(10)} style={styles.BeginButton}>
            {this.state.s10 ? (
              <Image
                source={asset(this.state.i10 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(11)} style={styles.BeginButton}>
            {this.state.s11 ? (
              <Image
                source={asset(this.state.i11 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(12)} style={styles.BeginButton}>
            {this.state.s12 ? (
              <Image
                source={asset(this.state.i12 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(13)} style={styles.BeginButton}>
            {this.state.s13 ? (
              <Image
                source={asset(this.state.i13 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(14)} style={styles.BeginButton}>
            {this.state.s14 ? (
              <Image
                source={asset(this.state.i14 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(15)} style={styles.BeginButton}>
            {this.state.s15 ? (
              <Image
                source={asset(this.state.i15 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
          <VrButton onClick={() => this.change(16)} style={styles.BeginButton}>
            {this.state.s16 ? (
              <Image
                source={asset(this.state.i16 + ".jpg")}
                style={styles.levelButton}
              />
            ) : (
              <Image source={asset("all.jpg")} style={styles.levelButton} />
            )}
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(255, 255, 255, 0)",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 400,
  },
  title: {
    fontSize: 50,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 40,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    color: "#feff44",
  },
  BeginButton: {},
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
    paddingTop: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    marginBottom: 50,
  },
  levelButton: {
    // Fill the entire surface
    width: 100,
    height: 100,
  },
});
