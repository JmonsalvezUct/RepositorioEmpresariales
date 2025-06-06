import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SurveyDetail from './pages/SurveyDetail';
import Support from './pages/Support';
import SurveyList from './pages/SurveyList';
import SurveyQualityDetail from './pages/SurveyQualityDetail';
import SurveyUpdateDetail from './pages/SurveyUpdateDetail';


function App() {
  const [user, setUser] = useState(null); // Ahora inicia como null

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard userName={user.name} /> : <Login setUser={setUser} />} 
        />
        <Route path="/survey/:id" element={<SurveyDetail />} />
        <Route path="/support" element={<Support />} />
        <Route path="/surveys" element={<SurveyList />} />
        <Route path="/survey/2" element={<SurveyQualityDetail />} />
        <Route path="/survey/3" element={<SurveyUpdateDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;