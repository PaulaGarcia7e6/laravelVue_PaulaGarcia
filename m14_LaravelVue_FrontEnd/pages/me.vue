<template>
  <p><strong>User Name:</strong> {{user.name}}</p>
  <p><strong>User Email:</strong> {{user.email}}</p>
</template>
<script script lang="ts">
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
    user = await axios.get('/user' )
    console.log(user)
  } catch(error){
    console.log(error)
  }
}
onBeforeMount(async()=>{
  await userData()
})
</script>
