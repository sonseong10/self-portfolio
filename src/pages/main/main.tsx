import React, {Suspense, lazy, useEffect, useRef, useState} from 'react';
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
import GlobalFooter from 'components/layout/footer/global-footer';
import useTheme from 'utils/useTheme';
import Home from './components/home/home';
import Spinner from 'components/spinner/spinner';
import History from './components/history/history';

const ErrorPage = lazy(() => import('pages/404'));
const Gallery = lazy(() => import('pages/gallery/gallery'));
const HistoryPage = lazy(() => import('pages/history/history'));

interface IMainProps {
  fetchItem: FetchItem;
}

function Main({fetchItem}: IMainProps) {
  const sectionRef = useRef<HTMLElement[]>([]);
  const promotionRef = useRef<HTMLElement>(null);

  const [skills, setSkills] = useState<ISkillsData[]>([]);
  const [skillLoading, setSkillLoading] = useState<boolean | undefined>(undefined);

  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [projectLoading, setProjectLoading] = useState<boolean | undefined>(undefined);

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
    try {
      setProjectLoading(true);
      const stopSync = fetchItem.fetchData((projects: IProjectData[]) => {
        setProjects(projects);
        setProjectLoading(false);
      }, 'projects');
      return () => {
        stopSync();
      };
    } catch (error) {
      setProjectLoading(true);
    }
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
            index
            element={
              <Layout.Main>
                <Home />
                <About />
                <Skill skills={skills} sectionRef={sectionRef} loading={skillLoading} />
                <History sectionRef={sectionRef} />
                <Projects projects={projects} sectionRef={sectionRef} loading={projectLoading} />
                <Promotion promotionRef={promotionRef} />
                <Artwork artwork={artwork} sectionRef={sectionRef} loading={artworkLoading} />
              </Layout.Main>
            }
          ></Route>
          <Route
            path="/artwork/:uid"
            element={
              <Suspense fallback={<Spinner />}>
                <Layout>
                  <Gallery artwork={artwork} />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/history/fastview"
            element={
              <Suspense fallback={<Spinner />}>
                <Layout>
                  <HistoryPage />
                </Layout>
              </Suspense>
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
