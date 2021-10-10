import React, { useEffect, useState } from "react";
import GlobalHeader from "./components/global-header/global-header";
import { Global, css } from "@emotion/react";
import Home from "./components/home/home";
import Skill from "./components/skill/skill";
import Projects from "./components/projects/projects";
import Layout from "./components/common/layout";
import Promotion from "./components/promotion/promotion";
import Artwork from "./components/artwork/artwork";
import About from "./components/about/about";
import GlobalFooter from "./components/global-footer/global-footer";

function App({ fetchItem }) {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    const stopSync = fetchItem.fetchData((skills) => {
      setSkills(skills);
    }, "skills");
    return () => {
      stopSync();
    };
  }, [fetchItem]);

  useEffect(() => {
    const stopSync = fetchItem.fetchData((projects) => {
      setProjects(projects);
    }, "projects");
    return () => {
      stopSync();
    };
  }, [fetchItem]);

  useEffect(() => {
    const stopSync = fetchItem.fetchData((artworks) => {
      setArtwork(artworks);
    }, "artwork");
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
          <Promotion />
          <Artwork artwork={artwork} />
          <About />
        </Layout.Main>
        <Layout.Footer>
          <GlobalFooter />
        </Layout.Footer>
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
`;

export default App;
