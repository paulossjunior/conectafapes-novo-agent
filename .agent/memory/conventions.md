# Memory: Conventions (LEDS)

## Naming
- Módulos: camelCase (ex: `portalCoordenador`)
- Componentes: PascalCase (ex: `MeuPerfilCard.vue`)
- Composables: `useXxx.ts`
- Stores: `*Store.ts`
- Services: `*Service.ts`
- Factories: `*Factory.ts` ou `makeXxx.ts`

## Imports
- Preferir alias `@/`
- Usar barrel exports (`index.ts`) quando reduzir ruído

## Boundaries
- `src/common` não depende de `src/modules`
- evitar import cruzado entre módulos; compartilhar via `src/common`
