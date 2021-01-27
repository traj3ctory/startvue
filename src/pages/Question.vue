<template>
  <div>
    <Header />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" class="mx-auto">
          <Body :question="questions[index]"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./Qheader";
import Body from "./Qbody";

export default {
  name: "question",
  components: {
    Header,
    Body,
  },
  data() {
    return {
      questions: [],
    }
  },
  mounted: () => {
    fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple',{
      method: 'GET'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.questions = jsonData.results
    })
  }
};
</script>