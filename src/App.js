import './App.css';
import Home from './pages/Home';
import{Route,Switch} from 'react-router-dom';
import About from './pages/About';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import Mission from './pages/Mission';
import Faq from './pages/Faq';
import News from './pages/News';

function App() {
  return (
    <div className="App">
        <Navbar/>
         <Switch>
           <Route exact path='/'>
            <Home/>
          </Route>           
           <Route path='/about'>
            <About/>
           </Route>
           <Route path='/projects'>
            <Projects/>
           </Route>
           <Route path='/partners'>
             <Partners/>
           </Route>
           <Route path='/Mission'>
             <Mission/>
           </Route>
           <Route path='/Faq'>
             <Faq/>
           </Route>
           <Route path='/News'>
             <News/>
           </Route>
         </Switch>        
    </div>
  );
}

export default App;
