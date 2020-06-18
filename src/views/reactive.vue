<template>
  <div>
    reactive的值：{{age}} <button @click='add'>增加</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/composition-api'
export default {
  setup () {
    const state = reactive({ user: 'jack', age: 30 })
    const add = () => {
      state.age += 1
    }

    return {
      ...toRefs(state),
      add
    };

  }
}
</script>

<style>
</style>