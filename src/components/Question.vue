<template>
    <div>
        {{question}}
        <div class="ui buttons">
            <button class="ui button" :class="score == i ? 'active' : ''" @click="score = i" v-for="i in 5">
                {{i}}
            </button>
        </div>
        <div class="navButtons">
            <button class="ui button">
                Stop
            </button>
            <button class="ui button" @click="incrementQuestionNum">
                Next
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'question',
    props: ['name'],
    computed:{
        question: function () {
            switch(this.questionNum){
                case 0:
                return this.name + ' ' + this.questions[0]
                case 1:
                return this.name + ' ' + this.questions[1]
                case 2:
                return this.name + ' ' + this.questions[2]
                case 3:
                return this.questions[3]
            }
        }
    },
    data: function () {
        return {
            score: 0,
            questionNum: 0,
            questions: [
                '공약에 대해 알고 계십니까?',
                '아래 공약을 좋아하십니까?',
                '지지하십니까?',
                '지지하는 이유는 무엇입니까?'
            ]
        }
    },
    methods: {
        incrementQuestionNum: function () {
            if(this.questionNum < 3)
                this.questionNum += 1
            else
                this.$emit('nextRepr')
        }
    }
}
</script>

<style scoped>
.navButtons {
    margin-top: 2em;
}
</style>