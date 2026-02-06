<script setup lang="ts">


interface Role {
  id: string;
  icon: string;
}

const props = defineProps<{
  modelValue: string;
  roles: Role[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="w-full space-y-3 md:space-y-4" role="radiogroup" :aria-label="$t('auth.roles.group_label')">
    <button
      v-for="role in roles"
      :key="role.id"
      type="button"
      role="radio"
      :aria-checked="modelValue === role.id"
      :aria-label="$t('auth.roles.aria_label', { label: $t(`auth.roles.${role.id}`) })"
      class="w-full group relative flex items-center gap-4 md:gap-5 py-3 md:py-4 px-5 md:px-6 rounded-xl transition-all duration-300 font-semibold text-base md:text-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1e293b]"
      :class="[
        modelValue === role.id 
          ? 'bg-blue-600/10 border-blue-500/50 text-blue-400' 
          : 'bg-transparent border-slate-700/50 text-slate-400 hover:border-slate-500 hover:text-slate-300'
      ]"
      @click="emit('update:modelValue', role.id)"
      @keydown.space.prevent="emit('update:modelValue', role.id)"
      @keydown.enter.prevent="emit('update:modelValue', role.id)"
    >
      <div 
        class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition-colors duration-300"
        :class="modelValue === role.id ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-400'"
      >
        <UIcon :name="role.icon" class="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
      </div>
      <span class="flex-1 text-left">{{ $t(`auth.roles.${role.id}`) }}</span>
      <UIcon 
        v-if="modelValue === role.id" 
        name="i-heroicons-check-circle" 
        class="w-5 h-5 md:w-6 md:h-6 text-blue-500 animate-in zoom-in duration-300" 
        aria-hidden="true"
      />
    </button>
  </div>
</template>

<style scoped>
button {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-in {
  animation-fill-mode: forwards;
}
</style>
