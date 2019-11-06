<template>
  <div id="home">
    <h1>Quiz</h1>
    <h2>Choisissez une témathique et un niveau de difficulté avant de commencer.</h2>
    <div class="setup">
      <div>
        <label>Choisissez la catégorie :</label>
        <select v-model="chosenCategory">
          <option v-for="category in categoryList" v-bind:key="category.name" v-bind:value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div>
        <label>Choisissez le nombre de question :</label>
        <select v-model="questionNumber">
          <option v-for="i in 50" v-bind:key="i" v-bind:value="i">
            {{ i }}
          </option>
        </select>
      </div>
    </div>
    <Link text="Valider" name="Quiz" v-bind:category=chosenCategory v-bind:nbQuestion=questionNumber />
  </div>
</template>

<script>
import Link from '../link/Link.vue'
import axios from 'axios'

export default {
  data () {
    return {
      categoryList: null,
      chosenCategory: null,
      questionNumber: 1
    }
  },
  mounted () {
    axios
      .get('https://opentdb.com/api_category.php')
      .then(response => (this.categoryList = response.data.trivia_categories))
  },
  components: {
    Link
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
    font-size: 1.3em;
    font-weight: bold;
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
