<template>
    <div class="card">
        <div
            class="w-52 h-96 rounded-lg mb-10 shadow brightness-75 hover:brightness-100 transition-transform transform hover:scale-105 bg-[#CAE7FF]">
            <div class="h-3/5">
                <img :src="movie.Poster" class="object-cover rounded-t-lg h-full w-full " alt="">
            </div>
            <div class="h-2/5 rounded-b-lg">
                <div class="p-3 bg-[#CAE7FF]">
                    <h3 class="font-bold text-center">{{ movie.Title }}</h3>
                </div>
                <hr class="border-t-4 border-white">
                <div class="p-3 flex justify-center items-center">
                    <button @click="detailCard(movie.imdbID)"
                        class="px-2 py-1 font-medium text-blue-800 hover:text-blue-400" type="button">
                        See Detail
                    </button>
                </div>
            </div>
        </div>

        <!-- Main modal -->
        <div v-if="isModalVisible" id="modalCard" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow ">
                    <div class="flex items-start justify-between p-4 border-b rounded-t ">
                        <h3 class="text-xl text-center font-bold text-black">
                            {{ movie.Title }}
                        </h3>
                        <button @click="closeModal()" type="button"
                            class="text-gray-400 bg-transparent hover:bg-blue-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                            data-modal-hide="modalCard">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 space-y-2">
                        <div class="flex gap-3">
                            <div class="basis-1/4 flex justify-center items-center">
                                <img :src="movie.Poster" alt="">
                            </div>
                            <div class="basis-3/4">
                                <div class="font-semibold mb-2">
                                    <h1>Genre : {{ movie.Genre }}</h1>
                                    <h1>Year : {{ movie.Year }}</h1>
                                    <h1>Actor : {{ movie.Actors }}</h1>
                                    <h1>Language : {{ movie.Language }}</h1>
                                    <h1>Country : {{ movie.Country }}</h1>
                                </div>
                                <hr>
                                <h2>{{ movie.Plot }}</h2>
                                <hr>
                                <h3 class="font-semibold mt-2">iMDb Rating : {{ movie.imdbRating }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Card',
    props: ['movie'],
    data() {
        return {
            isModalVisible: false,
            movie: [],
        }
    },
    methods: {
        setMovie(data) {
            this.movie = data;
        },
        detailCard(id) {
            this.isModalVisible = true;
            console.log(id);
            axios
                .get('https://www.omdbapi.com/?apikey=beded0cc&i=' + id)
                .then((response) => {
                    this.setMovie(response.data)
                })
                .catch((error) => console.log("Fail : ", error))
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}
</script>
  
<style scoped>
/* * {
    border: 1px solid blue;
} */

#modalCard {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    /* Menambahkan latar belakang semi-transparan */
}
</style>
  