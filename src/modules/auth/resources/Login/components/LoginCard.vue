<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '../../../api/services/auth.service';
import { apiProvider } from '../../../../../common/api/provider';
import { useI18n } from 'vue-i18n';
import RoleSelectionGroup from './RoleSelectionGroup.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

// Em Nuxt UI 4 (vue-plugin), os composables podem não ser auto-importados
// dependendo da configuração do Vite.
const { t } = useI18n();

const roles = [
  { id: 'voluntario', icon: 'i-heroicons-user' },
  { id: 'bolsista', icon: 'i-heroicons-academic-cap' },
  { id: 'coordenador', icon: 'i-heroicons-user-group' }
];

const selectedRole = ref('bolsista');
const isModalOpen = ref(false);
const email = ref('');
const isLoading = ref(false);

const router = useRouter();
const toast = (window as any).$useToast ? (window as any).$useToast() : { add: () => {} }; // Fallback ou auto-import
const authService = new AuthService(apiProvider.getHttpClient());

const handleLogin = async () => {
  if (!email.value) {
    toast.add({
      title: t('auth.feedback.email_required_title'),
      description: t('auth.feedback.email_required_desc'),
      color: 'red'
    });
    return;
  }

  isLoading.value = true;
  try {
    const response = await authService.login({
      email: email.value,
      password: 'mocked-password' // O mock server só olha o e-mail
    });

    toast.add({
      title: t('auth.feedback.login_success_title'),
      description: t('auth.feedback.login_success_desc', { 
        name: response.user.name, 
        role: t(`auth.roles.${selectedRole.value}`) 
      }),
      color: 'green'
    });
    
    isModalOpen.value = false;
    
    // Simula atraso para o usuário ver o toast de sucesso antes de mudar de página
    setTimeout(() => {
      router.push('/'); 
    }, 1500);
  } catch (error: any) {
    toast.add({
      title: t('auth.feedback.login_failed_title'),
      description: error.response?.data?.message || t('auth.feedback.login_failed_desc'),
      color: 'red'
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div 
    class="w-full bg-white/80 dark:bg-[#1e293b]/50 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center gap-8 md:gap-10 border border-slate-200 dark:border-slate-800/50 relative overflow-hidden transition-all duration-300"
    role="main" 
    aria-labelledby="login-header"
  >

    <!-- Header -->
    <div class="text-center space-y-3 md:space-y-4">
      <h2 id="login-header" class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white tracking-tight">{{ $t('auth.login.title') }}</h2>
      <p class="text-slate-500 dark:text-slate-400 text-base md:text-lg opacity-80 max-w-[280px] mx-auto leading-tight">
        {{ $t('auth.login.subtitle') }}
      </p>
    </div>

    <!-- Role Selection (Radio Group for accessibility) -->
    <!-- Role Selection (Radio Group for accessibility) -->
    <RoleSelectionGroup 
      v-model="selectedRole" 
      :roles="roles" 
    />

    <!-- Primary Action -->
    <div class="w-full pt-2 md:pt-4">
      <UButton
        size="xl"
        block
        :label="$t('auth.login.govbr_button')"
        :aria-label="$t('auth.login.govbr_button')"
        icon="i-heroicons-arrow-right-on-rectangle"
        class="py-3 md:py-3.5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform active:scale-[0.98] bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1e293b]"
        @click="isModalOpen = true"
      />
    </div>

    <!-- Footer Text & Language Switcher -->
    <div class="text-center max-w-sm space-y-4">
      <p class="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
        {{ $t('auth.login.legal_notice', { source: $t('auth.login.govbr_source') }) }}
      </p>
      
      <LanguageSwitcher />
    </div>

    <!-- Gov.br Simulation Modal -->
    <UModal v-model:open="isModalOpen" :title="$t('auth.login.modal.title')">
      <template #content>
        <div class="p-6 md:p-8 space-y-6 md:space-y-8" role="form" :aria-label="$t('auth.login.modal.form_label')">
          <div class="flex flex-col items-center text-center gap-4">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center" aria-hidden="true">
              <UIcon name="i-heroicons-shield-check" class="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-slate-900">{{ $t('auth.login.modal.header') }}</h3>
              <p class="text-slate-500 text-sm md:text-base">{{ $t('auth.login.modal.description') }}</p>
            </div>
          </div>

          <div class="space-y-4">
            <UFormField :label="$t('auth.login.modal.email_label')" required :help="$t('auth.login.modal.email_help')">
              <UInput 
                id="email-input"
                v-model="email" 
                :placeholder="$t('auth.login.modal.email_placeholder')" 
                icon="i-heroicons-envelope"
                size="lg"
                class="w-full"
                aria-required="true"
                @keyup.enter="handleLogin"
              />
            </UFormField>
            
            <p class="text-[10px] md:text-xs text-slate-400 bg-slate-50 p-3 rounded-lg border border-slate-100 italic" role="note">
              {{ $t('auth.login.modal.hint') }}
            </p>
          </div>

          <UButton
            block
            size="lg"
            :label="$t('auth.login.modal.submit_button')"
            :loading="isLoading"
            class="py-3 font-bold rounded-xl active:scale-[0.98] transition-transform"
            @click="handleLogin"
          />
        </div>
      </template>
    </UModal>
  </div>
</template>


