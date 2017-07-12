<template>
  <div>
    <div class="ui circular labels">
      <a class="ui label" v-for="cat in categories" :key="cat">{{cat}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
       categories: ['안전/환경', '일자리', '문화체육', '보건복지', '교통/건설', 
      '정치행정', '경제', '과학기술', '외교안보', '교육', '농축수산', '인권', '기타']
    }
  }
}
</script>
<style>

</style>
