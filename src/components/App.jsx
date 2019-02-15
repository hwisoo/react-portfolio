import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import ProjectsList from './ProjectList';
// import globalStyles from '../assets/styles/global.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectsList} />
      </Switch>
    </div>
  );
}

export default App;
