<template>
  <div class="card">
    <div class="header">
      <a @click="showPromiseDetail"> {{promise.title}} </a>
    </div>
    <div class="content">
      {{promise.purpose}}
    </div>
    <div class="extra content">
      <div class="ui tag label" v-for="group in promise.popularGroup" :key="group">{{group}}</div>
    </div>
    <div class="ui modal" :id="modalID">
      <div class="header">{{promise.title}}</div>
      <div class="content">
        <div class="ui top attached tabular menu">
          <a class="item" :class="isPurposeActive ? 'active' : ''" @click="isPurposeActive = true">공약 내용</a>
          <a class="item" :class="isPurposeActive ? '' : 'active'" @click="isPurposeActive = false">이행 계획</a>
        </div>
        <div v-if="isPurposeActive" class="ui bottom attached segment">
          {{promise.purpose}}
        </div>
        <div v-else class="ui bottom attached segment">
          {{promise.plan}}
        </div>
        <div class="ui fluid button">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'promiseItem',
  props: ['promise'],
  computed: {
    modalID: function () {
      return (Math.random().toString(36)+'00000000000000000').slice(2, 18)
    }
  },
  data: function () {
    return {
      isPurposeActive: true
    }
  },
  methods: {
    showPromiseDetail: function () {
      $('#' + this.modalID).modal('show')
    }
  }
}
</script>

<style scoped>

</style>