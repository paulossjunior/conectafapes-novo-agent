import { apiProvider } from '@/common/api/provider';
import { AuthService } from '../services/auth.service';

/**
 * Factory para criar instâncias do AuthService injetando o HttpClient padronizado.
 */
export function makeAuthService(): AuthService {
    const httpClient = apiProvider.getHttpClient();
    return new AuthService(httpClient);
}
