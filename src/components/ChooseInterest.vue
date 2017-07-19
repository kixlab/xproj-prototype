<template>
  <div>
    <div class="ui dimmer" :class="{active: isLoading}"><div class="ui big text loader">대표자들 찾기 중...</div></div>

    <h1 class="ui dividing header">
      Select a few topics you are interested in
    </h1>
    <div class="ui circular labels">
      <a class="ui label interest" v-for="cat in categories" :key="cat"
        :class="{teal: isSelected(cat)}"
        @click="select(cat)">{{cat}}</a>
    </div>
    <div class="ui divider"></div>
    <div class="navButtons">
      <button class="ui big primary button" @click="next" :class="{disabled: !isContinueEnabled()}">
        다음
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // categories: ['안전/환경', '일자리', '문화체육', '보건복지', '교통/건설', 
      // '정치행정', '경제', '과학기술', '외교안보', '교육', '농축수산', '인권'],
      selected: [],
      isLoading: false
    }
  },
  computed: {
    categories: function() {return this.$store.state.categories}
  },
  methods: {
    isSelected: function(cat) {
      return this.selected.indexOf(cat) !== -1;
    },
    isContinueEnabled: function() {
      return this.selected.length > 0;
    },
    select: function(cat) {
      if (this.selected.indexOf(cat) === -1) {
        // Add item
        this.selected.push(cat);
      } else {
        // Remove item
        this.selected = this.selected.filter(item => item != cat);
      }
    },
    next: function() {
      this.isLoading = true;
      this.$store.commit('setInterest', this.selected)
      setTimeout(() => {
        this.$router.push('walkThrough');
      }, 2500);
    }
  }
}
</script>
<style>
.ui.labels .label.interest {
  font-size: 1.6em;
  font-weight: normal;
  cursor: pointer;
}
</style>
