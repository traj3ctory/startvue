<template>
  <div class="mt-4">
    <b-jumbotron>

      <template #lead>
        {{ currentQuestion.question}}
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "question",
  props:{
    currentQuestion: Object,
  }
};
</script>
