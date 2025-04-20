<template>
  <div class="app-container">
    <div v-if="currentView === 'login'">
      <Login @switch-to-register="switchToRegister" @login-success="handleLoginSuccess" />
    </div>
    <div v-else-if="currentView === 'register'">
      <Register @switch-to-login="switchToLogin" @register-success="handleRegisterSuccess" />
    </div>
    <div v-else>
      <Home :user-email="userEmail" @logout="logout" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'

export default {
  components: {
    Login,
    Register,
    Home
  },
  setup() {
    const currentView = ref('login')
    const userEmail = ref('')

    const switchToRegister = () => {
      currentView.value = 'register'
    }

    const switchToLogin = () => {
      currentView.value = 'login'
    }

    const handleLoginSuccess = (email) => {
      userEmail.value = email
      currentView.value = 'home'
    }

    const handleRegisterSuccess = (email) => {
      userEmail.value = email
      currentView.value = 'home'
    }

    const logout = () => {
      userEmail.value = ''
      currentView.value = 'login'
    }

    return {
      currentView,
      userEmail,
      switchToRegister,
      switchToLogin,
      handleLoginSuccess,
      handleRegisterSuccess,
      logout
    }
  }
}
</script>

<style>
:root {
  /* Azules */
  --primary-blue: #1a237e;
  --dark-blue: #0d1440;
  --light-blue: #534bae;
  --accent-blue: #00b0ff;
  --bright-blue: #40c4ff;
  
  /* Negros y grises */
  --black: #121212;
  --dark-gray: #1e1e1e;
  --medium-gray: #2a2a2a;
  --light-gray: #f5f5f5;
  
  /* Éxito y errores */
  --success: #4caf50;
  --error: #f44336;
  --warning: #ff9800;
}
/* Mantén los estilos anteriores */
</style>

