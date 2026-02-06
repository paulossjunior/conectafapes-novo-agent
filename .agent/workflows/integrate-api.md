# Workflow: Integrate API (LEDS)

**Mandatário: SEMPRE iniciar com PLANNING.**

## Passo 0: Planning
- **MANDATÁRIO**: Chamar `@.agent/personas/manager.md` para vincular esta integração a uma Task/US existente.
- Criar `implementation_plan.md`.
- Definir Contrato da API (Path, Verbo, DTOs).
- Solicitar aprovação.

## Passo 1: Gitflow
- Branch `feat/<nome>` a partir de `developing`.

## Passo 2: Contrato & Entidades
- Criar/Atualizar `entities/*` com interfaces TypeScript.
- Respeitar o `src/common/api/http-contract.md`.

## Passo 3: Implementation (SOLID)
- Implementar Service em `src/modules/<modulo>/api/services/`.
- SRP: O Service deve apenas delegar para o `HttpClientInterface`.
- Injetar `HttpClient` via Factory.

## Passo 4: TDD
- Escrever teste unitário `.spec.ts`.
- Validar tratamento de erros (401, 500, etc).

## Passo 5: Registro e PR
- Commit e PR para `developing`.
