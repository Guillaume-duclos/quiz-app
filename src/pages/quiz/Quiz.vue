<template>
  <fragment>
    <Header
      :title="`Question ${questionIndex + 1 }/${ $route.params.nbQuestion }`"
      subTitle="1 seule réponse est valide pour chaque question."
    />
    <!--<main v-if="!isLoading && noError">
      <h2>{{ questions[questionIndex].question }}</h2>
      <div v-if="!showNextButton" class="response-container" ref="responseContainer">
        <div class="response" v-for="response in questions[questionIndex].incorrect_answers" :key="response">
          <input type="radio" :id=response name="response" :value=response>
          <label :for=response @click=invalidResult>{{ response }}</label>
        </div>
        <div class="response">
          <input type="radio" :id=this.questions[questionIndex].correct_answer name="response" :value=this.questions[questionIndex].correct_answer>
          <label :for=this.questions[questionIndex].correct_answer @click=validResult>{{ this.questions[questionIndex].correct_answer }}</label>
        </div>
      </div>
      <p v-if="result && showNextButton" class="feedback good-answer">Bonne réponse !</p>
      <p v-if="!result && showNextButton" class="feedback bad-answer">Mauvaise réponse</p>
    </main>-->
    <Card
      :question="questions[questionIndex].question"
      :incorrectAnswers="questions[questionIndex].incorrect_answers"
      :correctAnswer="questions[questionIndex].correct_answer"
      v-on:update="validResult"
    />
    <footer>
      <Button class="button" v-if="questionIndex + 1 <= $route.params.nbQuestion && !showNextButton" text="Valider" @click="submitResponse"></Button>
      <Button class="button" v-if="questionIndex + 1 != $route.params.nbQuestion && showNextButton" text="Suivant" @click="nextQuestion"></Button>
      <router-link v-if="questionIndex + 1 == $route.params.nbQuestion && showNextButton" :to="{name: 'Results', params: {score, nbQuestion: $route.params.nbQuestion}}" class="button">Voir le score</router-link>
    </footer>
  </fragment>
</template>

<script>
import axios from 'axios'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import Button from '../../components/button/Button'

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
      showNextButton: false,
      responses: []
    }
  },
  mounted () {
    // On récupère les données de l'API en fonction des paramètres fournie par l'utilisateur (le nombre de question ainsi que la catégorie choisie)
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
  methods: {
    /*  // On invalide le résultat si l'utilisateur cliqué sur une mauvaise réponse
    invalidResult () {
      this.result = false
    },
    // On valide le résultat si l'utilisateur cliqué sur la bonne réponse
    validResult () {
      this.result = true
    },  */
    validResult () {
      console.log('OK')
    },
    // Gestion du boutton "Valider"
    submitResponse () {
      if (this.result) {
        this.score++
      }
      this.showNextButton = true
    },
    // Gestion du boutton "Suivant"
    nextQuestion () {
      this.result = false
      this.questionIndex++
      this.showNextButton = false
    }
  },
  components: {
    Header,
    Card,
    Button
  }
}
</script>

<style scoped lang="scss">
  @import "index";
</style>
