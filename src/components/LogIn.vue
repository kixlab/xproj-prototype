<template>
  <div>
    <h1 class="ui header">Log in</h1>
    <div class="ui form">
      <div class="field">
        <input placeholder="E-mail" type="email" v-model="email">
      </div>
      <div class="field">
        <input placeholder="Password" type="password" v-model="password">
      </div>
      <button class="ui button" type="submit" @submit.prevent @click="onSubmit">Log in</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'logIn',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      console.log('onSubmit!')
    }
  }
}
</script>
<style scoped>

</style>

