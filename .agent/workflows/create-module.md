# Workflow: Create Module (LEDS)

1) Criar `src/modules/<modulo>/` com:
   - api/{services,factories}
   - entities/
   - store|stores/
   - router.ts
   - views|view/ (ou resources/)

2) Exportar rotas em `router.ts` (ou `routes.ts` por feature)

3) Registrar no agregador central:
   - `src/common/router/index.ts`

4) Se houver integração:
   - criar service com `HttpClientInterface`
   - criar factory que usa `apiProvider.getHttpClient()` do common/api

5) Garantir estados e feedback padrão
