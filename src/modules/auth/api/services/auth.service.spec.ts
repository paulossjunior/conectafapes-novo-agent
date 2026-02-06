import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthService } from './auth.service';
import type { HttpClientInterface } from '@/common/api/interface';

describe('AuthService', () => {
    let service: AuthService;
    let mockHttpClient: HttpClientInterface;

    beforeEach(() => {
        mockHttpClient = {
            get: vi.fn(),
            post: vi.fn(),
            put: vi.fn(),
            patch: vi.fn(),
            delete: vi.fn(),
        };
        service = new AuthService(mockHttpClient);
    });

    it('should call post /auth/login with correct data', async () => {
        const mockResponse = { token: 'abc', refreshToken: 'def', user: { id: '1', name: 'Test', email: 'test@lels.com' } };
        (mockHttpClient.post as any).mockResolvedValue(mockResponse);

        const loginData = { email: 'test@leds.com', password: '123' };
        const result = await service.login(loginData);

        expect(mockHttpClient.post).toHaveBeenCalledWith('auth/login', loginData);
        expect(result).toEqual(mockResponse);
    });
});
