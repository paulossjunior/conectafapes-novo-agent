# Workflow: Create Feature in a Module (LEDS)

**Mandatário: SEMPRE iniciar com PLANNING.**

## Passo 0: Planning
- **MANDATÁRIO**: Chamar `@.agent/personas/manager.md` para criar/atualizar Epics, US e Tasks no `docs/backlog/backlog.md`.
- Criar `implementation_plan.md` no brain do agente.
- Descrever os impactos, mudanças propostas e plano de testes.
- Solicitar aprovação do usuário antes de codar.

## Passo 1: Gitflow
- Certificar-se de estar em uma branch `feat/<nome-da-feature>` originada da `developing`.

## Passo 2: Estrutura (SOLID)
Target: `src/modules/<modulo>/resources/<Feature>/`
- `components/`: Componentes UI puros (Acessibilidade/Cards).
- `composables/`: Lógica de UI e Estado (Interface segregation).
- `view/`: Orquestração fina (S para SRP).
- `i18n/`: Arquivos de tradução (**pt-BR.json, en.json, es.json** mandatários).

## Passo 3: TDD & API Integration
- Criar Entidades/DTOs em `src/modules/<modulo>/entities/*`.
- Criar Service encapsulando `HttpClientInterface` (Dependency Inversion).
- Escrever testes unitários em Vitest `.spec.ts` ANTES da view.

## Passo 4: Implementação UI (Mobile First)
- Seguir Mobile-First estritamente.
- Garantir contrastes e ARIA labels (WCAG/e-MAG).
- Usar Nuxt UI e tokens de design.

## Passo 5: Registro e PR
- Registrar rotas.
- Commit atômico seguindo a persona.
- Abrir PR para `developing`.
