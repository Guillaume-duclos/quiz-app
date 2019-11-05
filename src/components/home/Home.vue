<template>
  <div id="home">
    <h1>Quiz</h1>
    <p>Choisissez une témathique et un niveau de difficulté avant de commencer.</p>
    <div class="setup">
      <div>
        <label>Choisissez la catégorie</label>
        <select>
          <option v-for="category in categorys" v-bind:key="category.name" v-bind:value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div>
        <label>Choisissez le nombre de question</label>
        <select>
          <option v-for="i in 50" v-bind:key="i" v-bind:value="i">
            {{ i }}
          </option>
        </select>
      </div>
    </div>
    <Button text="Valider" link="/quiz"></Button>
  </div>
</template>

<script>
  import Button from '../link/Link.vue'

  export default {
    data() {
      return {
        categorys: [
          {
            id: 9,
            name: 'General Knowledge'
          },
          {
            id: 10,
            name: 'Entertainment: Books'
          },
          {
            id: 11,
            name: 'Entertainment: Film'
          },
          {
            id: 12,
            name: 'Entertainment: Music'
          },
          {
            id: 13,
            name: 'Entertainment: Musicals & Theatres'
          },
          {
            id: 14,
            name: 'Entertainment: Television'
          },
          {
            id: 15,
            name: 'Entertainment: Video Games'
          },
          {
            id: 16,
            name: 'Entertainment: Board Games'
          },
          {
            id: 17,
            name: 'Science & Nature'
          },
          {
            id: 18,
            name: 'Science: Computers'
          },
          {
            id: 19,
            name: 'Science: Mathematics'
          },
          {
            id: 20,
            name: 'Mythology'
          },
          {
            id: 21,
            name: 'Sports'
          },
          {
            id: 22,
            name: 'Geography'
          },
          {
            id: 23,
            name: 'History'
          },
          {
            id: 24,
            name: 'Politics'
          },
          {
            id: 25,
            name: 'Art'
          },
          {
            id: 26,
            name: 'Celebrities'
          },
          {
            id: 27,
            name: 'Animals'
          },
          {
            id: 28,
            name: 'Vehicles'
          },
          {
            id: 29,
            name: 'Entertainment: Comics'
          },
          {
            id: 30,
            name: 'Science: Gadgets'
          },
          {
            id: 31,
            name: 'Entertainment: Japanese Anime & Manga'
          },
          {
            id: 32,
            name: 'Entertainment: Cartoon & Animations'
          }
        ]
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
