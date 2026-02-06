# Snippet: Thin View (LEDS)

`src/modules/<modulo>/resources/Pessoas/view/ListPessoas.vue`
```vue
<script setup lang="ts">
import { usePessoasPage } from '../composables/usePessoasPage'
const { loading, error, pessoas, reload } = usePessoasPage()
</script>

<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">
      <p>{{ error }}</p>
      <button @click="reload">Tentar novamente</button>
    </div>
    <div v-else>
      <ul>
        <li v-for="p in pessoas" :key="p.id">{{ p.nome }}</li>
      </ul>
    </div>
  </div>
</template>
```
