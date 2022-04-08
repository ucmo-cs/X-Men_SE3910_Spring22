import Footer from './components/Footer.js';
import Header from './components/Header.js';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
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
