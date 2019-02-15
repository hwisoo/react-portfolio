import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
