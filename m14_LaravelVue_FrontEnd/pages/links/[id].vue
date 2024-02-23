<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Update Link">
    <FormKit type="text" name="short_link" label="Short Link"/>
    <FormKit type="Link" name="url" label="full_link"/>
  </FormKit>
</template>
<script setup lang="ts">
definePageMeta({
  middleware:['auth']
})
</script>
