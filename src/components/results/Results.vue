<template>
  <div>
    <h1>Votre score est de {{ $route.params.score }}/{{ $route.params.nbQuestion }}</h1>
    <router-link :to="{name: 'Home'}" class="link">Rejouer</router-link>
  </div>
</template>

<style scoped>
  .link {
    display: block;
    max-width: 200px;
    margin: 20px auto 0 auto;
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
    line-height: 1;
  }
</style>
