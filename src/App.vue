<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, ref,watchEffect } from 'vue'
import AppsHeadSection from '@/components/AppsHeadSection.vue';
import AppsNavbar from '@/components/AppsNavbar.vue';
import AppsSidebar from '@/components/AppsSidebar.vue';
import AppsSidebarRight from '@/components/AppsSidebarRight.vue';
import AppListWidget from '@/components/widgets/AppListWidget.vue';

const route = useRoute();
const path = computed(() => route.path)
const isActive = ref(true);

const toggleSidebar = (newState: boolean) => {
  isActive.value = newState;
};

watchEffect(() => {
  if (window.innerWidth < 768) {
    isActive.value = false;
  } else {
    isActive.value = true;
  }
});

import {fetchData} from './getData'

fetchData()
  .then((data)=>{
    console.log('basarili',data)
  })
  .catch((error)=>{
    console.log('basarisiz',error)
  })

</script>
<template>
  <div class="flex flex-row items-start ">
    <AppsSidebar :isActive="isActive" @toggle-sidebar="toggleSidebar" class="h-screen fixed z-40" />
    <div class="flex flex-col w-full" :style="{ marginLeft: isActive ? '300px' : '0' }">
      <AppsNavbar class="fixed" :style="{ paddingRight: isActive ? '320px' : '' }" />
      <div class="flex">
        <main
          class="p-[20px] w-full gap-y-[10px] flex flex-col border-x border border-[#F1F1F2] rounded-xl md:mb-0 mb-[68px] md:mr-[68px] mt-[65px]">
          <!-- Header Section  -->
          <AppsHeadSection />
          <!-- Widgets  -->
          <div>
            <RouterView />
          </div>
          <!-- List  -->
          <AppListWidget v-if="path === '/apps'" />
        </main>
        <AppsSidebarRight />
      </div>
    </div>
  </div>
</template>

