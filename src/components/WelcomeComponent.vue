<template>
  <div>
    <h1>Ejemplo y bienvenida</h1>
    <p>Con este componente puedes ver cómo se pasa una cosa cualquiera de un componente a otro a través de los props.</p>
    <p>Y además hace una llamada a la api al crearse, que debería responderte con el saludo de bienvenida:</p>
    <p>{{ saludo || 'No se recibió un saludo.' }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saludo: ''
    };
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3000/api/welcome');
      const data = await response.json();
      this.saludo = data.message;
    } catch (error) {
      console.error('Error al obtener el saludo:', error);
      this.saludo = 'No se pudo obtener el saludo de bienvenida. Intenta de nuevo más tarde.';
    }
  }
}
</script>

<style scoped>
.welcome-component {
  padding: 10px;
  border: black 2px solid;
}

.hi {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
