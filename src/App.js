import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Service from './components/Service';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route index path='/' Component={Home}/>
        <Route path='/Service' Component={Service}/>
        <Route path='/Contact' Component={Contact}/>
        <Route path='/Blogs' Component={Blogs}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
