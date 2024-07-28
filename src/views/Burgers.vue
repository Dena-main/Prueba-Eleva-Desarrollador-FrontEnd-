<template>
  <div>
    <h1>Lista de Hamburguesas</h1>
    <ul>
      <p v-if="error" class="error-message">{{ error }}</p>
      <li v-for="hamburguesa in hamburguesas" :key="hamburguesa.id">
        <router-link :to="`/hamburguesa/${hamburguesa.id}`">
          {{ hamburguesa.nombre }} - {{ hamburguesa.calorias }} calorías
        </router-link>
        <button @click="confirmDelete(hamburguesa.id)">Borrar</button>
      </li>
    </ul>
    <button @click="showCreateBurger">Crear Nueva Hamburguesa</button>
  </div>
</template>

<script>
export default {
  name: 'Burgers',
  data() {
    return {
      hamburguesas: [],
      error: null
    }
  },
  mounted() {
    this.fetchHamburguesas();
  },
  methods: {
    async fetchHamburguesas() {
      try {
        const response = await fetch('https://hamburguesas-back.elevadev.cl/burger/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.hamburguesas = Array.isArray(data) ? data : [];
      } catch (error) {
        this.error = 'No se pudieron obtener las hamburguesas. Intenta de nuevo más tarde.';
      }
    },
    showCreateBurger() {
      this.$router.push({ name: 'CreateBurger' });
    },
    confirmDelete(id) {
      if (confirm('¿Estás seguro de que quieres borrar esta hamburguesa?')) {
        this.deleteBurger(id);
      }
    },
    async deleteBurger(id) {
      try {
        const response = await fetch(`https://hamburguesas-back.elevadev.cl/burger/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Actualiza la lista de hamburguesas después de eliminar una
        this.fetchHamburguesas();
      } catch (error) {
        console.error('Error borrando hamburguesa:', error);
        this.error = 'No se pudo borrar la hamburguesa. Intenta de nuevo más tarde.';
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: list-item;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px;
}

button {
  margin-left: 10px;
}

h1 {
  margin-bottom: 20px;
}

.error-message {
  color: red;
}
</style>


