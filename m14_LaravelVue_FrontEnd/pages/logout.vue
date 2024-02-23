<template>
  <div>Logging Out...</div>
</template>
<script setup lang="ts">

const {logout} = useAuth()
logout()
</script>
