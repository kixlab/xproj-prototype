<template>
  <div>
    <p class="intro-text">Browse, check and speak!</p>
    <ul class="intro-text check-list">
<li>Browse politician’s 
    promises that relate to YOU</li>
<li>Check the progress of 
    promises</li>
<li>Make your voice heard</li>
</ul>

    <button class="ui basic big green button" @click="$router.push('signUp')">Get Started</button>
  </div>
</template>

<script>
export default {
  name: 'intro'
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

