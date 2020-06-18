<template>
  <div>
    computed
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
export default {
  setup () {
    const count = ref(2)
    const plus = computed({
      get: () => count.value + 3,
      set: (val) => { count.value = val + 5 }
    })
    plus.value = 10
    console.log(plus.value);


  }
}
</script>

<style>
</style>