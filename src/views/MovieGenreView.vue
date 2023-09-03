<template>
    <div class="movie-genre container my-5 mx-auto">
        <div class="mt-12 mx-10 mb-12">
            <div class="grid grid-cols-5">
                <logo />
                <div class="col-span-4">
                    <SearchBar :dataFromSB="dataFromSB" @sbEvent="sbEvent" />
                </div>
            </div>

            <div class="w-full mt-5 grid grid-cols-5 mb-5">
                <div class="flex justify-start items-center">
                    <router-link to="/">
                        <h1
                            class="text-2xl hover:bg-[#CAE7FF] py-1 px-2 hover:text-black text-blue-300 border hover:font-bold border-blue-300 font-light">
                            &#60; Back</h1>
                    </router-link>
                </div>
                <div class="col-span-4 flex justify-start font-semibold gap-4 text-2xl">
                    <h1 class="rounded-2xl py-1 px-2 bg-blue-300 hover:cursor-pointer"
                        :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Horror' }"
                        @click="selectGenre('Horror')">
                        Horror</h1>
                    <h1 :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Comedy' }"
                        class="rounded-2xl py-1 px-2 bg-blue-300 cursor-pointer" @click="selectGenre('Comedy')">
                        Comedy</h1>
                    <h1 :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Thriller' }"
                        class="rounded-2xl py-1 px-2 bg-blue-300 cursor-pointer" @click="selectGenre('Thriller')">
                        Thriller</h1>
                    <h1 :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Romance' }"
                        class="rounded-2xl py-1 px-2 bg-blue-300 cursor-pointer" @click="selectGenre('Romance')">
                        Romance</h1>
                    <h1 :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Action' }"
                        class="rounded-2xl py-1 px-2 bg-blue-300 cursor-pointer" @click="selectGenre('Action')">
                        Action</h1>
                    <h1 :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Drama' }"
                        class="rounded-2xl py-1 px-2 bg-blue-300 cursor-pointer" @click="selectGenre('Drama')">
                        Drama</h1>
                    <h1 :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Fiction' }"
                        class="rounded-2xl py-1 px-3 bg-blue-300 cursor-pointer" @click="selectGenre('Fiction')">
                        Fiction</h1>
                    <h1 :class="{ 'bg-transparent text-white underline underline-offset-8 ': selectedGenre === 'Family' }"
                        class="rounded-2xl py-1 px-2 bg-blue-300 cursor-pointer" @click="selectGenre('Family')">
                        Family</h1>
                </div>
            </div>
            <hr>
            <div class="mt-10 flex flex-wrap">
                <div v-for="movie in movies" :key="movie.imdbID" class="w-1/5 p-2">
                    <div class="flex">
                        <card :movie="movie" />
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div v-if="movies === 0">
                    <notFound />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import logo from '@/components/logo.vue'
import SearchBar from '@/components/searchBar.vue'
import card from '@/components/card.vue';
import notFound from '@/components/notFound.vue';
import axios from "axios";

export default {
    name: 'MovieGenreView',
    components: {
        logo,
        SearchBar,
        card,
        notFound
    },
    data() {
        return {
            movies: [],
            selectedGenre: '',
        }
    },
    methods: {
        setMovie(data) {
            this.movies = data;
        },
        sbEvent(data) {
            this.searchMovie(data);
        },
        searchMovie(search) {
            this.selectedGenre = '';
            axios
                .get('http://www.omdbapi.com/?apikey=beded0cc&s=' + search)
                .then((response) => {
                    console.log(response.data.Response);
                    if (response.data.Response !== 'False') {
                        const moviesData = response.data.Search.slice(0, 10);
                        this.setMovie(moviesData);
                    } else {
                        this.movies = 0;
                    }
                })
                .catch((error) => console.log("Fail : ", error))
        },
        selectGenre(genre) {
            this.selectedGenre = genre;
            axios
                .get('http://www.omdbapi.com/?apikey=beded0cc&s=' + genre)
                .then((response) => {
                    const moviesData = response.data.Search.slice(0, 10);
                    this.setMovie(moviesData);
                })
                .catch((error) => console.log("Fail : ", error))
        }
    },
    mounted() {
        axios
            .get('http://www.omdbapi.com/?apikey=beded0cc&s=family')
            .then((response) => {
                const moviesData = response.data.Search.slice(0, 10);
                this.setMovie(moviesData);
            })
            .catch((error) => console.log("Fail :", error));
    }
}
</script>

<style scoped>
/* * {
    border: 1px red solid;
} */
</style>
  