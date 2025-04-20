<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2>Iniciar Sesión</h2>
        <div class="logo">
          <i class="fas fa-poll"></i>
        </div>
      </div>
      
      <form @submit.prevent="login" class="auth-form">
        <div class="input-group">
          <label for="email" class="input-label">
            <i class="fas fa-envelope"></i> Correo Electrónico
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="input-field"
            placeholder="tu@email.com"
            required
          />
        </div>
        
        <div class="input-group">
          <label for="password" class="input-label">
            <i class="fas fa-lock"></i> Contraseña
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="input-field"
            placeholder="••••••••"
            required
          />
        </div>
        
        <button type="submit" class="auth-button">
          <i class="fas fa-sign-in-alt"></i> Ingresar
        </button>
      </form>
      
      <div class="auth-footer">
        <p>¿No tienes cuenta? <a href="#" @click.prevent="$emit('switch-to-register')">Regístrate</a></p>
        <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['switch-to-register', 'login-success'],
  setup(props, { emit }) {
    const email = ref('')
    const password = ref('')

    const login = () => {
      // Validación simple
      if (!email.value || !password.value) {
        alert('Por favor completa todos los campos')
        return
      }
      
      emit('login-success', email.value)
    }

    return {
      email,
      password,
      login
    }
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--dark-blue) 0%, var(--black) 100%);
  padding: 20px;
}

.auth-card {
  width: 100%;
  max-width: 450px;
  background: var(--dark-gray);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border: 1px solid rgba(0, 176, 255, 0.1);
}

.auth-header {
  background: linear-gradient(90deg, var(--primary-blue), var(--light-blue));
  padding: 2rem;
  text-align: center;
  color: white;
  position: relative;
}

.auth-header h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.logo {
  position: absolute;
  top: -25px;
  right: 20px;
  background: var(--accent-blue);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.logo i {
  font-size: 1.5rem;
}

.auth-form {
  padding: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-blue);
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.input-label i {
  font-size: 0.9rem;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 176, 255, 0.3);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 3px rgba(0, 176, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.auth-button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, var(--accent-blue), #0091ea);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.auth-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 176, 255, 0.4);
}

.auth-footer {
  padding: 0 2rem 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.auth-footer a {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.auth-footer a:hover {
  color: #40c4ff;
  text-decoration: underline;
}

.forgot-password {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
}
</style>