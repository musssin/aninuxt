<template>
  <div>
    <TopAnimes :animeList="animes.slice(0,3)"/>
    <div v-for="anime in animes" :key="anime['id']">
      <AnimeCard :anime="anime"/>
    </div>
  </div>
</template>

<script>
import AnimeCard from "@/components/AnimeCard";
import TopAnimes from "@/components/TopAnimes";
export default {
  name: 'IndexPage',
  components:{
    AnimeCard,
    TopAnimes
  },
  methods:{
    async nextPage(){
      //pageNumber++;
      fetch();
    },
    async previousPage(){
      //pageNumber--;
      fetch();
    }
  },
  async fetch({store,error}){
        //if(store.getters['companies/companies'].length===0){
            try{
                await store.dispatch('animes/fetchAnimes',1)
            }catch(e){
            error(e)
            }
        //}
        
    },
  computed:{
      animes(){
            return this.$store.getters['animes/animes']
        },
      pageNumber(){
        if(this.$store.getters['animes/pageInfo']===undefined){
          return 1;
        }
        else{
            return this.$store.getters['animes/pageInfo']['currentPage'];

        }
      }  
    }
}
</script>
