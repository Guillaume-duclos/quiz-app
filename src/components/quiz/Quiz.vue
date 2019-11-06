<template>
  <fragment>
    <div v-if="!isLoading && noError">
      <h1 class="title">Question {{ questionIndex + 1 }}/{{ $route.params.nbQuestion }}</h1>
      <h2>{{ questions[questionIndex].question }}</h2>
      <div v-if="!showNextButton" class="response-container" ref="responseContainer">
        <div class="response" v-for="response in questions[questionIndex].incorrect_answers" v-bind:key="response">
          <input type="radio" v-bind:id=response name="response" v-bind:value=response>
          <label v-bind:for=response @click=invalidResult>{{ response }}</label>
        </div>
        <div class="response">
          <input type="radio" v-bind:id=this.questions[questionIndex].correct_answer name="response" v-bind:value=this.questions[questionIndex].correct_answer>
          <label v-bind:for=this.questions[questionIndex].correct_answer @click=validResult>{{ this.questions[questionIndex].correct_answer }}</label>
        </div>
      </div>
      <p v-if="result && showNextButton" class="feedback good-answer">Bonne réponse !</p>
      <p v-if="!result && showNextButton" class="feedback bad-answer">Mauvaise réponse</p>
      <Button class="button" v-if="questionIndex + 1 <= $route.params.nbQuestion && !showNextButton" text="Valider" @click="submitResponse"></Button>
      <Button class="button" v-if="questionIndex + 1 != $route.params.nbQuestion && showNextButton" text="Suivant" @click="nextQuestion"></Button>
      <router-link v-if="questionIndex + 1 == $route.params.nbQuestion && showNextButton" :to="{name: 'Results', params: {score, nbQuestion: $route.params.nbQuestion}}" class="button">Voir le score</router-link>
    </div>
    <p v-if="!noError">{{ errorMessage }}</p>
  </fragment>
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
      noError: true,
      errorMessage: null,
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
      .catch(error => {
        this.noError = false
        this.errorMessage = error
      })
      .finally(() => { this.isLoading = false })
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

<style scoped lang="scss">
  @import "index.scss";
</style>
