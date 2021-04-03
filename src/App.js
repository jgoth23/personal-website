// import { Route, Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="h1">Johnny G webpage FTW</h1>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
