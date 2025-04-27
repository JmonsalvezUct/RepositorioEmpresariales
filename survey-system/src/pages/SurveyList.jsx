import { useNavigate } from 'react-router-dom';

const SurveyList = () => {
  const navigate = useNavigate();

  // Datos de ejemplo para las encuestas
  const surveys = [
    {
      id: 1,
      title: "Valora tu experiencia con nuestro servicio",
      description: "Encuesta de satisfacción general"
    },
    {
      id: 2,
      title: "Opinión sobre nuestro nuevo producto",
      description: "Feedback sobre el lanzamiento"
    },
    {
      id: 3,
      title: "Cómo calificarías nuestro último evento",
      description: "Evaluación de actividades"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a', // Negro ligeramente más claro
      padding: '40px 20px',
      color: '#e0e0e0'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a', // Fondo de tarjeta más claro
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '28px',
          marginBottom: '30px',
          fontWeight: '600',
          textAlign: 'center'
        }}>Historial de Encuestas</h1>

        <div style={{ display: 'grid', gap: '20px' }}>
          {surveys.map((survey) => (
            <div 
              key={survey.id}
              style={{
                backgroundColor: '#252525',
                borderRadius: '10px',
                padding: '25px',
                borderLeft: '4px solid #3a7bd5',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'translateY(-3px)'
                }
              }}
            >
              <h2 style={{
                color: '#ffffff',
                fontSize: '20px',
                marginBottom: '10px'
              }}>{survey.title}</h2>
              <p style={{
                color: '#ffffff',
                marginBottom: '20px',
                fontSize: '15px'
              }}>{survey.description}</p>
              <button
                onClick={() => navigate(`/survey/${survey.id}`)}
                style={{
                  backgroundColor: '#3a7bd5',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  ':hover': {
                    backgroundColor: '#2c5fb3'
                  }
                }}
              >
                Responder Encuesta
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyList;