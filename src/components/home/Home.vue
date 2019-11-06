<template>
  <fragment>
    <div v-if="!isLoading && noError" id="home">
      <h1>Quiz</h1>
      <h2>Choisissez une témathique et un niveau de difficulté avant de commencer.</h2>
      <div class="setup">
        <div>
          <label>Choisissez la catégorie :</label>
          <select v-model="chosenCategory">
            <option key="Any category" value="0">ANY CATEGORY</option>
            <option v-for="category in categoryList" v-bind:key="category.name" v-bind:value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div>
          <label>Choisissez le nombre de question :</label>
          <select v-model="nbQuestion">
            <option v-for="i in 50" v-bind:key="i" v-bind:value="i">
              {{ i }}
            </option>
          </select>
        </div>
      </div>
      <router-link :to="{name: 'Quiz', params: {category: chosenCategory, nbQuestion}}" class="button">Valider</router-link>
    </div>
    <p v-if="!noError">{{ errorMessage }}</p>
  </fragment>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      categoryList: null,
      chosenCategory: 0,
      nbQuestion: 1,
      isLoading: true,
      noError: true,
      errorMessage: null
    }
  },
  mounted () {
    // On récupère la liste des catégories proposés par l'API
    axios
      .get('https://opentdb.com/api_category.php')
      .then(response => (this.categoryList = response.data.trivia_categories))
      .catch(error => {
        this.noError = false
        this.errorMessage = error
      })
      .finally(() => { this.isLoading = false })
  }
}
</script>

<style scoped lang="scss">
  @import "index.scss";
</style>
