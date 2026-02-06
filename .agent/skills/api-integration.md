# Skill: API Integration (LEDS + Axios encapsulado)

## Rule
Toda requisição HTTP passa pela camada `src/common/api` com Axios encapsulado.

## Canonical locations
- Adapter Axios: `src/common/api/adapters/http/axios.client.ts`
- Provider: `src/common/api/provider.ts`
- Interceptors: `src/common/api/interceptors/*`
- Interface: `src/common/api/interface.ts`
- Config: `src/common/api/config.ts`

## In modules
- Services: `src/modules/<modulo>/api/services/*`
- Factories: `src/modules/<modulo>/api/factories/*`
- Services recebem `HttpClientInterface` (não axios)

## Hard rules
- NÃO usar `axios.get(...)` no módulo
- NÃO usar `fetch`
- Erros devem ser normalizados por interceptors e exibidos via feedback global
