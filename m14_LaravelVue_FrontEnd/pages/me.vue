<template>
  <p><strong>User Name:</strong> {{ user.name }}</p>
  <p><strong>User Email:</strong> {{ user.email }}</p>
</template>
<script setup lang="ts">
import axios from 'axios';
import { useAuth } from '~~/composables/useAuth';
definePageMeta({
  middleware:['auth']
})
interface User {
  "name": string,
  "email": string,
}
let user:User = reactive({
  name:"",
  email:""
});
const auth = useAuth(); // Llamada a useAuth

async function userData() {
  try {
    const response = await axios.get<User>('/user');
    // Asignar los datos del usuario a las propiedades correspondientes
    user.name = response.data.name;
    user.email = response.data.email;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
onBeforeMount(async()=>{
  await userData()
})
</script>
<!-- Arribats a aquest punt podem observar que  cada vegada que faig una petició a una pàgina protegida, 
  estic cridant a initUser, per tant la petició axios es continua fent encara que ja hagi iniciat sessió. 
  Com evitaries això? 
CHATGPT nos recomienda que usemos el cache storege y solo guardemos datos cuando lo necesitemos
-->
