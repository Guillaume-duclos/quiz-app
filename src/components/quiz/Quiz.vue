<template>
  <div v-if="!isLoading">
    <h1 class="title">Question {{ questionIndex + 1 }}/{{ $route.params.nbQuestion }}</h1>
    <h2>{{ questions[questionIndex].question }}</h2>
    <div v-if="!showNextButton" class="response-container" ref="responseContainer">
      <div class="response" v-for="response in questions[questionIndex].incorrect_answers" v-bind:key="response">
        <input type="radio" v-bind:id=response name="response" v-bind:value=response>
        <label v-bind:for=response @click=invalidResult>{{ response }}</label>
      </div>
      <div class="response">
        <input type="radio" v-bind:id=this.questions[questionIndex].correct_answer name="response" v-bind:value=this.questions[questionIndex].correct_answer>
        <label class="true" v-bind:for=this.questions[questionIndex].correct_answer @click=validResult>{{ this.questions[questionIndex].correct_answer }}</label>
      </div>
    </div>
    <p v-if="result && showNextButton" class="feedback good-answer">Bonne réponse !</p>
    <p v-if="!result && showNextButton" class="feedback bad-answer">Mauvaise réponse</p>
    <Button class="button" v-if="questionIndex + 1 <= $route.params.nbQuestion && !showNextButton" text="Valider" @click="submitResponse"></Button>
    <Button class="button" v-if="questionIndex + 1 != $route.params.nbQuestion && showNextButton" text="Suivant" @click="nextQuestion"></Button>
    <router-link v-if="questionIndex + 1 == $route.params.nbQuestion && showNextButton" :to="{name: 'Results', params: {score, nbQuestion: $route.params.nbQuestion}}" class="link">Voir le score</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import Button from '../button/Button'

export default {
  data () {
    return {
      questions: null,
      questionIndex: 0,
      isLoading: true,
      result: false,
      score: 0,
      showNextButton: false
    }
  },
  mounted () {
    axios
      .get(`https://opentdb.com/api.php?amount=${this.$route.params.nbQuestion}&category=${this.$route.params.category}`)
      .then(response => {
        this.questions = response.data.results
      })
      .finally(() => {
        this.isLoading = false
      })
  },
  updated () {
    if (!this.showNextButton) {
      for (let i = this.$refs.responseContainer.children.length; i >= 0; i--) {
        this.$refs.responseContainer.appendChild(this.$refs.responseContainer.children[Math.random() * i | 0])
      }
    }
  },
  methods: {
    invalidResult () {
      this.result = false
    },
    validResult () {
      this.result = true
    },
    submitResponse () {
      if (this.result) {
        this.score++
      }
      this.showNextButton = true
    },
    nextQuestion () {
      this.result = false
      this.questionIndex++
      this.showNextButton = false
    }
  },
  components: {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-transform: uppercase;
    font-size: 4em;
  }

  h2 {
    font-size: 2em;
    max-width: 800px;
    margin: auto;
  }

  .response-container {
    margin-top: 30px;
  }

  .response {
    margin: 10px auto;
  }

  .response input {
    visibility: hidden;
    display: block;
  }

  .response input[type="radio"]:checked + label {
    font-weight: bold;
    color: #e74c3c;
  }

  .response label {
    font-weight: bold;
    font-size: 1.3em;
    cursor: pointer;
    transition: .1s;
  }

  .response label:hover {
    transition: .1s;
    color: #e74c3c;
  }

  .true {
    color: green;
  }

  .feedback {
    padding: 10px 20px;
    font-size: 2em;
    font-weight: bold;
    line-height: 1;
    margin-top: 50px;
    border-radius: 5px;
    display: inline-block;
  }

  .good-answer {
    color: #27ae60;
    border: 3px solid #27ae60;
  }

  .bad-answer {
    color: #c0392b;
    border: 3px solid #c0392b;
  }

  .button {
    display: block;
    margin: 30px auto;
  }

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
