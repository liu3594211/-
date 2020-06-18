<template>
  <div class="home">
    <About p1="穿戴" />
    <p>{{count}}</p>
    <button @click='count++'>count+1</button>

  </div>
</template>

<script>
// @ is an alias to /src
import About from './About';
import { reactive, ref } from '@vue/composition-api';

export default {
  name: 'Home',
  components: {
    About,

  },
  setup () {
    console.log('setup');
    const state = reactive({ count: 0 })
    const ref = ref(666)
    console.log('ref', ref);

    return state
  },
  beforeCreate () {
    console.log('beforeCreate');
  },
  created () {
    console.log('created');

  }
}
</script>
