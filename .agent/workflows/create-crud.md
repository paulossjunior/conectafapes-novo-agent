# Workflow: Create CRUD (LEDS)

## Output structure
- `src/modules/<modulo>/entities/<entity>.ts`
- `src/modules/<modulo>/api/services/<entity>Service.ts`
- `src/modules/<modulo>/api/factories/<entity>Factory.ts`
- `src/modules/<modulo>/resources/<Entity>/composables/use<Entity>.ts`
- `src/modules/<modulo>/resources/<Entity>/components/<Entity>Form.vue`
- `src/modules/<modulo>/resources/<Entity>/components/<Entity>Table.vue`
- `src/modules/<modulo>/resources/<Entity>/view/<Entity>List.vue`
- `src/modules/<modulo>/resources/<Entity>/routes.ts`

## Steps
1) Definir entidades e DTOs
2) Implementar Service (HttpClientInterface)
3) Implementar Factory (apiProvider)
4) Composable para list/create/update/delete
5) UI (form + table) com estados e feedback
6) Rotas e registro
7) Mock (se aplicável)
