<template>
  <div class="card">
    <div class="content">
      <div class="header">
        <router-link :to="{name: 'promiseDetail', params: {city: city, district: district, key: promise.key}}"> {{promise.title}} </router-link>
        <div class="right floated meta"><i class="star icon" :class="liked ? 'active' : ''" @click="onFavClick"></i></div>
      </div>
    </div>
    <!--<div class="content">
      <p v-for="pps in promise.purpose" :key="pps">{{pps}}</p>
    </div>-->
    <div class="content">
      <a class="ui basic circular red label" @click="onCategoryClick">
        {{promise.category}}
      </a>
    </div>
    <div class="extra content">
      <i class="heart icon"></i>
      <div class="ui basic blue label" v-for="group in promise.popularGroup" :key="group">{{group}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'promiseItem',
  props: ['promise', 'city', 'district'],
  computed: {
    modalID: function () {
      return (Math.random().toString(36)+'00000000000000000').slice(2, 18)
    }
  },
  data: function () {
    return {
      isPurposeActive: 'purpose',
      isRequestActive: false,
      liked: false
    }
  },
  methods: {
    showPromiseDetail: function () {
      $('#' + this.modalID).modal('show')
    },
    showRequest: function () {
      this.isRequestActive = true
    },
    onCategoryClick: function () {
      this.$emit('categoryClick', this.promise.category)
    },
    onFavClick: function () {
      this.liked = !this.liked
      this.$store.commit('addFavPromises', {city: this.city, district: this.district, key: this.promise.key})
    }
  }
}
</script>

<style scoped>

</style>

    <!--<div class="ui modal" :id="modalID">
      <div class="header">{{promise.title}}</div>
      <div class="content">
        <div class="ui top attached tabular menu">
          <a class="item" :class="curTabStatus === 'purpose'" @click="curTabStatus = 'purpose'">공약 내용</a>
          <a class="item" :class="curTabStatus === 'plan'" @click="curTabStatus = 'plan'">이행 계획</a>
          <a class="item" :class="curTabStatus === 'progress'" @click="curTabStatus = 'progress'">진행 상황</a>
        </div>
        <div v-if="isPurposeActive" class="ui bottom attached segment">
          {{promise.purpose}}
        </div>
        <div v-else class="ui bottom attached segment">
          {{promise.plan}}
        </div>
        <div v-if="isRequestActive">
          <textarea placeholder="의견을 남겨주세요"></textarea>
          <button class="ui button" @click="isRequestActive=false">의견 보내기</button>
        </div>
        <div v-else class="ui fluid button" @click="isRequestActive=true">
          자세한 정보를 알려주세요!!
          <br>
          (1,241명이 요청합니다.)
        </div>
      </div>
      <div class="actions">
        <button class="ui positive button">
          닫기
        </button>
      </div>
    </div>-->