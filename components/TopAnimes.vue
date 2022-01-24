<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100" @click.prevent="goTo(animeList[0]['id'])">
      <img :src="animeList[0]['coverImage']['large']" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{animeList[0]['title']['romaji']}}</h5>
        <p class="card-text">{{animeList[0]['genres']}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{animeList[1]['startDate']['year']}}</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" @click.prevent="goTo(animeList[1]['id'])">
      <img :src="animeList[1]['coverImage']['large']" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{animeList[1]['title']['romaji']}}</h5>
        <p class="card-text">{{animeList[1]['genres']}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{animeList[1]['startDate']['year']}}</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" @click.prevent="goTo(animeList[2]['id'])">
      <img :src="animeList[2]['coverImage']['large']" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{animeList[2]['title']['romaji']}}</h5>
        <p class="card-text">{{animeList[2]['genres']}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{animeList[2]['startDate']['year']}}</small>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    props:{
        animeList:[],
     
           
    },
    methods:{
      goTo(info){
        this.$router.push("/animeInfo/"+info);
      }
    }
    
}
</script>