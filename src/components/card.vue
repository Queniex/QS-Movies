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
                    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal"
                        class="px-2 py-1 font-medium text-blue-800 hover:text-blue-400" type="button">
                        See Detail
                    </button>
                </div>
            </div>
        </div>

        <!-- Main modal -->
        <div id="defaultModal" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow ">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t ">
                        <h3 class="text-xl text-center font-bold text-black">
                            {{ movie.Title }}
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-blue-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                            data-modal-hide="defaultModal">
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
                                <img src="https://m.media-amazon.com/images/M/MV5BMDEwNTAwNjMtNTgwZC00Y2RjLTliOTYtZWI4NGNlNjI4ZTVjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
                                    alt="">
                            </div>
                            <div class="basis-3/4">
                                <div class="font-semibold mb-2">
                                    <h1>Genre :</h1>
                                    <h1>Year : </h1>
                                    <h1>Actor : </h1>
                                    <h1>Language : </h1>
                                    <h1>Country : </h1>
                                </div>
                                <hr>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aut unde
                                    suscipit eaque impedit commodi error sequi omnis deleniti a? Lorem ipsum, dolor
                                    sit amet consectetur adipisicing elit. Ullam aut unde
                                    suscipit eaque impedit commodi error sequi omnis deleniti a?</h2>
                                <hr>
                                <h3 class="font-semibold mt-2">iMDb Rating : </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Card',
    props: ['movie']
}
</script>
  
<style scoped>
/* * {
    border: 1px solid blue;
} */
</style>
  