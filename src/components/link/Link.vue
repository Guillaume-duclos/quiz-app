<template>
  <router-link :to=link class="link" text="Valider">{{ text }}</router-link>
</template>

<script>
  export default {
    props: {
      link: String,
      text: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .link {
    display: inline-block;
    margin-top: 50px;
    padding: 15px 35px;
    border: 0;
    box-shadow: 0 5px 0 0 rgba(192, 57, 43, 1);
    border-radius: 5px;
    background-color: #e74c3c;
    color: #ffffff;
    font-size: 1.3em;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
</style>
