import Footer from './components/Footer.js';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<LoginPage />} />
        <Route path="/home" exact={true} element={<MainPage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
