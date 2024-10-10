const makeColor = () => {
  function ramdomColor() {
    return Math.floor(Math.random() * 256);
  }

  return [ramdomColor(), ramdomColor(), ramdomColor()];
};
export {makeColor};
