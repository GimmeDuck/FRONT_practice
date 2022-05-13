
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Project from './screens/Project';
import Questions from './screens/Questions';
import ReactDoc from './screens/ReactDoc';
import Home from './screens/Home';
import About from './screens/About';
import NavBarElements from './components/Navbar/NavBarElements';

function App() {
  return (
  <Router>
    <NavBarElements/>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/About" element = {<About />}/>
      <Route path = "/Project" element = {<Project />}/>
      <Route path = "/Questions" element = {<Questions />}/>
      <Route path = "/ReactDoc" element = {<ReactDoc />}/>
    </Routes>
  </Router>
  );
}

export default App;
