import React, {useEffect, useRef, useState} from 'react';
import GlobalHeader from './components/global-header/global-header';
import Home from './components/home/home';
import Skill from './components/skill/skill';
import Projects from './components/projects/projects';
import Layout from './components/common/layout';
import Promotion from './components/promotion/promotion';
import Artwork from './components/artwork/artwork';
import About from './components/about/about';
import GlobalFooter from './components/global-footer/global-footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Gallery from './components/gallery/gallery';
import ErrorPage from './components/error-page/404';
import useChannelPluginEffect from './useChannelPluginEffect';
import ToTop from './components/common/to-top';
import palette from './assets/styles/constants/palette';
import useTheme from './utils/useTheme';
import media from './assets/styles/constants/media';
import {createGlobalStyle} from 'styled-components';

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

function App({fetchItem}: any) {
  const sectionRef = useRef<HTMLElement[]>([]);
  const promotionRef = useRef<HTMLElement>(null);

  const [skills, setSkills] = useState([]);
  const [skillLoading, setSkillLoading] = useState<boolean | undefined>(undefined);

  const [projects, setProjects] = useState([]);

  const [artwork, setArtwork] = useState([]);
  const [artworkLoading, setArtworkLoading] = useState<boolean | undefined>(undefined);

  const [theme, onToggle] = useTheme();
  useEffect(() => {
    try {
      setSkillLoading(true);
      const stopSync = fetchItem.fetchData((skills: any) => {
        setSkills(skills);
        setSkillLoading(false);
      }, 'skills');

      return () => {
        stopSync();
      };
    } catch (error) {
      setSkillLoading(true);
    }
  }, [fetchItem]);

  useEffect(() => {
    const stopSync = fetchItem.fetchData((projects: any) => {
      setProjects(projects);
    }, 'projects');
    return () => {
      stopSync();
    };
  }, []);

  useEffect(() => {
    try {
      setArtworkLoading(true);
      const stopSync = fetchItem.fetchData((artworks: any) => {
        setArtwork(artworks);
        setArtworkLoading(false);
      }, 'artwork');
      return () => {
        stopSync();
      };
    } catch (error) {
      setArtworkLoading(true);
    }
  }, []);

  useChannelPluginEffect();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className={`App ${theme === 'dark' ? 'dark' : undefined}`}>
        <Layout.Header>
          <GlobalHeader sectionRef={sectionRef} artwork={artwork} toggleTheme={onToggle} theme={theme} />
        </Layout.Header>

        <Routes>
          <Route path="/">
            <Route
              path="main"
              element={
                <Layout.Main>
                  <Home />
                  <About />
                  <Skill skills={skills} sectionRef={sectionRef} loading={skillLoading} />
                  <Projects projects={projects} sectionRef={sectionRef} />
                  <Promotion promotionRef={promotionRef} />
                  <Artwork artwork={artwork} sectionRef={sectionRef} loading={artworkLoading} />
                </Layout.Main>
              }
            />
            <Route
              path="artwork/:uid"
              element={
                <Layout>
                  <Gallery artwork={artwork} />
                </Layout>
              }
            />
            <Route
              path={'error'}
              element={
                <Layout>
                  <ErrorPage />
                </Layout>
              }
            />
            <Route
              path={'*'}
              element={
                <Layout>
                  <ErrorPage />
                </Layout>
              }
            />
          </Route>
        </Routes>

        <Layout.Footer>
          <GlobalFooter />
        </Layout.Footer>
      </div>
      <ToTop />
    </BrowserRouter>
  );
}

export default App;
