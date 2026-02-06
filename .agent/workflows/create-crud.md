# Workflow: Create CRUD (LEDS)

**Mandatário: SEMPRE iniciar com PLANNING.**

## Passo 0: Planning
- **MANDATÁRIO**: Chamar `@.agent/personas/manager.md` para criar/atualizar Epics, US e Tasks no `docs/backlog/backlog.md`.
- Criar `implementation_plan.md`.
- Definir entidades, DTOs e contrato da API.
- Solicitar aprovação.

## Passo 1: Gitflow
- Branch `feat/<nome>` a partir de `developing`.

## Passo 2: Estrutura (SOLID/LEDS)
- `entities/<entity>.ts`: Interfaces e tipos (D de SOLID).
- `api/services/<entity>Service.ts`: SRP (fala apenas com API via Adapter).
- `api/factories/<entity>Factory.ts`: Dependency Injection.
- `resources/<Entity>/composables/use<Entity>.ts`: Lógica de UI isolada.
- `resources/<Entity>/components/`: `Form.vue`, `Table.vue` (ou Cards para Listagem).
- `resources/<Entity>/view/<Entity>List.vue`: Orquestração fina.

## Passo 3: TDD
- Escrever testes para Service e Composable antes da UI final.

## Passo 4: UI & Mobile First
- Proibido Tabelas a menos que justificado.
- Usar Cards para listagem por padrão (Persona).
- Acessibilidade WCAG/e-MAG mandatória.

## Passo 5: Registro e PR
- Commits atômicos.
- PR para `developing`.
