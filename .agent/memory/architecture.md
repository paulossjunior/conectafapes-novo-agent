# Memory: LEDS Modular Frontend

A aplicação é organizada por domínios em `src/modules/*` e recursos comuns em `src/common/*`.

- Rotas federadas: cada módulo exporta e o router central agrega
- Integração HTTP unificada: `src/common/api` com Axios encapsulado
- Services por módulo recebem `HttpClientInterface` via factories (DI)
- Estado hierárquico: common/store + module/store + local
