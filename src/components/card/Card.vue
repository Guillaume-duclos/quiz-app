<template>
  <div class="card">
    <h3>{{ question }}</h3>
    <ul>
      <li v-for="answers in answersList" :key="answers" @click="validResponse(answers)" :class="{currentResponse: currentResponse === answers}">
        {{ answers }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store/Store'

export default {
  props: {
    question: String,
    incorrectAnswers: Array,
    correctAnswer: String
  },
  data () {
    return {
      answersList: [],
      isValid: String,
      currentResponse: null
    }
  },
  mounted () {
    this.createAnswersList()
  },
  updated () {
    this.createAnswersList()
  },
  methods: {
    // On créer la liste des réponses
    createAnswersList () {
      for (let i = 0; i < this.incorrectAnswers.length; i++) {
        this.answersList.push(this.incorrectAnswers[i])
      }
      this.answersList.push(this.correctAnswer)
      this.shuffleAnswersList(this.answersList)
    },
    // On mélange l'ordre des réponses afin que la bonne réponse ne soit pas tout le temps en dernière position
    shuffleAnswersList (answersList) {
      for (let i = answersList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let x = answersList[i]
        answersList[i] = answersList[j]
        answersList[j] = x
      }
      this.answersList = answersList
    },
    // On valide ou non le résultat si l'utilisateur clique sur une réponse
    validResponse (answer) {
      answer === this.correctAnswer ? store.commit('validResponse') : store.commit('invalidResponse')
      this.currentResponse = answer
    }
  }
}
</script>

<style scoped lang="scss">
  @import "index";
</style>
