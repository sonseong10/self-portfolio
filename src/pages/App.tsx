import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ToTop from '../components/common/to-top';
import palette from '../assets/styles/constants/palette';
import media from '../assets/styles/constants/media';
import {createGlobalStyle} from 'styled-components';
import FetchItem from '../service/fetch-item';
import Main from 'pages/main/main';

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

interface IAppProps {
  fetchItem: FetchItem;
}

function App({fetchItem}: IAppProps) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Main fetchItem={fetchItem} />
      <ToTop />
    </BrowserRouter>
  );
}

export default App;
