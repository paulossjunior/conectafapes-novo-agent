import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AccessibilityMenu from './AccessibilityMenu.vue';

describe('AccessibilityMenu.vue', () => {
    beforeEach(() => {
        // Reset DOM and localStorage before each test
        document.documentElement.className = '';
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('initializes correctly based on default (light) state', () => {
        mount(AccessibilityMenu);
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('toggles theme between light and dark', async () => {
        const wrapper = mount(AccessibilityMenu);

        // Open menu
        await wrapper.find('button[aria-label="Menu de Acessibilidade"]').trigger('click');

        // Find theme toggle button (moon/sun icon)
        const themeBtn = wrapper.findAll('button').find(b => b.text().includes('Modo'));

        // Toggle to Dark
        await themeBtn?.trigger('click');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(localStorage.getItem('theme')).toBe('dark');

        // Toggle back to Light
        await themeBtn?.trigger('click');
        expect(document.documentElement.classList.contains('dark')).toBe(false);
        expect(localStorage.getItem('theme')).toBe('light');
    });

    it('toggles high contrast mode', async () => {
        const wrapper = mount(AccessibilityMenu);

        await wrapper.find('button[aria-label="Menu de Acessibilidade"]').trigger('click');
        const contrastBtn = wrapper.findAll('button').find(b => b.text().includes('Alto Contraste'));

        await contrastBtn?.trigger('click');
        expect(document.documentElement.classList.contains('high-contrast')).toBe(true);

        await contrastBtn?.trigger('click');
        expect(document.documentElement.classList.contains('high-contrast')).toBe(false);
    });
});
