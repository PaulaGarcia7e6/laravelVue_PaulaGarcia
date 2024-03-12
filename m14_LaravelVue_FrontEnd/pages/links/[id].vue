<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Update Link">
    <FormKit type="text" name="short_link" label="Short Link" v-model="link.short_link"/>
    <FormKit type="url" name="url" label="full_link"/>
  </FormKit>
</template>
<script setup lang="ts">
definePageMeta({
  middleware:['auth']
})
const route = useRoute();

const {link,find} = useLinks()
await find(route.params.id as string);

</script>
