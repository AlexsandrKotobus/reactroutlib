import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Notfoundpage from './pages/NotfoundPage';

import './App.css';




function App() {
  return (
    <>
    <header>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
        zdrcv

    </header>
   
    
  


    <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/login" element={<>LoginPage</>}/>
      <Route path="*" element={<Notfoundpage/>}/>

    </Routes>
   
    </>

    
  );
}

export default App;
