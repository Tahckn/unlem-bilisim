<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref, watchEffect } from 'vue';
import Layout from './components/widgets/Layout.vue';


const isActive = ref(true);


watchEffect(() => {
  if (window.innerWidth < 768) {
    isActive.value = false;
  } else {
    isActive.value = true;
  }
});



</script>
<template>
  <div>
    <!-- TODO if auth gonna be added  -->
    <Layout>
      <!-- Content inside the layout -->
      <RouterView />
    </Layout>
  </div>
</template>

