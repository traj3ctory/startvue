<template>
  <div>
    <Header :numCorrect="numCorrect" :numTotal="numTotal" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" class="mx-auto">
          <Body
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./Qheader";
import Body from "./Qbody";

export default {
  name: "quiz",
  components: {
    Header,
    Body,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
    getQuestion: async function () {
      const resp = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18&type=multiple",
        {
          method: "GET",
        }
      );
      const jsonData = await resp.json();
      this.questions = jsonData.results;
      console.log(this.questions);
    },
  },
  mounted() {
    this.getQuestion();
  },
};
</script>