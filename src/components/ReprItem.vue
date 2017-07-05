<template>
    <div class="ui grid">
        <div class="ui eight wide column">
            <router-link :to="{name: 'reprDetail', params: {type: repr.type, name: repr.name}}"><img :src="repr.img" class="profilePic"/></router-link>
        </div>
        <div class="ui eight wide column">
          <div class="description">
            <div class="name">
                <router-link v-if="!isReprDetail" :to="{name: 'reprDetail', params: {type: repr.type, name: repr.name}}">{{repr.name}}</router-link>
                <span v-else>{{repr.name}}</span>
            </div>
            <div class="district">
                <router-link v-if="!isReprDetail" :to="{name: 'reprDetail', params: {type: repr.type, name: repr.name}}">{{repr.title}}</router-link>
                <span v-else>{{repr.title}}</span>
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
            this.$router.push({name: 'reprDetail', params: {type: this.repr.type, name: this.repr.name}})
        }
    },
    computed: {
        isReprDetail: function () {
            return (this.$route.name === 'reprDetail')
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