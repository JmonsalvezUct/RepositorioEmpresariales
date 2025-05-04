import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from './firebase';

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    if (!email || !password || !username) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Usuario registrado con éxito
      setUser({ 
        name: username,
        email: userCredential.user.email,
        uid: userCredential.user.uid
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al registrar:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Regístrate</h1>
        <p style={styles.subtitle}>Crea una nueva cuenta</p>
        
        {error && <p style={styles.error}>{error}</p>}
        
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Correo Electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Ej: usuario@correo.com"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Nombre de Usuario</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Ej: pepito123"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••"
              required
              minLength="6"
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirmar Contraseña</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••"
              required
              minLength="6"
            />
          </div>
          
          <button 
            type="submit" 
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
              <span style={styles.loader}></span>
            ) : 'Registrarse'}
          </button>
        </form>
        
        <p style={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="/" style={styles.link}>Inicia sesión</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#0f0f0f',
      padding: '20px'
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#1a1a1a',
      borderRadius: '12px',
      padding: '40px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
      border: '1px solid #333'
    },
    title: {
      color: '#fff',
      fontSize: '28px',
      fontWeight: '600',
      marginBottom: '8px',
      textAlign: 'center'
    },
    subtitle: {
      color: '#aaa',
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '30px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      color: '#ddd',
      fontSize: '14px',
      fontWeight: '500'
    },
    input: {
      padding: '14px',
      borderRadius: '8px',
      border: '1px solid #333',
      backgroundColor: '#222',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
      transition: 'border 0.3s',
      ':focus': {
        borderColor: '#3a7bd5'
      }
    },
    button: {
      padding: '14px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#3a7bd5',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '46px',
      transition: 'background-color 0.3s',
      ':hover': {
        backgroundColor: '#2c5fb3'
      },
      ':disabled': {
        backgroundColor: '#2c5fb3',
        cursor: 'not-allowed'
      }
    },
    loader: {
      border: '3px solid rgba(255, 255, 255, 0.2)',
      borderTop: '3px solid white',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      animation: 'spin 1s linear infinite'
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    }
  };
  

export default Register;