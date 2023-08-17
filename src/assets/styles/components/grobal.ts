import {createGlobalStyle} from 'styled-components';
import palette from '../constants/palette';
import media from '../constants/media';
const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;

      &:focus {
        outline: none;
      }
    }
  }

  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .App.dark {
    background-color: ${palette.darkTheme.primary};

    header,
    figure,
    footer {
      background-color: ${palette.darkTheme.primary};
      border-color: ${palette.darkTheme.secondary};
    }

    .row section,
    footer {
      background-color: ${palette.darkTheme.secondary};
    }

    h1,
    h2,
    h3,
    strong,
    span,
    a,
    dt,
    button {
      color: ${palette.darkTheme.fontPrimary};
      border-color: ${palette.darkTheme.secondary};
    }

    button,
    div > a {
      background-color: ${palette.darkTheme.primary};
      border-color: ${palette.darkTheme.secondary};

      &.shadow{
        box-shadow: 2px 2px 4px #000;
      }

      &:active {
        background-color: ${palette.darkTheme.secondary};
      }

      ${media.tablet} {
        &:hover {
          background-color: ${palette.darkTheme.secondary};
        }
      }
    }

    header *[type="button"],
    .slick-dots button {
      background-color: transparent;
    }

    li > div {
      border-color: ${palette.darkTheme.secondary};
    }

    p,
    dd,
    li,
    time,
    span.side {
      color: ${palette.darkTheme.fontSecondary};
    }
  }
`;

export default GlobalStyle;
