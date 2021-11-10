import React, { useEffect, useRef, useState } from "react";
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
import { Switch, Route } from "react-router-dom";
import Gallery from "./components/gallery/gallery";
import ErrorPage from "./components/error-page/404";
import useChannelPluginEffect from "./useChannelPluginEffect";
import ToTop from "./components/common/to-top";
import palette from "./assets/styles/constants/palette";
import useTheme from "./utils/useTheme";
import media from "./assets/styles/constants/media";

function App({ fetchItem }) {
  const sectionRef = useRef([]);
  const promotionRef = useRef();

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [artwork, setArtwork] = useState([]);

  const [theme, onToggle] = useTheme();

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

  useChannelPluginEffect();

  return (
    <>
      <div className={`App ${theme === "dark" && "dark"}`}>
        <Layout.Header>
          <GlobalHeader
            sectionRef={sectionRef}
            artwork={artwork}
            toggleTheme={onToggle}
            theme={theme}
          />
        </Layout.Header>
        <Switch>
          <Route exact path="/">
            <Layout.Main>
              <Home />
              <Skill skills={skills} sectionRef={sectionRef} />
              <Projects projects={projects} sectionRef={sectionRef} />
              <Promotion promotionRef={promotionRef} />
              <Artwork artwork={artwork} sectionRef={sectionRef} />
              <About />
            </Layout.Main>
          </Route>
          <Route path="/artwork/:uid">
            <Layout>
              <Gallery artwork={artwork} />
            </Layout>
          </Route>
          <Route path={["*", "/error"]}>
            <Layout>
              <ErrorPage />
            </Layout>
          </Route>
        </Switch>

        <Layout.Footer>
          <GlobalFooter />
        </Layout.Footer>
      </div>
      <ToTop />
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

  .App.dark {
    background-color: ${palette.gray[100]};

    header,
    figure,
    footer {
      background-color: ${palette.gray[100]};
      border-color: ${palette.gray[200]};
    }

    h1,
    h2,
    h3,
    strong,
    span,
    a,
    dt,
    button {
      color: ${palette.gray[600]};
      border-color: ${palette.gray[100]};
    }

    button,
    a {
      background-color: ${palette.gray[100]};
      border-color: ${palette.gray[200]};

      &:active {
        background-color: ${palette.gray[300]};
      }

      ${media.tablet} {
        &:hover {
          background-color: ${palette.gray[300]};
        }
      }
    }

    header *[type="button"],
    .slick-dots button {
      background-color: transparent;
    }

    li > div {
      border-color: ${palette.gray[200]};
    }

    p,
    dd,
    li,
    time,
    span.side {
      color: ${palette.gray[500]};
    }
  }
`;

export default App;
