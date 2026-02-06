# Skill: Forms (LEDS)

## Where
- Inputs e padrões reutilizáveis: `src/common/components/form/*`
- Form específico do domínio: `src/modules/<modulo>/resources/<Feature>/components/*`

## Validation
- Se existir schema lib (zod/yup), manter schemas próximos do domínio (entities) ou pasta dedicada do módulo.
- Erro de campo (field-level) quando possível; erro geral no topo via feedback global.

## UX
- Botão submit desabilitado quando `pending/loading`
- Sucesso via snackbar/toast
- Erro via snackbar/toast/alert padronizado
