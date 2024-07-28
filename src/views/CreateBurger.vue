<template>
    <div>
      <h1>Crear Nueva Hamburguesa</h1>
      <form @submit.prevent="crearHamburguesa">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" required>
        </div>
        <div>
          <label for="ingredientes">Ingredientes (separados por comas):</label>
          <input type="text" id="ingredientes" v-model="ingredientes" required>
        </div>
        <div>
          <label for="calorias">Calorías:</label>
          <input type="number" id="calorias" v-model="calorias" required>
        </div>
        <button type="submit">Crear Hamburguesa</button>
      </form>
      <p v-if="mensaje">{{ mensaje }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CreateBurger',
    data() {
      return {
        nombre: '',
        ingredientes: '',
        calorias: '',
        mensaje: ''
      };
    },
    methods: {
      async crearHamburguesa() {
        try {
          const nuevaHamburguesa = {
            nombre: this.nombre,
            ingredientes: this.ingredientes.split(',').map(ingrediente => ingrediente.trim()),
            calorias: parseInt(this.calorias)
          };
          const response = await axios.post('https://hamburguesas-back.elevadev.cl/burger/', nuevaHamburguesa);
          if (response.status === 201) {
            this.mensaje = 'Hamburguesa creada con éxito';
            this.nombre = '';
            this.ingredientes = '';
            this.calorias = '';
          } else {
            this.mensaje = 'Hubo un problema al crear la hamburguesa';
          }
        } catch (error) {
          console.error('Error al crear la hamburguesa:', error);
          this.mensaje = 'Hubo un error al crear la hamburguesa';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos según sea necesario */
  </style>
  