import Vue from 'vue';
import LoginComponent from "../src/components/Login.vue"
import UtilitariosComponent from "../src/components/Utilitarios.vue"

Vue.createApp({
    components: {
        LoginComponent,
        UtilitariosComponent 
    }
}).mount('#app')
