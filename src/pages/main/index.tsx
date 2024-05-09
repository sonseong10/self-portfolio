import React, {Suspense, lazy, useEffect, useRef, useState} from 'react';
import FetchItem from '../../service/fetch-item';
import type {IArtWorkData, IProjectData} from 'types/type';
import Layout from 'components/common/layout';
import {Route, Routes} from 'react-router-dom';
import About from 'pages/main/components/about';
import Projects from 'pages/main/components/projects/index';
import Promotion from 'pages/main/components/promotion/promotion';
import Artwork from 'pages/main/components/artwork';
import GlobalFooter from 'components/layout/footer/global-footer';
import Home from './components/main';
import Spinner from 'components/spinner/spinner';
import History from './components/work/index';

const ErrorPage = lazy(() => import('404'));
const Gallery = lazy(() => import('pages/gallery'));
const HistoryPage = lazy(() => import('pages/history'));

interface IMainProps {
  fetchItem: FetchItem;
}

function Main({fetchItem}: IMainProps) {
  const sectionRef = useRef<HTMLElement[]>([]);
  const promotionRef = useRef<HTMLDivElement>(null);

  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [projectLoading, setProjectLoading] = useState<boolean | undefined>(undefined);

  const [artworks, setArtwork] = useState<IArtWorkData[]>([]);

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
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      const stopSync = fetchItem.fetchData((artworks: IArtWorkData[]) => {
        setArtwork(artworks);
      }, 'artwork');
      return () => {
        stopSync();
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Layout.Main>
                <Home />
                <History sectionRef={sectionRef} />
                {/* <Skill skills={skills} sectionRef={sectionRef} loading={skillLoading} /> */}
                <Projects projects={projects} sectionRef={sectionRef} loading={projectLoading} />
                <About sectionRef={sectionRef} />
                <Artwork artworks={artworks} sectionRef={sectionRef} />
                <Promotion promotionRef={promotionRef} />
              </Layout.Main>
            }
          ></Route>
          <Route
            path="/artwork/:uid"
            element={
              <Suspense fallback={<Spinner />}>
                <Layout>
                  <Gallery artwork={artworks} />
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
