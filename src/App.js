import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import PageNotFound from './Pages/PageNotFound';
// import { lightblue } from 'color-name'

function App() {
  return (
  <>
    <Router>
    <div style={{width: 2000 + 'px', height: 80 + 'px', backgroundColor: 'lightblue'}}>
      <Link to='/about'> About </Link>
      <Link to='/home'> Home </Link>
      <Link to='/projects'> Projects </Link>
    </div>
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/:name' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='*' exact component={PageNotFound} />
      </Switch> 
    </Router>
  </>  
  );
}


export default App;
