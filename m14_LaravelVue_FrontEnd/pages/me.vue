<template>
  <p><strong>User Name:</strong> {{ user.name }}</p>
  <p><strong>User Email:</strong> {{ user.email }}</p>
</template>
<script setup lang="ts">
import axios from 'axios';
interface User {
  "name": string,
  "email": string,
}
let user:User = reactive({
  name:"",
  email:""
});

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
