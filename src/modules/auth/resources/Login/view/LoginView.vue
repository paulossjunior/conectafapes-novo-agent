<script setup lang="ts">
import LoginCard from '../components/LoginCard.vue';
import AccessibilityMenu from '../../../../../common/components/AccessibilityMenu.vue';
</script>

<template>
  <main 
    class="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[#0f172a]"
    role="main"
  >
    <!-- Premium Ambient Background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-[#0f172a]"></div>
      <!-- Very subtle radial gradient for depth, much reduced opacity -->
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]"></div>
    </div>

    <!-- Accessibility Menu -->
    <AccessibilityMenu />

    <!-- Header / Logo Section -->
    <div class="relative z-10 mb-8 md:mb-16 flex flex-col items-center select-none animate-fade-in">
      <div class="flex items-center gap-4 md:gap-6">
        <!-- Fapes Logo Precision Construction -->
        <div class="relative w-10 h-10 md:w-16 md:h-16 grid grid-cols-2 gap-0.5 md:gap-1 rotate-45">
          <div class="bg-[#3b82f6] rounded-sm"></div>
          <div class="bg-[#89b42c] rounded-sm opacity-90"></div>
          <div class="bg-[#0ea5e9] rounded-sm opacity-80"></div>
          <div class="bg-[#65a30d] rounded-sm"></div>
        </div>
        
        <div class="flex items-baseline text-5xl md:text-[84px] font-black italic tracking-tighter leading-none">
          <span class="text-[#3b82f6] drop-shadow-sm">fa</span>
          <span class="text-[#89b42c] drop-shadow-sm">pes</span>
        </div>
      </div>
      <p class="mt-4 px-4 text-center text-slate-400 font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase text-[10px] md:text-xs opacity-60">
        {{ $t('auth.login.logo_subtitle') }}
      </p>
    </div>

    <!-- Login Card Container -->
    <div class="relative z-10 w-full max-w-[540px] px-2 md:px-0 animate-slide-up">
      <LoginCard />
    </div>

    <!-- Background Decorative Text (Hidden on small screens for clarity) -->
    <div class="hidden lg:block fixed bottom-10 left-10 z-0 opacity-[0.03] pointer-events-none select-none">
      <span class="text-[12rem] font-black italic tracking-tighter text-white">CONECTA</span>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&display=swap');

main {
  font-family: 'Outfit', sans-serif;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
