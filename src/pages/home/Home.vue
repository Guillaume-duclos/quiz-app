<template>
  <fragment v-if="!isLoading && noError">
    <Header
      title="Quiz"
      subTitle="Choisissez une témathique et un niveau de difficulté avant de commencer."
    />
    <main>
      <div class="setup">
        <div>
          <label>Choisissez la catégorie :</label>
          <select v-model="chosenCategory">
            <option key="Any category" value="0">ANY CATEGORY</option>
            <option v-for="category in categoryList" :key="category.name" :value="category.id">
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
    </main>
    <Button
      text="Valider"
      :link="true"
      routeName="Quiz"
      :params="{category: chosenCategory, nbQuestion: nbQuestion}"
    />
  </fragment>
</template>

<script>
import axios from 'axios'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'

export default {
  components: {
    Button,
    Header
  },
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
  @import "index";
</style>
