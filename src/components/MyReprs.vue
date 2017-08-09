<template>
  <div>
    <h1 class="ui header">대표자들</h1>
    <div class="reprs">
      <repr-item-horizontal v-for="repr in reprs" :repr="repr" :key="repr.name"></repr-item-horizontal>
    </div>
  </div>
</template>

<script>
  import reprItemHorizontal from './ReprItemHorizontal' 
  export default {
    name: 'myReprs',
    components: {
      reprItemHorizontal
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
 repr-item-horizontal {
    display: inline-block;
  width: 30%;
}  
</style>