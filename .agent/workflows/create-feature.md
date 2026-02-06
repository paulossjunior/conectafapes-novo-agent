# Workflow: Create Feature in a Module (LEDS)

Target: `src/modules/<modulo>/resources/<Feature>/`

1) Criar:
   - `components/`
   - `composables/`
   - `view/` (ou `views/`)
   - `routes.ts`

2) Tipos/entidades em:
   - `src/modules/<modulo>/entities/*`

3) Integração:
   - `src/modules/<modulo>/api/services/*`
   - `src/modules/<modulo>/api/factories/*`

4) View fina:
   - chama composable
   - renderiza loading/empty/error
   - usa feedback global

5) Registrar rotas (router do módulo + agregador central)
