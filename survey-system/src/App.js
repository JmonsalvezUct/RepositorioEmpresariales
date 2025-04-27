import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SurveyDetail from './pages/SurveyDetail';
import Support from './pages/Support';
import SurveyList from './pages/SurveyList';

function App() {
  const [user, setUser] = useState(null); // Ahora inicia como null

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard userName={user.name} /> : <Login setUser={setUser} />} 
        />
        <Route path="/survey/:id" element={<SurveyDetail />} />
        <Route path="/support" element={<Support />} />
        <Route path="/surveys" element={<SurveyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;