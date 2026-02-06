# Workflow: Review PR (LEDS)

**Foco em Gitflow e SOLID.**

## Checklist de Revisão
1. **Branching**: A branch de origem é `feat/` ou `fix/`? O destino é `developing`?
2. **SOLID**: 
   - SRP: As classes/funções têm apenas uma responsabilidade?
   - OCP: O código é extensível sem modificação?
   - DI: Dependências estão sendo injetadas (ex: HttpClient)?
3. **TDD**: Existem testes unitários cobrindo a nova lógica?
4. **i18n**: Todas as mensagens de UI estão externalizadas?
5. **Acessibilidade**: Os novos componentes seguem WCAG/e-MAG?
6. **Mobile First**: O layout foi validado em telas pequenas?

## Ações
- Solicitar correções se algum critério falhar.
- Só aprovar se o build e testes passarem.
- **Ao Aprovar**: Chamar `@.agent/personas/manager.md` para atualizar o status da Task/US para `Done` no `docs/backlog/backlog.md` e fechar Issues associadas.
