import Footer from './components/Footer.js';
import Login from './components/Login.js';
import ProjectList from './components/ProjectList.js';
import { Route, Routes } from 'react-router-dom';


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
          <Route path="/" exact={true} element={<Login setToken={setToken} getToken={getToken}/>} />
          <Route path="/login" exact={true} element={<Login setToken={setToken} getToken={getToken}/>} />
        </Routes>
        <Footer />
      </div>
    );


  }

  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Login setToken={setToken} getToken={getToken}/>} />
        <Route path="/home" exact={true} element={<ProjectList />} />
        <Route path="/login" exact={true} element={<Login setToken={setToken} getToken={getToken}/>} />
      </Routes>
    </div>
  );
}

export default App;
