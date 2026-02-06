import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AxiosHttpClientAdapter } from './axios.client';
import axios from 'axios';

vi.mock('axios');

describe('AxiosHttpClientAdapter', () => {
    let adapter: AxiosHttpClientAdapter;
    const mockAxiosInstance = {
        get: vi.fn(),
        post: vi.fn(),
        put: vi.fn(),
        patch: vi.fn(),
        delete: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();
        (axios.create as any).mockReturnValue(mockAxiosInstance);
        adapter = new AxiosHttpClientAdapter('http://api.test');
    });

    it('should call axios.get with correct parameters', async () => {
        mockAxiosInstance.get.mockResolvedValue({ data: { success: true } });

        const result = await adapter.get('/test', { id: 1 });

        expect(mockAxiosInstance.get).toHaveBeenCalledWith('/test', { params: { id: 1 } });
        expect(result).toEqual({ success: true });
    });

    it('should call axios.post with correct data', async () => {
        mockAxiosInstance.post.mockResolvedValue({ data: { created: true } });

        const result = await adapter.post('/test', { name: 'test' });

        expect(mockAxiosInstance.post).toHaveBeenCalledWith('/test', { name: 'test' });
        expect(result).toEqual({ created: true });
    });
});
