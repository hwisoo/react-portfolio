import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import ProjectsList from './ProjectList';
import Error404 from './Error404';
import Footer from './Footer';
// import globalStyles from '../assets/styles/global.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectsList} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
