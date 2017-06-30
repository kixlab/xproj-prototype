<template>
    <div class="ui grid">
        <div class="ui eight wide column">
            <router-link to="/reprDetail"><img :src="repr.img" class="profilePic"/></router-link>
        </div>
        <div class="ui eight wide column">
          <div class="description">
            <div class="name" >
                <router-link to="/reprDetail">{{repr.name}}</router-link>
            </div>
            <div class="district">
                <router-link to="/reprDetail">{{repr.district}}</router-link>
            </div>
            <div class="updateDate">
              17/05/31
            </div>
          </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'reprItem',
    props: ['repr'],
    methods: {
        showDetails: function () {
            this.$route.push('reprDetail')
        }
    }
}
</script>

<style scoped>
    .profilePic {
        width: 100%;
    }
    .description {
        display: inline-block;
        vertical-align: middle;
        margin-top: 2em;
    }
    .name {
        font-size: 2em;
        text-align: center;
    }
    .district {
        font-size: 1.2em;
        text-align: center;
        margin-top: 0.1em;
    }
</style>