# Memory: UI Patterns

## Views finas
- carregam dados
- chamam composables
- montam layout
- delegam UI para components

## Layout & Listagens
- **Prioridade: Cards**: Listagens devem ser implementadas usando Cards do Nuxt UI ou `src/common/components`.
- **Tabelas**: Evitar tabelas em layouts responsivos, a menos que a complexidade dos dados (muitas colunas de comparação) exija.

## Acessibilidade (e-MAG/WCAG)
- **Alt Text**: Imagens decorativas vazias, imagens informativas com descrição.
- **Labels**: Todos os campos de formulário devem ter labels associados.
- **Contraste**: Seguir padrões WCAG AA para texto.
- **Foco**: Indicador de foco deve ser visível e seguir ordem lógica.

## Feedback padrão
- sucesso: snackbar/toast
- erro: snackbar/toast/alert

## Estados obrigatórios
- loading
- empty
- error
