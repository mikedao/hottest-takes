import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';

import './index.css';
import { Provider } from './lib/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider>
      <Application />
    </Provider>
  </React.StrictMode>,
);
