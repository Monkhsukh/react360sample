let _onRotate;
let _win;
export const subscribe = (onRotate) => {
  _onRotate = onRotate;
};

export const rotate = () => {
  _onRotate();
};

export const subscribe1 = (Win) => {
  _win = Win;
};

export const win = () => {
  _win();
};
