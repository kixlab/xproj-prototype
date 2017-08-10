<template>
  <div class="box">
    <router-link :to="{name: 'reprDetail', params: {city: repr.city, district: repr.district}}">
      <img :src="repr.img" class="profilePic" />
    </router-link>
    <div class="description">
      <div class="name">
        <router-link :to="{name: 'reprDetail', params: {city: repr.city, district: repr.district}}">{{repr.name}}</router-link>
      </div>
      <div class="district">
        <router-link :to="{name: 'reprDetail', params: {city: repr.city, district: repr.district}}">{{repr.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reprItemHorizontal',
  props: ['repr'],
  methods: {
    showDetails: function () {
      this.$router.push({ name: 'reprDetail', params: {city: repr.city, district: repr.district} })
    }
  }
}
</script>

<style scoped>
.box {
  display: inline-block;
  width: 30%;
  margin-left: 1.5%;
  margin-right: 1.5%
}
.profilePic {
  width: 100%;
  /* display: inline-block; */
  margin-top: 3em;
}

.description {
  /* display: inline-block; */
  vertical-align: middle;
  margin-top: 2em;
}

.name {
  font-size: 1.7em;
  text-align: center;
}

.district {
  font-size: 1em;
  text-align: center;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}
</style>
