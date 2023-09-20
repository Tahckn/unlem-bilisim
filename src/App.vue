<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
import { computed } from 'vue'

const route = useRoute();
const path = computed(() => route.path)

console.log(path)

</script>

<template>
  <header>
    <NavbarVue v-if="path != '/apps'" />
  </header>

  <div class="px-[20px] md:px-[50px] lg:px-[100px] max-w-[640px] md:max-w-[960px] lg:max-w-[1500px] mx-auto">
    <RouterView />
  </div>
</template>