# Workflow: Integrate API (LEDS + Axios encapsulado)

1) Checar/ajustar no common:
   - `src/common/api/config.ts`
   - `src/common/api/provider.ts`
   - `src/common/api/adapters/http/axios.client.ts`
   - `src/common/api/interceptors/*`

2) Criar entidades:
   - `src/modules/<modulo>/entities/<Xxx>.ts`

3) Criar service no módulo (sem axios direto):
   - `src/modules/<modulo>/api/services/<XxxService>.ts`
   - construtor recebe `HttpClientInterface`

4) Criar factory do módulo:
   - `src/modules/<modulo>/api/factories/<xxx>Factory.ts`
   - usa `apiProvider.getHttpClient()`

5) Consumir via composable:
   - `src/modules/<modulo>/resources/<Feature>/composables/useXxx.ts`

6) UI:
   - loading/empty/error + feedback padronizado
