<template>
  <div class="filter">
    <label>Waktu Memasak</label>
    <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option value="">Kapan Saja</option>
      <option value="15">Buru-buru nih (15 menit)</option>
      <option value="30">Kurang dari 30 menit</option>
      <option value="60">Kurang dari 1 jam</option>
      <option value="70">Punya waktu (1 jam+)</option>
    </select>
  </div>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>