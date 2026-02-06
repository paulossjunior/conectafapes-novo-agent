import type { App } from 'vue';

/**
 * Registra componentes que devem estar disponíveis globalmente na aplicação.
 */
export function registerGlobalComponents(app: App): void {
    // Exemplo: app.component('BaseButton', BaseButton)

    // O Nuxt UI já registra seus componentes via plugin, mas aqui podemos
    // registrar componentes customizados da pasta src/common/components
}
