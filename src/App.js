import React from 'react';
import Layout from './Layout/Layout';

import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



function App() {
  return (
    <Router>
        <Layout />
    </Router>
  );
}



export default App;