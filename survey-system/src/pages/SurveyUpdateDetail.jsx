import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

const SurveyUpdateDetail = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const docRef = await addDoc(collection(db, 'surveyResponses'), {
        surveyId: 3, 
        rating,
        recommendation,
        createdAt: Timestamp.now()
      });
      console.log('🆗 Documento guardado con ID:', docRef.id);
      alert('✅ ¡Respuesta enviada con éxito!');
      navigate('/Dashboard');
    } catch (err) {
      console.error('❌ Error guardando respuesta:', err);
      setError('Ocurrió un error al enviar tu respuesta. Intenta de nuevo.');
    }
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
        }}>Cómo calificarías nuestra última actualización</h1>

        <form onSubmit={handleSubmit}>
          {/* Calificación */}
          <div style={{ marginBottom: '30px' }}>
            <p style={{
              color: '#ffffff',
              fontSize: '18px',
              marginBottom: '20px',
              fontWeight: '500'
            }}>¿Qué tan satisfactoria fue la última actualización?</p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
              {[1,2,3,4,5].map(num => (
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
            <span style={{ color: '#b0b0b0', fontWeight: '400' }}>
              1 = Muy insatisfecho, 5 = Muy satisfecho
            </span>
          </div>

          {/* Recomendación */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{
              color: '#ffffff',
              fontSize: '18px',
              marginBottom: '20px',
              fontWeight: '500'
            }}>¿Recomendarías la nueva versión a otros usuarios?</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['yes','no'].map(opt => (
                <div
                  key={opt}
                  onClick={() => setRecommendation(opt)}
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: recommendation === opt ? '#3a7bd5' : '#333333',
                    marginRight: '10px',
                    border: recommendation === opt ? '2px solid #ffffff' : 'none'
                  }} />
                  <span style={{
                    color: recommendation === opt ? '#ffffff' : '#b0b0b0',
                    fontWeight: recommendation === opt ? '600' : '400'
                  }}>
                    {opt === 'yes' ? 'Sí' : 'No'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <hr style={{
            border: 'none',
            height: '1px',
            background: '#333333',
            margin: '30px 0'
          }} />

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
              transition: 'all 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#2c5fb3'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#3a7bd5'}
          >
            Enviar Respuestas
          </button>
        </form>
      </div>
          {error && (
          <p style={{ color: '#ff4d4f', marginTop: '20px', textAlign: 'center' }}>
            {error}
          </p>
        )}
    </div>
  );
};

export default SurveyUpdateDetail;
