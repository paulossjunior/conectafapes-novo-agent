import type { HttpClientInterface } from './interface';
import { AxiosHttpClientAdapter } from './adapters/http/axios.client';

class ApiProvider {
    private httpClient: HttpClientInterface | null = null;

    getHttpClient(): HttpClientInterface {
        if (!this.httpClient) {
            // Valor base da API (pode vir de .env depois)
            const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
            this.httpClient = new AxiosHttpClientAdapter(baseURL);
        }
        return this.httpClient;
    }
}

export const apiProvider = new ApiProvider();
