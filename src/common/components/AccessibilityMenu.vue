<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isHighContrast = ref(false);
const fontSizeLevel = ref(0); // 0 = normal, 1 = large, 2 = extra large
const isDark = ref(false);
const isOpen = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const toggleHighContrast = () => {
  isHighContrast.value = !isHighContrast.value;
  if (isHighContrast.value) {
    document.documentElement.classList.add('high-contrast');
  } else {
    document.documentElement.classList.remove('high-contrast');
  }
};

const cycleFontSize = () => {
  fontSizeLevel.value = (fontSizeLevel.value + 1) % 3;
  
  // Reset classes
  document.documentElement.classList.remove('text-lg', 'text-xl');
  
  if (fontSizeLevel.value === 1) {
    document.documentElement.classList.add('text-lg');
  } else if (fontSizeLevel.value === 2) {
    document.documentElement.classList.add('text-xl');
  }
};

onMounted(() => {
  // Check system preference for theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <div class="fixed top-4 right-4 z-50">
    <!-- Mobile/Desktop Toggle Button -->
    <UButton
      icon="i-heroicons-eye"
      color="white"
      variant="solid"
      size="xl"
      aria-label="Menu de Acessibilidade"
      class="rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 w-12 h-12 flex items-center justify-center bg-blue-600 text-white"
      @click="isOpen = !isOpen"
    />

    <!-- Menu Content -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 space-y-2"
        role="dialog"
        aria-label="Opções de Acessibilidade"
      >
        <!-- High Contrast -->
        <button
          class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left"
          @click="toggleHighContrast"
        >
          <UIcon 
            name="i-heroicons-sun" 
            class="w-5 h-5" 
            :class="isHighContrast ? 'text-yellow-500' : 'text-slate-500'" 
          />
          <span class="text-sm font-medium text-slate-700 dark:text-slate-200">
            Alto Contraste
          </span>
        </button>

        <!-- Theme Toggle -->
        <button
          class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left"
          @click="toggleTheme"
        >
          <UIcon 
            :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
            class="w-5 h-5 text-slate-500" 
          />
          <span class="text-sm font-medium text-slate-700 dark:text-slate-200">
            {{ isDark ? 'Modo Claro' : 'Modo Escuro' }}
          </span>
        </button>

        <!-- Font Size -->
        <button
          class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-left"
          @click="cycleFontSize"
        >
          <UIcon name="i-heroicons-magnifying-glass-plus" class="w-5 h-5 text-slate-500" />
          <span class="text-sm font-medium text-slate-700 dark:text-slate-200">
            Fonte: {{ fontSizeLevel === 0 ? 'Normal' : fontSizeLevel === 1 ? 'Grande' : 'Extra' }}
          </span>
        </button>
      </div>
    </transition>
  </div>
</template>

<style>
/* High Contrast Global Overrides */
html.high-contrast {
  filter: contrast(1.5);
}

html.high-contrast body {
  background-color: white !important;
  color: black !important;
}

html.dark.high-contrast body {
  background-color: black !important;
  color: white !important;
}

html.high-contrast button {
  border: 2px solid currentColor !important;
}
</style>
