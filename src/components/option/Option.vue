<template>
  <select name="cars" v-model="selected">
    <option v-for="option in options" v-bind:key="option.optionNumber" v-bind:value="option.optionNumber">
      {{ option.optionNumber }}
    </option>
  </select>
</template>

<script>
  export default {
    props: {
      options: Object
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  select {
    margin: 30px 20px;
    border: 15px solid #e74c3c;
    border-radius: 10px;
    background-color: #e74c3c;
    color: #ffffff;
    box-shadow: 0 5px 0 0 rgba(192, 57, 43, 1);
    font-size: 1.3em;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
</style>
