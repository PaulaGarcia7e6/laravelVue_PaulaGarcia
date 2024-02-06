<template>
  <div>Logging Out...</div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

async function logout() {
  try {
    await axios.post('/logout');
    console.log('test')
    router.replace('/login');
  } catch (error) {
    console.error('Error al realizar el logout:', error);
  }
}
logout()
</script>
