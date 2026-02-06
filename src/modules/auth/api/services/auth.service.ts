import type { HttpClientInterface } from '@/common/api/interface';
import type { ILoginRequest, IAuthResponse } from '../../entities/auth.entity';

export class AuthService {
    constructor(private httpClient: HttpClientInterface) { }

    async login(data: ILoginRequest): Promise<IAuthResponse> {
        return this.httpClient.post<IAuthResponse, ILoginRequest>('auth/login', data);
    }
}
