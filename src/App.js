import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Dinner from './pages/Home/Dinner/Dinner';
import Lunch from './pages/Home/Lunch/Lunch';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Header from './pages/Shared/Header/Header';
import FoodMenu from './pages/Home/FoodMenu/FoodMenu';
import Breakfast from './pages/Home/Breakfast/Breakfast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/foodmenu' element={<FoodMenu />}>
            <Route path='/foodmenu/breakfast' element={<Breakfast />} />
            <Route path='/foodmenu/dinner' element={<Dinner />} />
            <Route path='/foodmenu/lunch' element={<Lunch />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
