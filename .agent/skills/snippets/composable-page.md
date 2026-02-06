# Snippet: Composable para página (LEDS)

`src/modules/<modulo>/resources/Pessoas/composables/usePessoasPage.ts`
```ts
import { ref, onMounted } from 'vue'
import type { IPessoa } from '@/modules/<modulo>/entities/pessoaEntity'
import { pessoaService } from '@/modules/<modulo>/api/factories/pessoaFactory'

export function usePessoasPage() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const pessoas = ref<IPessoa[]>([])
  const total = ref(0)

  async function load() {
    loading.value = true
    error.value = null
    try {
      const res = await pessoaService.list({ page: 1, pageSize: 10 })
      pessoas.value = res.items
      total.value = res.total
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return { loading, error, pessoas, total, reload: load }
}
```
