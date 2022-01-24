<template>
    <h1>{{anime['title']['romaji']}}</h1>
</template>
<script>
export default {
    computed:{
        anime(){
            return this.$store.getters['animes/animes'][this.$route.params.info];
        }
    }
}
</script>