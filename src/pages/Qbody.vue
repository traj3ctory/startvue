<template>
  <div class="mt-4">
    <b-jumbotron>
      <template #lead>
        <b>Question ?</b><br />
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <b-list-group
        v-for="(answer, index) in answers"
        :key="index"
        @click="selectAnswer(index)"
      >
        <b-list-group-item
          :class="[selectedIndex === index ? 'selected' : '']"
          >{{ answer }}</b-list-group-item
        >
      </b-list-group>

      <hr class="my-4" />
      <div class="text-center">
        <b-button variant="primary">Submit</b-button>
        <span class="mx-2"></span>
        <b-button @click="next" variant="success">Next >></b-button>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "question",
  props: {
    currentQuestion: Object,
    next: Function,
  },
  data() {
    return {
      selectedIndex: null,
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
  },
};
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
.list-group-item:hover {
  background-color: #eeeeee;
  color: black;
}
.selected {
  background-color: rgb(35, 35, 228);
  color: #fff;
}
.correct {
  background-color: green;
}
.incorrect {
  background-color: red;
}
</style>