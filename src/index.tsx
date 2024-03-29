import React from 'react';
import {firebaseApp} from './service/firebase';
import FetchItem from './service/fetch-item';
import './assets/styles/index.css';
import {createRoot} from 'react-dom/client';
import App from 'App';

const fetchItem = new FetchItem(firebaseApp);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App fetchItem={fetchItem} />);
