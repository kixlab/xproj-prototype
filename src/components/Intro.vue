<template>
  <div>
    <div class="ui top inverted fixed menu">
      <div class="ui item">
        ProgressBook
      </div>
    </div>
    <repr :repr="reprCho">
    </repr>
    <question :name="reprCho.name" :question="question">
    </question>
  </div>
</template>

<script>
  import repr from './Repr.vue'
  import question from './Question.vue'

  export default {
    name: 'intro',
    components: {
      repr,
      question
    },
    data() {
      return {
        reprCho: {
          name: '조승래',
          district: '대전 유성구 갑',
          img: '../logo.png'
        },
        questions: [

        ]
      }
    }
  }

</script>

<style>

</style>