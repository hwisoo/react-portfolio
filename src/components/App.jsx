import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import About from './About';
import ProjectsList from './ProjectList';
import Contact from './Contact';
import Error404 from './Error404';
import Footer from './Footer';
import globalStyles from '../assets/styles/global.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={globalStyles}>
        <Header />
        <Route path="/">
          <Redirect to="/about" />
        </Route>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectsList} />
          <Route path="/contact" component={Contact} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
