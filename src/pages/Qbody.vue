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
        <b-button variant="primary" @click="submitAnswer">Submit</b-button>
        <span class="mx-2"></span>
        <b-button @click="next" variant="success">Next >></b-button>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "question",
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.answered = true;

      this.increment(isCorrect);
    },
      shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
    },
        answerClass(index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect'
      }

      return answerClass
    }
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