<template>
  <div class="card-recipe" v-if="recipe.menu">
    <h2>{{ recipe.menu }}</h2>
    <p>{{ recipe.description }}</p>

    <div>
      <h3>Bahan</h3>
      <ul>
        <li v-for="item in recipe.ingredients" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div>🔥 Kalori: {{ recipe.calories }}</div>
    <div>💪 Protein: {{ recipe.protein }}</div>
    <div>🍚 Karbo: {{ recipe.carbs }}</div>
    <div>🧈 Lemak: {{ recipe.fat }}</div>
    <div>💰 Biaya: {{ recipe.cost_estimation }}</div>
    <div>🍽️ Porsi: {{ recipe.serving }}</div>

    <div>
      <h3>Langkah Memasak</h3>
      <ol>
        <li v-for="(step, i) in recipe.recipe_steps" :key="i">{{ step }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})
</script>