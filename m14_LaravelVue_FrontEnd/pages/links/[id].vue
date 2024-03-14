<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Update Link" @submit="handleUpdate">
    <FormKit type="text" name="short_link" label="short_link" v-model="link.short_link" />
    <FormKit type="url" name="full_link" label="full_link" v-model="link.full_link" />
  </FormKit>
</template>
<script setup lang="ts">
import { InvalidForm, Link } from '~~/types';
import type { FormKitNode } from "@formkit/core"

definePageMeta({
  middleware: ['auth']
})
const route = useRoute();

const { link, find, update } = useLinks()
await find(Number(route.params.id));
async function handleUpdate(payload: Partial<Link>, node?: FormKitNode) {
  try {
    await update(Number(route.params.id), payload);
  } catch (err) {
    InvalidForm(err, node)
  }
}

</script>
