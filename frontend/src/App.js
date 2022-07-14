import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Uploadnotes from './components/uploadnotes/Uploadnotes';
import Subjectreport from './components/subjectreport/Subjectreport';
import Studentreport from './components/studentreport/Studentreport';
import VerifyAuthentication from './components/verifyauthentication/VerifyAuthentication';
import Uploadplan from './components/uploadnotes/Uploadplan';
import Seeplan from './components/uploadnotes/Seeplan';
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
          <Route path="/subjectreport" element={ 
            <VerifyAuthentication>
              <Subjectreport /> 
            </VerifyAuthentication>
          } />
          <Route path="/studentreport" element={ 
            <VerifyAuthentication>
              <Studentreport /> 
            </VerifyAuthentication>
          } />
          <Route path="/uploadplan" element={ 
            <VerifyAuthentication>
              <Uploadplan /> 
            </VerifyAuthentication>
          } />
          <Route path="/seeplan" element={ 
            <VerifyAuthentication>
              <Seeplan /> 
            </VerifyAuthentication>
          } />
          <Route path="*" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
