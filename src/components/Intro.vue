<template>
  <div>
    <h1 class="ui header">Browse, check and speak!</h1>
    <ul class="intro-text check-list">
      <li>Browse politician’s promises that relate to YOU</li>
      <li>Check the progress of promises
      </li>
      <li>Make your voice heard</li>
    </ul>
    <button class="ui basic big green button" @click="authenticate">Get Started</button>

  </div>
</template>

<script>
export default {
  name: 'intro',
  methods: {
    authenticate: function () {
      this.$auth.authenticate('oauth2').then(() => {
        this.$router.push('chooseInterest')
      })
    }
  }
}
</script>

<style>
.intro-text {
  font-size: 2em;
  line-height: 1.5;
}
.check-list {
  list-style-type: none;
  text-align: left;
}
.check-list li {
  text-indent: -1.1em;
}
.check-list li:before {
  content: '✓ ';
}
</style>

