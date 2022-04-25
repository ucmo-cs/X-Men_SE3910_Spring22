import Footer from './components/Footer.js';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {

  const token = getToken();

  if(!token){
   
    return (
      <div>
        <Routes>
          <Route path="/" exact={true} element={<Login setToken={setToken} />} />
          <Route path="/login" exact={true} element={<Login setToken={setToken}/>} />
        </Routes>
        <Footer />
      </div>
    );


  }

  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Login setToken={setToken}/>} />
        <Route path="/home" exact={true} element={<MainPage />} />
        <Route path="/login" exact={true} element={<Login setToken={setToken}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
