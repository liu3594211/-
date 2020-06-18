<template>
  <div>
    ref
    <p> {{refsa}}</p>
    <Reactive />
    <Computed />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import Reactive from './reactive';
import Computed from './computed'
export default {
  components: {
    Reactive,
    Computed
  },
  setup () {
    const refsa = ref(66)
    return {
      refsa
    }

  }
}
</script>

<style>
</style>