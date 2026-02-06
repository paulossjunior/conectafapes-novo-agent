# Skill: Routing (Federated)

## Pattern
- Cada módulo define suas rotas em `src/modules/<modulo>/router.ts` ou `resources/<Feature>/routes.ts`
- O agregador central importa e concatena em `src/common/router/index.ts` (ou `src/routes/index.ts`)

## Rule
- Rotas novas sempre entram no export do módulo e no agregador central (se necessário).
- Lazy-load views com `() => import('...')`.
