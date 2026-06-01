// Mengatur state recipe: loading, error, hasil generate
import { ref } from 'vue'
import { generateRecipe } from '@/services/recipeService'

export const EMPTY_RECIPE = {
  menu: '', description: '', ingredients: [],
  calories: '', protein: '', fat: '',
  carbs: '', cost_estimation: '', serving: '',
  recipe_steps: []
}

export function useRecipe() {
  const recipe = ref({ ...EMPTY_RECIPE })
  const loading = ref(false)
  const error = ref(null)

  const generate = async (ingredients, cookTime) => {
    loading.value = true
    error.value = null

    try {
      recipe.value = await generateRecipe(ingredients, cookTime)
    } catch (err) {
      error.value = 'Gagal membuat resep. Coba lagi ya!'
      console.error('[useRecipe] generate error:', err)
    } finally {
      loading.value = false
    }
  }

  return { recipe, loading, error, generate }
}