# Workflow: Create Module (LEDS)

**Mandatário: SEMPRE iniciar com PLANNING.**

## Passo 0: Planning
- **MANDATÁRIO**: Chamar `@.agent/personas/manager.md` para criar Epic e US para este módulo no `docs/backlog/backlog.md`.
- Criar `implementation_plan.md`.
- Desenhar arquitetura do módulo e dependências.
- Solicitar aprovação.

## Passo 1: Estrutura Base (SOLID)
Criar `src/modules/<modulo>/` com:
- `api/`: {services, factories, mocks}.
- `entities/`: DTOs e Interfaces.
- `resources/`: UI organizada por features.
- `router.ts`: Rotas isoladas do módulo.

## Passo 2: Mocks e TDD
- Criar Mocks realistas (Sucesso/Erro).
- Iniciar com testes de contrato.

## Passo 3: Mobile First & UX
- Design baseado em Nuxt UI Premium.
- Foco em acessibilidade desde o início.

## Passo 4: Gitflow
- Merge branch na `developing` via PR após validação.
