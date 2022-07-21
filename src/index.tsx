import React from 'react';
import ReactDom from 'react-dom';

import { App } from './Containers/App';
import reportWebVitals from './reportWebVitals';

function HeroesCatalog() {
  return <App />;
}

ReactDom.render(<HeroesCatalog />, document.getElementById('root'));

reportWebVitals();
