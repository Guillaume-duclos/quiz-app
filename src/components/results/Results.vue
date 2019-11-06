<template>
  <div>
    <h1>Votre score est de {{ $route.params.score }}/{{ $route.params.nbQuestion }}</h1>
    <router-link :to="{name: 'Home'}" class="link">Rejouer</router-link>
  </div>
</template>

<script>
import Link from '../link/Link.vue'

export default {
  components: {
    Link
  }
}
</script>
