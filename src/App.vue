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

  <div>
    <RouterView />
  </div>
</template>