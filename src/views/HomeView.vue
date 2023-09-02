<template>
  <div class="home container my-5 mx-auto">
    <div class="mt-12 mx-10 mb-12">
      <div class="grid grid-cols-5">
        <logo />
      </div>
    </div>
    <div class="mx-10 h-[76vh] w-auto grid grid-cols-2 gap-7">
      <div class="w-full h-full flex justify-center items-center">
        <div class="h-3/5 w-full">
          <div class="my-5">
            <h1 class="font-normal text-[25px] mb-3 text-white">Lorem <span class="text-[#4194D8]">ipsum dolor</span> sit
              amet <span class="text-[#4194D8]">consectetur</span> adipisicing elit.
              Unde rerum
              nihil
              nostrum
              <span class="text-[#4194D8]">recusandae consequuntur</span>
              illum deleniti iste sunt tempore odit?
            </h1>

            <router-link to="/genre"
              class="font-bold text-[20px] border border-[#4194D8] hover:bg-[#4194D8] hover:text-white py-1 px-2 text-[#4194D8]">Get
              Started ></router-link>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
        <input type="image" src="https://i.postimg.cc/1RqGy4zf/941f06dc16844ef478a13d246871a49f-removebg-preview.png"
          alt="" width="400px" class="absolute -top-0 right-10">
        <img src="https://i.postimg.cc/76xS9Nkc/f40a7a87870ae414b05e25b27fbeef0f-removebg-preview.png" width="100px"
          alt="" class="absolute top-20 right-10 animate-bounce">
        <img src="https://i.postimg.cc/76xS9Nkc/f40a7a87870ae414b05e25b27fbeef0f-removebg-preview.png" width="80px" alt=""
          class="absolute bottom-20 right-600 animate-bounce">
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/components/logo.vue'
import SearchBar from '@/components/searchBar.vue'

export default {
  name: 'MovieGenreView',
  components: {
    logo,
    SearchBar,
  }
}
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
