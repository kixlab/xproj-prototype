<template>
    <div class="ui grid">
        <div class="ui eight wide column">
            <img :src="repr.img" class="profilePic" />
        </div>
        <div class="ui eight wide column">
            <div class="description">
                <div class="name">
                    {{repr.name}}
                </div>
                <div class="district">
                    {{repr.district}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'reprQuestion',
    props: ['repr']
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