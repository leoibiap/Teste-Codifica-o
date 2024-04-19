<template>
    <div class="UtilitariosComponent">
      <div class="util-container">
      <img src="../assets/Group 340.png" >
      <img src="../assets/Group 784.png" alt="barra lateral" class="barra-lateral">
      <img src="../assets/Group 860.png" alt="barra cima" class="barra-cima">
      <img src="../assets/Group 877.png" alt="botoes utilitarios" class="botoes-utilitarios">
      
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UtilitariosComponent'
  };
  </script>
  
  <style scoped>

  .util-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .barra-lateral{
    position: relative;
  }
 </style>
  