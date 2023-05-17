const convertPxToRem = (pixel: number) => {
  const htmlDefaultFontSize = 16;
  const oneRem = 1 / htmlDefaultFontSize;
  return pixel * oneRem;
};

export const breakpointGenerator = (fontSizeArray: [number, number]) => {
  const x = fontSizeArray[1] - fontSizeArray[0];
  const x1 = x / 4;

  return {
    fontSize: `${convertPxToRem(fontSizeArray[0])}rem`,
    "@media (min-width:600px)": {
      fontSize: `${convertPxToRem(fontSizeArray[0] + x1)}rem`,
    },
    "@media (min-width:900px)": {
      fontSize: `${convertPxToRem(fontSizeArray[0] + x1 * 2)}rem`,
    },
    "@media (min-width:1200px)": {
      fontSize: `${convertPxToRem(fontSizeArray[0] + x1 * 3)}rem`,
    },
    "@media (min-width:1344px)": {
      fontSize: `${convertPxToRem(fontSizeArray[1])}rem`,
    },
  };
};
