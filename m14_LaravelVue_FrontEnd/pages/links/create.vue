<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Link" @submit="createLink">
    <FormKit type="url" name="full_link" label="Link"/>
  </FormKit>
</template>
<script setup lang="ts">
import type {FormKitNode} from "@formkit/core"
import axios from "axios";
import { nanoid } from 'nanoid'
import { InvalidForm, LoginPayload } from "~~/types";

definePageMeta({
  middleware:['auth']
})

async function createLink(payload:LoginPayload,node?:FormKitNode) {
  try {
    await axios.post("/links",{
      ...payload,
      short_link: nanoid(8),
    })
    useRouter().push("/links")
  } catch(err) {
    InvalidForm(err,node)
  }
}
</script>