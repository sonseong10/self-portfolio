import React from "react";
import GlobalHeader from "./components/global-header/global-header";
import { Global, css } from "@emotion/react";
import Layout from "./components/layout";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <div className="App">
        <GlobalHeader />
        <Layout.Main>
          <Home />
        </Layout.Main>
      </div>
      <Global styles={globalStyle} />
    </>
  );
}

const globalStyle = css`
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
`;

export default App;
