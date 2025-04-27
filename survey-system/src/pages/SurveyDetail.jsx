import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SurveyDetail = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar las respuestas
    navigate('/gracias'); // Redirige después de enviar
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      padding: '40px 20px',
      color: '#e0e0e0'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a',
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
        }}>Encuesta de Satisfacción</h1>

        <form onSubmit={handleSubmit}>
          {/* Pregunta de calificación */}
          <div style={{ marginBottom: '30px' }}>
            <p style={{
              color: '#ffffff',
              fontSize: '18px',
              marginBottom: '20px',
              fontWeight: '500'
            }}>¿Cómo calificarías nuestro servicio?</p>
            
            <div style={{ 
              display: 'flex', 
              gap: '10px',
              marginBottom: '30px'
            }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <div 
                  key={num}
                  onClick={() => setRating(num)}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: rating >= num ? '#3a7bd5' : '#333333',
                    cursor: 'pointer',
                    border: rating === num ? '2px solid #ffffff' : 'none'
                  }}
                />
              ))}
            </div>
            <span style={{
                  color: recommendation === 'yes' ? '#ffffff' : '#b0b0b0',
                  fontWeight: recommendation === 'yes' ? '600' : '400'
                }}>Siendo 1 Malo y 5 Excelente</span>
          </div>

          {/* Pregunta de recomendación */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{
              color: '#ffffff',
              fontSize: '18px',
              marginBottom: '20px',
              fontWeight: '500'
            }}>¿Recomendarías nuestro servicio a otros?</p>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <div 
                onClick={() => setRecommendation('yes')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: recommendation === 'yes' ? '#3a7bd5' : '#333333',
                  marginRight: '10px',
                  border: recommendation === 'yes' ? '2px solid #ffffff' : 'none'
                }} />
                <span style={{
                  color: recommendation === 'yes' ? '#ffffff' : '#b0b0b0',
                  fontWeight: recommendation === 'yes' ? '600' : '400'
                }}>Sí</span>
              </div>
              
              <div 
                onClick={() => setRecommendation('no')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: recommendation === 'no' ? '#3a7bd5' : '#333333',
                  marginRight: '10px',
                  border: recommendation === 'no' ? '2px solid #ffffff' : 'none'
                }} />
                <span style={{
                  color: recommendation === 'no' ? '#ffffff' : '#b0b0b0',
                  fontWeight: recommendation === 'no' ? '600' : '400'
                }}>No</span>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <hr style={{
            border: 'none',
            height: '1px',
            background: '#333333',
            margin: '30px 0'
          }} />

          {/* Botón de enviar */}
          <button
            type="submit"
            style={{
              backgroundColor: '#3a7bd5',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              width: '100%',
              transition: 'all 0.2s',
              ':hover': {
                backgroundColor: '#2c5fb3'
              }
            }}
          >
            Enviar Respuestas
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurveyDetail;