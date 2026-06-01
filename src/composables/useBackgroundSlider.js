// Mengatur pergantian background otomatis setiap X detik
import { ref, computed, onMounted, onUnmounted } from 'vue'
import bg1 from '@/assets/images/bg1.jpg'
import bg2 from '@/assets/images/bg2.jpg'
import bg3 from '@/assets/images/bg3.jpg'
import bg4 from '@/assets/images/bg4.jpg'
import bg5 from '@/assets/images/bg5.jpg'
import bg6 from '@/assets/images/bg6.jpg'

const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6]

export function useBackgroundSlider(intervalMs = 3000) {
  const currentIndex = ref(0)
  let timer = null

  onMounted(() => {
    timer = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % backgrounds.length
    }, intervalMs)
  })

  onUnmounted(() => clearInterval(timer))

  return {
    currentBackground: computed(() => backgrounds[currentIndex.value])
  }
}