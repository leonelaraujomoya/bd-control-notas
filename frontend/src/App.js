import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Uploadnotes from './components/uploadnotes/Uploadnotes';
import Reportematerias from './components/reportematerias/Reportematerias';
import Reporteestudiantes from './components/reporteestudiantes/Reporteestudiantes';
import VerifyAuthentication from './components/verifyauthentication/VerifyAuthentication';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={ 
            <VerifyAuthentication>
              <Home /> 
            </VerifyAuthentication>
          } />
          <Route path="/uploadnotes" element={ 
            <VerifyAuthentication>
              <Uploadnotes /> 
            </VerifyAuthentication>
          } />
          <Route path="/reportematerias" element={ 
            <VerifyAuthentication>
              <Reportematerias /> 
            </VerifyAuthentication>
          } />
          <Route path="/reporteestudiantes" element={ 
            <VerifyAuthentication>
              <Reporteestudiantes /> 
            </VerifyAuthentication>
          } />
          <Route path="*" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
