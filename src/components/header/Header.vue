<template>
  <header>
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<style scoped lang="scss">
  @import "index";
</style>
