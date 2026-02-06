import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes } from '@/modules/auth/router';

const routes = [
    ...authRoutes,
    {
        path: '/',
        redirect: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Guard simples para atualizar o título da página
router.beforeEach((to) => {
    document.title = (to.meta.title as string) || 'Conecta Fapes';
});

export default router;
