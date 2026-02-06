import { ref } from 'vue';
import type { AuthService } from '../../../api/services/auth.service';
import type { ILoginRequest, IUser } from '../../../entities/auth.entity';

export function useLogin(authService: AuthService) {
    const loading = ref(false);
    const error = ref<string | null>(null);
    const user = ref<IUser | null>(null);

    const login = async (data: ILoginRequest) => {
        loading.value = true;
        error.value = null;
        try {
            const response = await authService.login(data);
            user.value = response.user;
            return response;
        } catch (e: any) {
            error.value = e.message || 'Erro ao realizar login';
            throw e;
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        error,
        user,
        login,
    };
}
