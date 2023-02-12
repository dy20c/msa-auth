<script setup lang="ts">
import { ref } from 'vue'

import axios from "axios";


defineProps<{ msg: string }>()

const count = ref(0)

const get = function() {
  axios.get("http://localhost:9000/welcome", {}).then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
}
</script>

<template>
  <h1>{{ msg }} config</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="get">msg : {{ message }}</button>
  </div>
</template>

<style scoped>
</style>
