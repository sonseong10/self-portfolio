import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ToTop from './components/common/to-top';
import FetchItem from './service/fetch-item';
import Main from 'pages/main/index';
import GlobalStyle from 'assets/styles/components/grobal';
import {ThemeProvider, type DefaultTheme} from 'styled-components';
import {lightTheme} from 'styles/theme';

interface IAppProps {
  fetchItem: FetchItem;
}

function App({fetchItem}: IAppProps) {
  const [theme] = useState<DefaultTheme>(lightTheme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main fetchItem={fetchItem} />
        <ToTop />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
