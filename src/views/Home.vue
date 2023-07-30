<template>
    <div class=" flex flex-col p-8 ">
        
        <div class="flex justify-center gap-2">
            <router-link :to="{name: 'byLetter',params: {letter}}" :key="letter" v-for="letter of letters">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from '../store'
import axiosClient from '../axiosClient.js'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

onMounted(async () =>{
   const response =  axiosClient.get('list.php?i=list')

})
</script>