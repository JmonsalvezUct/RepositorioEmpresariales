<template>
  <div class="register-container">
    <div class="register-card">
      <div class="register-header">
        <h1>Crear Cuenta</h1>
        <div class="blue-divider"></div>
      </div>

      <form @submit.prevent="register" class="register-form">
        <div class="input-group">
          <label>Nombre Completo</label>
          <input 
            v-model="name"
            type="text"
            placeholder="Tu Nombre"
            class="blue-input"
            required
          />
        </div>

        <div class="input-group">
          <label>Correo Electrónico</label>
          <input
            v-model="email"
            type="email"
            placeholder="tu@email.com"
            class="blue-input"
            required
          />
        </div>

        <div class="input-group">
          <label>Contraseña</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="blue-input"
            required
          />
        </div>

        <div class="input-group">
          <label>Confirmar Contraseña</label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="••••••••"
            class="blue-input"
            required
          />
        </div>

        <div class="terms-group">
          <input 
            type="checkbox" 
            id="terms" 
            v-model="agreeTerms"
            required
          />
          <label for="terms">Acepto los términos y condiciones</label>
        </div>

        <button type="submit" class="register-button">
          Registrar Cuenta
        </button>
      </form>

      <div class="login-link">
        ¿Ya tienes cuenta? <a @click.prevent="$emit('switch-to-login')">Inicia Sesión</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['switch-to-login', 'register-success'],
  setup(props, { emit }) {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const agreeTerms = ref(false)

    const register = () => {
      if (password.value !== confirmPassword.value) {
        alert('Las contraseñas no coinciden')
        return
      }
      
      emit('register-success', {
        name: name.value,
        email: email.value
      })
    }

    return {
      name,
      email,
      password,
      confirmPassword,
      agreeTerms,
      register
    }
  }
}
</script>

<style scoped>
/* Colores principales */
:root {
  --primary-blue: #2563eb;
  --dark-blue: #1e40af;
  --light-blue: #93c5fd;
  --black: #0f172a;
  --dark-gray: #1e293b;
  --medium-gray: #334155;
  --white: #f8fafc;
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--black) 0%, var(--dark-blue) 100%);
  padding: 20px;
}

.register-card {
  width: 100%;
  max-width: 450px;
  background-color: var(--dark-gray);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  padding: 2.5rem;
  border: 1px solid var(--primary-blue);
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

.register-header h1 {
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.blue-divider {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--primary-blue), transparent);
  margin: 0 auto;
  width: 80%;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  color: var(--light-blue);
  font-weight: 500;
  font-size: 0.95rem;
}

.blue-input {
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--medium-gray);
  border-radius: 8px;
  color: var(--white);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.blue-input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
}

.blue-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.terms-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.terms-group input {
  accent-color: var(--primary-blue);
}

.terms-group label {
  color: var(--white);
  font-size: 0.9rem;
  cursor: pointer;
}

.register-button {
  padding: 14px;
  background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.register-button:hover {
  background: linear-gradient(135deg, var(--dark-blue), var(--primary-blue));
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
}

.login-link {
  text-align: center;
  margin-top: 1.5rem;
  color: var(--white);
  font-size: 0.9rem;
}

.login-link a {
  color: var(--light-blue);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
}

.login-link a:hover {
  color: var(--primary-blue);
  text-decoration: underline;
}
</style>