# Snippet: Service + Factory + DI (LEDS)

## Entity
`src/modules/<modulo>/entities/pessoaEntity.ts`
```ts
export interface IPessoa {
  id: string
  nome: string
  email?: string
}
```

## Service (recebe HttpClientInterface)
`src/modules/<modulo>/api/services/pessoaService.ts`
```ts
import type { HttpClientInterface } from '@/common/api/interface'
import type { IPessoa } from '@/modules/<modulo>/entities/pessoaEntity'

export class PessoaService {
  constructor(private httpClient: HttpClientInterface) {}

  async list(params?: { page?: number; pageSize?: number; q?: string }) {
    return this.httpClient.get<{ items: IPessoa[]; total: number }>('portalfapes/pessoas', params)
  }

  async getById(id: string) {
    return this.httpClient.get<IPessoa>(`portalfapes/pessoas/${id}`)
  }

  async create(data: Omit<IPessoa, 'id'>) {
    return this.httpClient.post<IPessoa, Omit<IPessoa, 'id'>>('portalfapes/pessoas', data)
  }

  async update(id: string, data: Partial<Omit<IPessoa, 'id'>>) {
    return this.httpClient.patch<IPessoa, Partial<Omit<IPessoa, 'id'>>>(`portalfapes/pessoas/${id}`, data)
  }
}
```

## Factory (DI via apiProvider)
`src/modules/<modulo>/api/factories/pessoaFactory.ts`
```ts
import { apiProvider } from '@/common/api/provider'
import { PessoaService } from '../services/pessoaService'

export const pessoaService = (() => {
  const httpClient = apiProvider.getHttpClient()
  return new PessoaService(httpClient)
})()
```
