<template>
  <div>
    <h1>{{ $route.params.nbQuestion }}</h1>
    <p>{{ questions[questionIndex] }}</p>
    <p>{{ questionIndex }}</p>
    <Button text="Suivant" @click="nextQuestion"></Button>
  </div>
</template>

<script>
  import axios from 'axios'
  import Button from '../button/Button'

  export default {
    data () {
      return {
        questions: null,
        questionIndex: 0
      }
    },
    mounted () {
      axios
        .get(`https://opentdb.com/api.php?amount=${this.$route.params.nbQuestion}&category=${this.$route.params.category}`)
        .then(response => (this.questions = response.data.results))
    },
    methods: {
      nextQuestion () {
        this.questionIndex++
      }
    },
    components: {
      Button
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home {
    margin: auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
  }

  .setup {
    margin-top: 30px;
  }

  label {
    display: block;
    margin: 30px auto 10px auto;
  }

  select {
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
