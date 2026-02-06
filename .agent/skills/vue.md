# Skill: Vue 3 (LEDS)

## Defaults
- Composition API
- `<script setup lang="ts">` obrigatório
- Props/emits tipados

## Where code lives
- Componentes de domínio: `src/modules/<modulo>/resources/<Feature>/components`
- Views: `src/modules/<modulo>/resources/<Feature>/view` ou `views`
- Lógica reutilizável: `src/modules/<modulo>/resources/<Feature>/composables`
- Reuso global: `src/common/components`

## Anti-patterns
- HTTP no componente/view
- Lógica grande em view (view deve orquestrar)
- Duplicar lógica entre módulos (extrair para `src/common`)
