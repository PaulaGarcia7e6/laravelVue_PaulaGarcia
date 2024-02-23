<template>
  <p><strong>User Name:</strong> {{ user?.name }}</p>
  <p><strong>User Email:</strong> {{ user?.email }}</p>
</template>
<script setup lang="ts">
import { useAuth } from '~~/composables/useAuth';
definePageMeta({
  middleware:['auth']
})

const {user} = useAuth(); // Llamada a useAuth

</script>
<!-- Arribats a aquest punt podem observar que  cada vegada que faig una petició a una pàgina protegida, 
  estic cridant a initUser, per tant la petició axios es continua fent encara que ja hagi iniciat sessió. 
  Com evitaries això? 
CHATGPT nos recomienda que usemos el cache storege y solo guardemos datos cuando lo necesitemos
-->
