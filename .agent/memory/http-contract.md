# Memory: HTTP Contract

## Axios encapsulado
- Axios só deve ser usado dentro do adapter `src/common/api/adapters/http/axios.client.ts`

## Error shape
Interceptors devem normalizar para um formato previsível:
- message (amigável)
- status (quando houver)
- details (opcional)

## Timeouts
Definir timeout padrão no adapter.
