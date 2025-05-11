import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase'; // Asegúrate de que este path sea correcto

const Support = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Agrega un documento a la colección "supportRequests"
      const docRef = await addDoc(collection(db, 'supportRequests'), {
        issue: selectedOption === 'problem' ? 'Tiene un problema' : 'Otro',
        message,
        createdAt: Timestamp.now()
      });

      console.log('🆗 Solicitud enviada con ID:', docRef.id);
      alert('✅ ¡Respuesta enviada con éxito!');
      navigate('/Dashboard');
    } catch (err) {
      console.error('❌ Error al enviar solicitud:', err);
      setError('Ocurrió un error al enviar tu solicitud. Intenta de nuevo.');
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
        }}>Soporte Técnico</h1>

        <form onSubmit={handleSubmit}>
          {/* Pregunta de selección */}
          <div style={{ marginBottom: '30px' }}>
            <p style={{
              color: '#ffffff',
              fontSize: '18px',
              marginBottom: '20px',
              fontWeight: '500'
            }}>¿Tienes algún problema con el sistema?</p>
            
            <div 
              onClick={() => setSelectedOption('problem')}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginBottom: '15px'
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                backgroundColor: selectedOption === 'problem' ? '#3a7bd5' : '#333333',
                marginRight: '10px',
                border: selectedOption === 'problem' ? '2px solid #ffffff' : '1px solid #444'
              }} />
              <span style={{
                color: selectedOption === 'problem' ? '#ffffff' : '#b0b0b0',
                fontWeight: selectedOption === 'problem' ? '600' : '400'
              }}>Sí, poseo un problema.</span>
            </div>
          </div>

          {/* Campo de mensaje */}
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="message" style={{
              display: 'block',
              color: '#ffffff',
              fontSize: '18px',
              marginBottom: '15px',
              fontWeight: '500'
            }}>
              Describe tu problema en detalle:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: '100%',
                minHeight: '150px',
                padding: '15px',
                backgroundColor: '#252525',
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '16px',
                resize: 'vertical'
              }}
              required
            />
          </div>

          {/* Muestra error si ocurre */}
          {error && (
            <p style={{ color: 'salmon', marginBottom: '20px', textAlign: 'center' }}>
              {error}
            </p>
          )}

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
              cursor: selectedOption && message ? 'pointer' : 'not-allowed',
              fontSize: '16px',
              fontWeight: '600',
              width: '100%',
              transition: 'all 0.2s'
            }}
            disabled={!selectedOption || !message}
            onMouseOver={e => {
              if (selectedOption && message) e.currentTarget.style.backgroundColor = '#2c5fb3';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = '#3a7bd5';
            }}
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
