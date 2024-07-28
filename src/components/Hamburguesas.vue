<template>
    <div>
      <h1>Hamburguesas</h1>
      <ul>
        <li v-for="hamburguesa in hamburguesas" :key="hamburguesa.id">
          {{ hamburguesa.nombre }}
          <button @click="verDetalle(hamburguesa)">Ver Detalle</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Hamburguesas',
    data() {
      return {
        hamburguesas: []
      };
    },
    created() {
      this.obtenerHamburguesas();
    },
    methods: {
      async obtenerHamburguesas() {
        try {
          const response = await axios.get('https://hamburguesas-back.elevadev.cl/burger/');
          this.hamburguesas = response.data;
        } catch (error) {
          console.error("Error al obtener hamburguesas:", error);
        }
      },
      verDetalle(hamburguesa) {
        alert(`Detalle de la hamburguesa: ${hamburguesa.nombre}`);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos específicos para este componente */
  </style>
  