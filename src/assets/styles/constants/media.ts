const mediaQuery = (minWidth: number) => `
  @media (min-width: ${minWidth}px)
`;

const media = {
  desktop: mediaQuery(1200),
  tablet: mediaQuery(768),
  custom: mediaQuery,
};

export default media;
