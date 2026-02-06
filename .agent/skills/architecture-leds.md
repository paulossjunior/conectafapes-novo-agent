# Skill: LEDS Modular Frontend Architecture

## Modules
- Domínio em `src/modules/*`
- Cada módulo é autocontido e pode ter:
  - api/{services,factories,adapters?}
  - entities/
  - store|stores/
  - router.ts
  - views|view/
  - resources/<Feature>/{components,composables,view,routes.ts}

## Common
- Tudo reutilizável e agnóstico a domínio:
  - `src/common/api/*`
  - `src/common/components/*`
  - `src/common/plugins/*`
  - `src/common/router/*`
  - `src/common/store/*`
  - `src/common/utils|types|constants|assets`

## Routing
- Federado: cada módulo expõe rotas
- Agregador central concatena tudo

## Boundaries
- common -> não pode depender de módulos
- módulos -> podem depender do common
- evitar import cruzado entre módulos
