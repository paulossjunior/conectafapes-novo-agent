# Skill: State Management (Pinia) - LEDS

## Levels
- Global: `src/common/store`
- Módulo: `src/modules/<modulo>/store` ou `stores`
- Local: estado do componente

## Rule
Use store somente quando o estado for compartilhado entre múltiplas views/components.
Prefira composables para lógica e estado de página.
