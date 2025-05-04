import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from './firebase';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor ingresa email y contraseña');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Usuario autenticado con éxito
      setUser({ 
        email: userCredential.user.email,
        uid: userCredential.user.uid
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Bienvenido</h1>
        <p style={styles.subtitle}>Ingresa tus credenciales</p>
        
        {error && <p style={styles.error}>{error}</p>}
        
        <form onSubmit={handleLogin} style={styles.form}>
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
            <label htmlFor="password" style={styles.label}>Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
              <span style={styles.loader}></span>
            ) : 'Ingresar'}
          </button>
        </form>
        
        <p style={styles.registerLink}>
          ¿No tienes una cuenta? <a href="/register" style={styles.link}>Regístrate</a>
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
  },
  error: {
    color: '#ff4d4d',
    backgroundColor: 'rgba(255, 77, 77, 0.1)',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  registerLink: {
    color: '#aaa',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '20px'
  },
  link: {
    color: '#3a7bd5',
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
      textDecoration: 'underline'
    }
  }
};

export default Login;