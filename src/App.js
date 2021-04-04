// import { Route, Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import Skills from './components/pages/Skills';


function App() {
  return (
    <div className="App">
      {/* <h1 className="h1">Johnny G webpage FTW</h1> */}
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/education' component={Education} />
        <Route path='/skills' component={Skills} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
