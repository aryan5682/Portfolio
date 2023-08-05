
//import './App.css';
import About from './Component/About Me/About';
import Achievement from './Component/Achievements/Achievement';
import Copyright from './Component/Copyright';
import Grades from './Component/Grades/Grades';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';

import ScrollButton from './Component/ScrollButton/ScrollButton';
import Skill from './Component/Skills/Skill';
import Header from './Component/header/Header';

import { Route, BrowserRouter as Router,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/About Me' element={< About mrgn='true' />}></Route>
                 <Route exact path='/Project' element={< Projects mrgn='true'/>}></Route>
                 <Route exact path='/Achievements' element={< Achievement mrgn='true'/>}></Route>
                 <Route exact path='/Skills' element={< Skill mrgn='true'/>}></Route>
                 <Route exact path='/Grades' element={< Grades mrgn='true'/>}></Route>
          </Routes>
      </Router>
      <Copyright/>
     <ScrollButton/>
    </div>
  );
}

export default App;
