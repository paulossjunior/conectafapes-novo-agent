import type { RouteRecordRaw } from 'vue-router';

export const authRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('./resources/Login/view/LoginView.vue'),
        meta: { title: 'Login - Acesso Cidadão' }
    }
];
