import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ToTop from './components/common/to-top';
import FetchItem from './service/fetch-item';
import Main from 'pages/main/index';
import GlobalStyle from 'assets/styles/components/grobal';

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
