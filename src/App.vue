
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 justify-between items-center">
      <router-link :to="{name : 'home'}">
        Home
      </router-link>
      <div>
        <router-link to="/">
          Search Meals
        </router-link>
        <router-link  to="/">
          Meals By Letter
        </router-link>
        <router-link  to="/">
          Meals by Ingredients
        </router-link>
      </div>
    </header>
    <main>
    <router-view/>
  </main>
  </div>

</template>

<script setup>
</script>

<style scoped>
</style>
