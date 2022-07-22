import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import Region from './components/Dashboard/Region/Region';
import Area from './components/Dashboard/Area/Area';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='region' element={<Region />}></Route>
          <Route path='area' element={<Area />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
