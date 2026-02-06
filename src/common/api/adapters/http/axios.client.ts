import axios, { type AxiosInstance } from 'axios';
import type { HttpClientInterface } from '../../interface';

export class AxiosHttpClientAdapter implements HttpClientInterface {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 10000,
        });

        // Aqui poderiam ser adicionados os interceptores no futuro
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, { params });
        return response.data;
    }

    async post<T, D = any>(url: string, data?: D): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data);
        return response.data;
    }

    async put<T, D = any>(url: string, data?: D): Promise<T> {
        const response = await this.axiosInstance.put<T>(url, data);
        return response.data;
    }

    async patch<T, D = any>(url: string, data?: D): Promise<T> {
        const response = await this.axiosInstance.patch<T>(url, data);
        return response.data;
    }

    async delete<T>(url: string): Promise<T> {
        const response = await this.axiosInstance.delete<T>(url);
        return response.data;
    }
}
