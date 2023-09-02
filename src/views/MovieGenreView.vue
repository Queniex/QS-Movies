<template>
    <div class="movie-genre container my-5 mx-auto">
        <div class="mt-12 mx-10 mb-12">
            <div class="grid grid-cols-5">
                <logo />
                <div class="col-span-4">
                    <SearchBar />
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
                    <h1
                        class="rounded-2xl py-1 px-2 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Horror</h1>
                    <h1
                        class="rounded-2xl py-1 px-2 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Comedy</h1>
                    <h1
                        class="rounded-2xl py-1 px-2 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Thriller</h1>
                    <h1
                        class="rounded-2xl py-1 px-2 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Romance</h1>
                    <h1
                        class="rounded-2xl py-1 px-2 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Action</h1>
                    <h1
                        class="rounded-2xl py-1 px-2 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Drama</h1>
                    <h1
                        class="rounded-2xl py-1 px-3 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Fiction</h1>
                    <h1
                        class="rounded-2xl py-1 px-2 bg-blue-300 hover:bg-transparent hover:text-white hover:underline hover:underline-offset-8 hover:cursor-pointer">
                        Family</h1>
                </div>
            </div>
            <hr>
            <div class="mt-10">
                <!-- <card /> -->
                <notFound />
            </div>
        </div>
    </div>
</template>
  
<script>
import logo from '@/components/logo.vue'
import SearchBar from '@/components/searchBar.vue'
import card from '@/components/card.vue';
import notFound from '@/components/notFound.vue';

export default {
    name: 'MovieGenreView',
    components: {
        logo,
        SearchBar,
        card,
        notFound
    }
}
</script>

<style scoped>
/* * {
    border: 1px red solid;
} */
</style>
  