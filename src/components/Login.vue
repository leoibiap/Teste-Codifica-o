<template>
    <div id="app">
      <div class="login-container">
        <img src="../assets/Frame6.png" alt="imagem 6" class="frame6">
        <img src="../assets/Group876.png" alt="imagem esquerda" class="imagem-esquerda">
        <img src="../assets/Frame865.png" alt="login image" class="imagem-login">
        <img src="../assets/image4.png" alt="rodape imagem" class="footer-image">
        <label for="email" class="hidden-label">Email</label>
        <input type="text" id="email" class="input-email" placeholder="" @keypress="handleKeyPress">
        <label for="senha" class="hidden-label">Senha</label>
        <input type="password" id="senha" class="input-senha" placeholder="" @keypress="handleKeyPress">
    <button class="btn-entrar">entrar</button>
    <button class="btn-esqueci-senha">Esqueceu a senha?</button>
     <p v-if="error === 'empty'" class="error-message">Preencha todos os campos!</p>
      <p v-else-if="error === 'incorrect'" class="error-message">Email ou senha incorretos!</p>
      <button id="btn-entrar" class="btn-entrar" @click="login">Entrar</button>
  </div>
  </div>
  </template>
  
  <script>
import { useRouter } from 'vue-router';
import axios from './plugins/axios';

  export default {
    name: 'LoginComponent',
    data() {
      return {
        form:{
          email: '',
          password: '',
        },
        error: false,
        errorMessage:'',
      };
    },
    methods: {
    async login() { 
      try {
        if (!this.form.email || !this.form.password) {
          this.error = true;
          this.errorMessage = 'É obrigatório preencher todos os campos.';
          const router = useRouter();
          router.push('/utilitarios');
          return;
         
        }
        const response = await axios.post('https://api-manager-test.infog2.com.br.infog2.com.br/', this.form);
        console.log('Usuário autenticado:', response.data);
        this.error = '';

      } catch (error) {
        console.error('Erro ao fazer login:', error);
       if (error.response.status === 401) {
        this.error = 'incorrect';

       } else {
        this.error = 'unknown';
       } 
    }
    }
  }
  };

  </script>
  
  <style scoped>
  .frame6{
    position: absolute;
  top: 0;
  right: 0;
  width: auto; 
  height: auto;
  }

  .error-message{
    color: red;
  }


  .login-container {
    position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 98vw;
  height: 97vh;
  background: linear-gradient(to bottom, rgba(233, 238, 242, 1), rgba(255, 255, 255, 1));
  }

  .imagem-esquerda{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 55%;
    height: 100%;
    object-fit: cover;
  }

  .imagem-login{
    display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 36px;
  padding: 146px 117px 282px 880px;
}

.footer-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45%; 
  height: auto;
  transform: translateY(0); 
}

.input-email {
  position: absolute;
  top: 38%;
  left: 76%;
  transform: translate(-50%, -50%);
  width: 365px; 
  height: 23px; 
  padding: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  color: transparent;
  background-color: transparent;
  caret-color: black;
  color: black;
}

.input-senha {
  position: absolute;
  top: calc(47% + 24px); 
  left: 76%;
  transform: translate(-50%, -50%);
  width: 365px; 
  height: 23px; 
  padding: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  color: transparent;
  background-color: transparent;
  caret-color: black;
  color: black;
}

.btn-entrar {
  position: absolute;
  top: calc(50% + 78px); 
  left: 84%;
  transform: translate(-50%, -50%);
  padding: 16px 55px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  pointer-events: auto;
}

.btn-esqueci-senha {
  position: absolute;
  top: calc(45% + 118px);
  left: 68%;
  font-size: 17px;
  transform: translate(-50%, -50%);
  padding: 5px;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  pointer-events: auto;
}

.hidden-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  </style>
  