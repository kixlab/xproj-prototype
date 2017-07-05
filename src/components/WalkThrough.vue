<template>
  <div>
    <h1 class="ui dividing header">
      Sign Up
    </h1>
    <div class="intro">
      다음은 시민 분께서 선출하신 공직자입니다.
    </div>
    <div class="ui buttons">
      <button class="ui button" :class="reprIdx == 0 ? 'blue' : ''" >{{congressPerson.name}}</button>
      <button class="ui button" :class="reprIdx == 1 ? 'blue' : ''">{{mayor.name}}</button>
      <button class="ui button" :class="reprIdx == 2 ? 'blue' : ''">{{president.name}}</button>
    </div>
    <repr-question :repr="curRepr">
    </repr-question>
    <question :repr="curRepr" :promise="curReprPromise" @nextRepr="onNextRepr" @prevRepr="onPrevRepr">
    </question>
  </div>
</template>

<script>
  import reprQuestion from './ReprQuestion.vue'
  import question from './Question.vue'

  export default {
    name: 'walkThrough',
    components: {
      reprQuestion,
      question
    },
    computed: {
      congressPerson: function () {
        return this.$store.getters.congressPerson
      },
      congressPersonPromise: function () {
        return this.$store.getters.congressPersonPromises.promises[0]
      },
      mayor: function () {
        return this.$store.getters.mayor
      },
      mayorPromise: function () {
        return this.$store.getters.mayorPromises.promises[0]
      },
      president: function () {
        return this.$store.state.president
      },
      presidentPromise: function () {
        return this.$store.state.presidentPromises[0]
      },
      curReprPromise: function () {
        if(this.reprIdx == 0){
          return this.congressPersonPromise
        } else if (this.reprIdx == 1){
          return this.mayorPromise
        } else if (this.reprIdx == 2){
          return this.presidentPromise
        }
      },
      curRepr: function () {
        if(this.reprIdx == 0){
          return this.congressPerson
        } else if (this.reprIdx == 1){
          return this.mayor
        } else if (this.reprIdx == 2){
          return this.president
        }
      },
      city: function () { return this.$store.state.city },
      district: function () { return this.$store.state.district },
    },
    data() {
      return {
        reprIdx: 0
      }
    },
    methods: {
      onNextRepr: function () {
        if(this.reprIdx < 2){
          this.reprIdx += 1
        } else {
          this.$router.push('myReprs')
        }
      },
      onPrevRepr: function () {
        if(this.reprIdx > 0){
          this.reprIdx -= 1
        } else {
          this.$router.push('myReprs')
        }
      }
    }
  }

</script>

<style>

</style>