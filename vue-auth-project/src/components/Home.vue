<template>
    <div class="survey-app">
      <!-- Header -->
      <header class="survey-header">
        <div class="header-content">
          <h1>Hola, {{ userName }}</h1>
          <button @click="logout" class="logout-btn">
            <i class="fas fa-sign-out-alt"></i> Cerrar sesión
          </button>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="survey-main">
        <!-- Welcome Section -->
        <section class="welcome-section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus odio vel sagittis finibus. Donec eu dolor et urna vulputate congue sit amet at purus.</p>
        </section>
  
        <!-- Divider -->
        <div class="divider"></div>
  
        <!-- New Survey Card -->
        <section class="survey-card new-survey">
          <h2>Nueva Encuesta</h2>
          <p class="survey-title">"Encuesta de Satisfacción"</p>
          <button class="survey-btn" @click="startNewSurvey">
            <i class="fas fa-play"></i> Comenzar Encuesta
          </button>
        </section>
  
        <!-- Survey History Card -->
        <section class="survey-card history">
          <h2>Historia de Encuestas</h2>
          <button class="survey-btn" @click="viewHistory">
            <i class="fas fa-history"></i> Ver Historia
          </button>
        </section>
  
        <!-- Support Card -->
        <section class="survey-card support">
          <h2>Soporte</h2>
          <p>¿Tienes algún problema?</p>
          <button class="survey-btn" @click="reportProblem">
            <i class="fas fa-exclamation-circle"></i> Reporta un Problema
          </button>
        </section>
      </main>
  
      <!-- Footer -->
      <footer class="survey-footer">
        <p>Sistema de Encuestas © {{ currentYear }}</p>
      </footer>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    props: {
      userEmail: String
    },
    emits: ['logout'],
    setup(props, { emit }) {
      const currentYear = ref(new Date().getFullYear())
      
      // Extraer el nombre del email (parte antes del @)
      const userName = computed(() => {
        return props.userEmail.split('@')[0] || 'Usuario'
      })
  
      const logout = () => {
        emit('logout')
      }
  
      const startNewSurvey = () => {
        console.log('Iniciando nueva encuesta...')
        // Lógica para comenzar encuesta
      }
  
      const viewHistory = () => {
        console.log('Viendo historial...')
        // Lógica para ver historial
      }
  
      const reportProblem = () => {
        console.log('Reportando problema...')
        // Lógica para reportar problema
      }
  
      return {
        currentYear,
        userName,
        logout,
        startNewSurvey,
        viewHistory,
        reportProblem
      }
    }
  }
  </script>
  
  <style scoped>
  /* Definición de colores */
  :root {
    --primary-blue: #1a237e;
    --dark-blue: #0d1440;
    --light-blue: #534bae;
    --accent-blue: #00b0ff;
    --black: #121212;
    --dark-gray: #1e1e1e;
    --medium-gray: #2a2a2a;
    --light-gray: #f5f5f5;
  }
  
  .survey-app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--black);
    color: white;
  }
  
  .survey-header {
    background: linear-gradient(145deg, var(--primary-blue), var(--dark-blue));
    padding: 1.5rem 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border-bottom: 2px solid var(--accent-blue);
  }
  
  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .survey-header h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .logout-btn {
    padding: 0.6rem 1.2rem;
    background-color: rgba(0, 176, 255, 0.2);
    color: var(--accent-blue);
    border: 1px solid var(--accent-blue);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
  }
  
  .logout-btn:hover {
    background-color: var(--accent-blue);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 176, 255, 0.3);
  }
  
  .survey-main {
    flex: 1;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }
  
  .welcome-section {
    background-color: var(--dark-gray);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    line-height: 1.6;
    border-left: 4px solid var(--light-blue);
  }
  
  .welcome-section p {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--light-blue), transparent);
    margin: 2rem 0;
  }
  
  .survey-card {
    background-color: var(--dark-gray);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    border-top: 2px solid var(--light-blue);
  }
  
  .survey-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .survey-card h2 {
    color: var(--accent-blue);
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
  
  .survey-title {
    color: var(--light-gray);
    font-style: italic;
    margin: 1rem 0;
    font-size: 1.1rem;
  }
  
  .survey-btn {
    padding: 0.8rem 1.5rem;
    background-color: var(--accent-blue);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .survey-btn:hover {
    background-color: #0091ea;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 176, 255, 0.3);
  }
  
  .survey-footer {
    background-color: var(--dark-blue);
    padding: 1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-top: auto;
    border-top: 1px solid var(--primary-blue);
  }
  
  /* Iconos */
  .fas {
    font-size: 0.9rem;
  }
  
  /* Efectos adicionales para resaltar colores */
  .new-survey {
    border-top-color: #4CAF50; /* Verde para nueva encuesta */
  }
  
  .history {
    border-top-color: #FFC107; /* Amarillo para historial */
  }
  
  .support {
    border-top-color: #F44336; /* Rojo para soporte */
  }
  </style>