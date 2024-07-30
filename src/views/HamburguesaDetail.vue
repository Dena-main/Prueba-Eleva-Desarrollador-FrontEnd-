<template>
    <div v-if="hamburguesa">
      <h1>Detalles de la Hamburguesa</h1>
      <h2>{{ hamburguesa.nombre }}</h2>
      <p><strong>Ingredientes:</strong> {{ hamburguesa.ingredientes.join(', ') }}</p>
      <p><strong>Calorías:</strong> {{ hamburguesa.calorias }}</p>
    </div>
    <div v-else>
      <p>Cargando detalles...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HamburguesaDetail',
    data() {
      return {
        hamburguesa: null
      };
    },
    created() {
      this.fetchHamburguesa();
    },
    methods: {
      async fetchHamburguesa() {
        const id = this.$route.params.id;
        try {
          const response = await axios.get(`https://hamburguesas-back.elevadev.cl/burger/${id}`);
          this.hamburguesa = response.data;
        } catch (error) {
          console.error('Error al obtener los detalles de la hamburguesa:', error);
        }
      }
    }
  };
  </script>
  