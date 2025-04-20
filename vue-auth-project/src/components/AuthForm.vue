<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2 class="auth-title">{{ title }}</h2>
      <form @submit.prevent="handleSubmit" class="auth-form">
        <slot></slot>
        <button type="submit" class="auth-button">{{ buttonText }}</button>
      </form>
      <p class="auth-switch">
        {{ switchText }}
        <a href="#" @click.prevent="handleSwitch">{{ switchActionText }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    buttonText: String,
    switchText: String,
    switchActionText: String
  },
  emits: ['submit', 'switch'],
  setup(props, { emit }) {
    const handleSubmit = () => {
      emit('submit')
    }

    const handleSwitch = () => {
      emit('switch')
    }

    return {
      handleSubmit,
      handleSwitch
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--black);
}

.auth-card {
  background: linear-gradient(145deg, var(--dark-blue), var(--primary-blue));
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease;
}

.auth-card:hover {
  transform: translateY(-5px);
}

.auth-title {
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.auth-button {
  padding: 0.8rem;
  background-color: var(--accent-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.auth-button:hover {
  background-color: #0091ea;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 176, 255, 0.3);
}

.auth-switch {
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.auth-switch a {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.auth-switch a:hover {
  color: #40c4ff;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
}

.input-field {
  padding: 0.8rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--accent-blue);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 2px rgba(0, 176, 255, 0.2);
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
</style>