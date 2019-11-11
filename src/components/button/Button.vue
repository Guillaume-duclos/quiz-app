<template>
  <fragment>
    <button v-if="!link" @click="handleClick">{{ text }}</button>
    <router-link v-if="link" :to="{name: routeName, params: params}" class="button">{{ text }}</router-link>
  </fragment>
</template>

<script>
export default {
  props: {
    text: String,
    link: Boolean,
    routeName: String,
    params: Object
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
  @import "index";
</style>
