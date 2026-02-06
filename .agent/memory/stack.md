# Memory: Stack

- Vue 3 + TypeScript
- Vite
- Vue Router (federado)
- Pinia
- TailwindCSS
- ESLint/Prettier/Husky
- Mock server: `npm run mock`

HTTP
- Axios é o cliente HTTP padrão, mas só existe no `src/common/api/adapters/http/axios.client.ts`
- Módulos consomem `HttpClientInterface`

UI
- Nuxt UI é opcional; quando presente, pode ser preferido
- Caso contrário, `src/common/components` é o kit padrão
