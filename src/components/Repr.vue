<template>
    <div class="ui grid">
        <div class="ui eight wide column">
            <img :src="repr.img"/>
        </div>
        <div class="ui eight wide column">
            <div class="name">
                {{repr.name}}
            </div>
            <div class="district">
                {{repr.district}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'repr',
    props: ['repr']
}
</script>

<style scoped>
</style>