const textStyle = (fontSize) => {
  switch (fontSize) {
    case 12:
      return `
      font-size: ${fontSize}px;
      line-height: 16px;
      letter-spacing: -0.5%;`;
    case 13:
      return `
      font-size: ${fontSize}px;
      line-height: 20px;
      letter-spacing: -0.01em;`;
    case 14:
      return `
      font-size: ${fontSize}px;
      line-height: 24px;
      letter-spacing: -0.01em;`;
    case 16:
      return `
      font-size: ${fontSize}px;
      line-height: 24px;
      letter-spacing: -0.01em;`;
    case 18:
      return `
        font-size: ${fontSize}px;
        line-height: 28px;
        letter-spacing: -0.02em;`;
    case 24:
      return `
        font-size: ${fontSize}px;
        line-height: 34px;
        letter-spacing: -0.01em;`;
    default:
      throw new Error(`Unknow font size: ${fontSize}`);
  }
};

const typography = {
  micro: textStyle(12),
  tiny: textStyle(13),
  small: textStyle(14),
  base: textStyle(16),
  midium: textStyle(18),
  lage: textStyle(24),
};

export default typography;
