import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useLogin } from './useLogin';
import { AuthService } from '../../../api/services/auth.service';

vi.mock('../../../api/services/auth.service');

describe('useLogin', () => {
    let mockAuthService: any;

    beforeEach(() => {
        vi.clearAllMocks();
        mockAuthService = {
            login: vi.fn(),
        };
    });

    it('should start with initial states', () => {
        const { loading, error, user } = useLogin(mockAuthService);
        expect(loading.value).toBe(false);
        expect(error.value).toBe(null);
        expect(user.value).toBe(null);
    });

    it('should call authService.login and update states on success', async () => {
        const mockResponse = { token: '123', refreshToken: '456', user: { id: '1', name: 'Paulo', email: 'paulo@leds.com' } };
        mockAuthService.login.mockResolvedValue(mockResponse);

        const { login, loading, user } = useLogin(mockAuthService);

        await login({ email: 'paulo@leds.com', password: '123' });

        expect(mockAuthService.login).toHaveBeenCalled();
        expect(loading.value).toBe(false);
        expect(user.value).toEqual(mockResponse.user);
    });

    it('should handle errors correctly', async () => {
        mockAuthService.login.mockRejectedValue(new Error('Login failed'));

        const { login, loading, error } = useLogin(mockAuthService);

        await expect(login({ email: 'wrong@leds.com' })).rejects.toThrow('Login failed');

        expect(loading.value).toBe(false);
        expect(error.value).toBe('Login failed');
    });
});
