<script setup lang="ts">
import {RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
  <header>
    <NavbarVue/>
  </header>

  <div class="px-[100px] max-w-[1500px] mx-auto">
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
