import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SurveyCard from '../components/SurveyCard';
import SupportQuestion from '../components/SupportQuestion';

const Dashboard = ({ user }) => {  // Cambiamos userName por user
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      padding: '20px',
      color: '#e0e0e0'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#1e1e1e',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        border: '1px solid #333'
      }}>
        {/* Mostramos user.name en lugar de userName */}
        <Header title={`Hola, ${user?.name || 'Usuario'}`} darkMode />
        
        <p style={{
          lineHeight: '1.6',
          marginBottom: '25px',
          fontSize: '16px',
          color: '#b0b0b0'
        }}>
          Bienvenido a Encuestas360 el mejor sitio web de encuestas en el mundo.
        </p>
        
        {/* Resto del código permanece igual */}
        <hr style={{
          border: 'none',
          height: '1px',
          background: 'linear-gradient(to right, transparent, #333, transparent)',
          margin: '25px 0'
        }} />
        
        <SurveyCard 
          title="Nueva Encuesta" 
          surveyTitle="Encuesta de Satisfacción"
          onClick={() => navigate('/survey/1')} 
          darkMode
        />
        
        <SupportQuestion 
          question="¿Tener rutin posibles?" 
          option="Reconcha un Problema"
          onClick={() => navigate('/support')}
          darkMode
        />
        
        <div style={{ marginTop: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            marginBottom: '15px',
            fontWeight: '600',
            color: '#ffffff'
          }}>Historial de Encuestas</h2>
          <button 
            onClick={() => navigate('/surveys')}
            style={{
              background: 'none',
              border: 'none',
              color: '#3a7bd5',
              padding: 0,
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
            <span style={{
              display: 'inline-block',
              width: '18px',
              height: '18px',
              border: '2px solid #3a7bd5',
              borderRadius: '4px',
              marginRight: '10px'
            }}></span>
            Ver indicado
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;