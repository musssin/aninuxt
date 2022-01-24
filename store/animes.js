import { gql } from 'nuxt-graphql-request';
export const state =()=>({
    animes:[],
    pageInfo:{},
    searchResults:[]
})
export const mutations={
    setAnimes(state,animes){
        state.animes=animes;
    },
    setPageInfo(state,pageInfo){
        state.pageInfo=pageInfo;
    },
    setSearchResults(state,searchResults){
        state.searchResults=searchResults;
    }
}
export const getters={
    animes:state=>state.animes,
    pageInfo:state=>state.pageInfo,
    searchResults:state=>state.searchResults
}
export const actions={
    async fetchAnimes({commit},page){
        const query = gql`
        query{
            Page (page: ${page}, perPage: 50) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                    
                  }
                  media {
                    id,
                    description,
                    countryOfOrigin
                    startDate{
                        year
                    }
                    coverImage{
                      medium,
                      large
                    },
                    genres,
                    episodes,
                    title {
                      romaji
                    }
                  }
            }
          }
      `;
      this.$graphql.default.setEndpoint('https://graphql.anilist.co/');
      const response = (await this.$graphql.default.request(query))["Page"];
      console.log(response['media']);
      commit('setAnimes',response['media']);
      commit('setPageInfo',response['pageInfo']);
    },
    async getAnimesByName({commit},page,name){
        const query = gql`
        query{
            Page (page: ${page}, perPage: ${perPage}) {
                pageInfo {
                    total
                    currentPage
                    lastPage
                    hasNextPage
                    perPage
                    
                  }
                  media {
                    id,
                    description,
                    coverImage{
                      medium,
                      large
                    },
                    startDate{
                        year
                    }
                    countryOfOrigin
                    genres,
                    episodes,
                    title {
                      romaji
                    }
                  }
            }
          }
      `;
      this.$graphql.default.setEndpoint('https://graphql.anilist.co/');
      const response = (await this.$graphql.default.request(query))["Page"];
      console.log(response['media']);
      commit('setSearchResults',response['media']);
      
    },
}