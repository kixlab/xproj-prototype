<template>
  <div>
    <h1 class="ui dividing header">
      환영합니다
    </h1>
    <div class="intro">    
      다음은 시민 분께서 선출하신 공직자입니다.
    </div>
    <div class="ui buttons">
      <button class="ui button" @click="reprIdx = 0" :class="reprIdx == 0 ? 'blue' : ''" >{{congressPerson.name}}</button>
      <button class="ui button" @click="reprIdx = 1" :class="reprIdx == 1 ? 'blue' : ''">{{mayor.name}}</button>
      <button class="ui button" @click="reprIdx = 2" :class="reprIdx == 2 ? 'blue' : ''">{{president.name}}</button>
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
    mounted: function () {
      // TODO: connect with the db
      this.$http.get(this.congressPersonPromiseURL).then(function(res){
        this.congressPersonPromise = res.body
      }.bind(this))
      this.$http.get(this.mayorPromiseURL).then(function(res){
        this.mayorPromise = res.body
      }.bind(this))
      this.$http.get(this.presidentPromiseURL).then(function(res){
        this.presidentPromise = res.body
      }.bind(this))
    },
    computed: {
      congressPersonPromiseURL: function () {
        return 'http://34.208.245.104:3000/promise/'+this.city+ '/'+this.district+'/0'
      },
      mayorPromiseURL: function () {
        return 'http://34.208.245.104:3000/promise/'+this.city+ '/0/0'
      },
      presidentPromiseURL: function () {
        return 'http://34.208.245.104:3000/promise/korea/0/0'
      },
      congressPerson: function () {
        return this.$store.getters.congressPerson
      },
      mayor: function () {
        return this.$store.getters.mayor
      },
      president: function () {
        return this.$store.getters.president
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
        reprIdx: 0,
        congressPersonPromise: {},
        mayorPromise: {},
        presidentPromise: {}
      }
    },
    methods: {
      onNextRepr: function () {
        if(this.reprIdx < 2){
          this.reprIdx += 1
        } else {
          this.$router.push('personalizedPromises')
        }
      },
      onPrevRepr: function () {
        if(this.reprIdx > 0){
          this.reprIdx -= 1
        } else {
          this.$router.push('personalizedPromises')
        }
      }
    }
  }

</script>

<style>

</style>