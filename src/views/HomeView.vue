<template>
  <AppSignature />

  <div class="container" :style="{ backgroundImage: `url(${currentBackground})` }">
    <div class="overlay" />

    <div class="card">
      <div class="content">
        <div class="hero">
          <div class="icon">🍳</div>
          <h2>Masak Apa Hari Ini?</h2>
          <p>Kirimkan bahan-bahannya, dan aku akan membuatkan sesuatu!</p>
        </div>

        <IngredientInput v-model="ingredient" />

        <div class="toolbar">
          <CookTimeSelect v-model="cookTime" />
          <button @click="handleGenerate" :disabled="loading">
            {{ loading ? '...' : 'Buat Resep' }}
          </button>
        </div>

        <Loader v-if="loading" />

        <p v-if="error" class="error">{{ error }}</p>

        <RecipeCard :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppSignature from '@/components/AppSignature.vue'
import IngredientInput from '@/components/IngredientInput.vue'
import CookTimeSelect from '@/components/CookTimeSelect.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import Loader from '@/components/Loader.vue'
import { useBackgroundSlider } from '@/composables/useBackgroundSlider'
import { useRecipe } from '@/composables/useRecipe'

const ingredient = ref('')
const cookTime = ref('')

const { currentBackground } = useBackgroundSlider()
const { recipe, loading, error, generate } = useRecipe()

const handleGenerate = () => {
  const ingredients = ingredient.value
    .split(',')
    .map(i => i.trim().toLowerCase())
    .filter(Boolean)

  if (!ingredients.length) return

  generate(ingredients, cookTime.value)
}
</script>