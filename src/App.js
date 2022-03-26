import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/"  exact={true} element={<LoginPage />} />
        <Route path="/home" exact={true} element={<MainPage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
