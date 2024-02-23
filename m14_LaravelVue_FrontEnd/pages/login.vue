<script setup lang="ts">
import { ref, Ref } from 'vue';
import { ErrorResponse, InvalidForm } from '~~/types';
import { LoginPayload } from '~~/types';
import type {FormKitNode} from "@formkit/core"
import { AxiosError } from 'axios';

definePageMeta({
  layout: "centered",
  middleware: ["guests"],
});
// const form = reactive({
//   email: '',
//   password: '',
// })
const { login } = useAuth();

interface ErrorObject {
  email: string[];
  password: string[];
}
async function handleLogin(payload:LoginPayload,node?:FormKitNode) {
  try {
    await login(payload)
  } catch(err) {
    InvalidForm(err,node)
  }
}
// const errors: Ref<ErrorObject> = ref({
//   email: [],
//   password: []
// });
// async function verificaciologin() {
//   try {
//     await login(form)
//   } catch (err) {
//     console.log('he pasado por aqui', err.response)
//     errors.value = err.response.data.errors
//   }
// }
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <FormKit type="form" submit-label="Login" @submit="handleLogin">
      <FormKit label="Email" name="email" type="email" />
      <FormKit label="Password" name="password" type="password" />
    </FormKit>

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register">Register now!</NuxtLink>
    </p>
  </div>
</template>
