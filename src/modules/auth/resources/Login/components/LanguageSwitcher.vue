<script setup lang="ts">
const availableLocales = ['pt-BR', 'en', 'es'];
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <button 
      v-for="lang in availableLocales" 
      :key="lang"
      @click="$i18n.locale = lang"
      class="px-2 py-1 text-[10px] uppercase font-bold rounded border transition-colors"
      :class="$i18n.locale === lang ? 'bg-blue-600 text-white border-blue-500' : 'text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:border-slate-500'"
    >
      {{ lang.split('-')[0] }}
    </button>
  </div>
</template>
