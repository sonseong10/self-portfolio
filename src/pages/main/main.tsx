import React, {useEffect, useRef, useState} from 'react';
import FetchItem from '../../service/fetch-item';
import type {IArtWorkData, IProjectData, ISkillsData} from 'types/type';
import Layout from 'components/common/layout';
import GlobalHeader from 'components/layout/header/global-header';
import {Route, Routes} from 'react-router-dom';
import About from 'pages/main/components/about/about';
import Skill from 'pages/main/components/skill/skill';
import Projects from 'pages/main/components/projects/projects';
import Promotion from 'pages/main/components/promotion/promotion';
import Artwork from 'pages/main/components/artwork/artwork';
import Gallery from 'pages/gallery/gallery';
import ErrorPage from 'pages/404';
import GlobalFooter from 'components/layout/footer/global-footer';
import useTheme from 'utils/useTheme';
import Home from './components/home/home';

interface IMainProps {
  fetchItem: FetchItem;
}

function Main({fetchItem}: IMainProps) {
  const sectionRef = useRef<HTMLElement[]>([]);
  const promotionRef = useRef<HTMLElement>(null);

  const [skills, setSkills] = useState<ISkillsData[]>([]);
  const [skillLoading, setSkillLoading] = useState<boolean | undefined>(undefined);

  const [projects, setProjects] = useState<IProjectData[]>([]);

  const [artwork, setArtwork] = useState<IArtWorkData[]>([]);
  const [artworkLoading, setArtworkLoading] = useState<boolean | undefined>(undefined);
  const {theme, toggleTheme} = useTheme();

  useEffect(() => {
    try {
      setSkillLoading(true);
      const stopSync = fetchItem.fetchData((skills: ISkillsData[]) => {
        setSkills(skills);
        setSkillLoading(false);
      }, 'skills');

      return () => {
        stopSync();
      };
    } catch (error) {
      setSkillLoading(true);
    }
  }, []);

  useEffect(() => {
    const stopSync = fetchItem.fetchData((projects: IProjectData[]) => {
      setProjects(projects);
    }, 'projects');
    return () => {
      stopSync();
    };
  }, []);

  useEffect(() => {
    try {
      setArtworkLoading(true);
      const stopSync = fetchItem.fetchData((artworks: IArtWorkData[]) => {
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

  return (
    <div className={`App ${theme === 'dark' ? 'dark' : undefined}`}>
      <Layout.Header>
        <GlobalHeader sectionRef={sectionRef} artwork={artwork} toggleTheme={toggleTheme} theme={theme} />
      </Layout.Header>

      <Routes>
        <Route path="/">
          <Route
            path="/"
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
          ></Route>
          <Route
            path="/artwork/:uid"
            element={
              <Layout>
                <Gallery artwork={artwork} />
              </Layout>
            }
          />
          <Route
            path={'/error'}
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
  );
}

export default Main;
