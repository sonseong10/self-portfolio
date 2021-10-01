import React, { useEffect, useState } from "react";
import GlobalHeader from "./components/global-header/global-header";
import { Global, css } from "@emotion/react";
import Layout from "./components/layout";
import Home from "./components/home/home";
import Skill from "./components/skill/skill";
import Projects from "./components/projects/projects";

function App({ fetchItem }) {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stopSync = fetchItem.fetchSkils((skills) => {
      setSkills(skills);
    });
    return () => {
      stopSync();
    };
  }, [fetchItem]);

  useEffect(() => {
    const stopSync = fetchItem.fetchProjects((skills) => {
      setProjects(skills);
    });
    return () => {
      stopSync();
    };
  }, [fetchItem]);

  return (
    <>
      <div className="App">
        <Layout.Header>
          <GlobalHeader />
        </Layout.Header>
        <Layout.Main>
          <Home />
          <Skill skills={skills} />
          <Projects projects={projects} />
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
    *:focus {
      box-sizing: inherit;
      outline: none;
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
