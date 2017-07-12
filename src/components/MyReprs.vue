<template>
  <div>
    <h1 class="ui header">대표자들</h1>
    <repr-item v-for="repr in reprs" :repr="repr" :key="repr.name"></repr-item>
  </div>
</template>

<script>
  import reprItem from './ReprItem' 
  export default {
    name: 'myReprs',
    components: {
      reprItem
    },
    computed: {
      reprs: function () { 
        return [
          this.$store.getters.congressPerson,
          this.$store.getters.mayor,
          this.$store.getters.president
        ]
      }
    }
  }
</script>

<style scoped>
</style>