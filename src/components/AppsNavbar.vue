<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import UserCard from '@/components/UserCard.vue'

const isActive = ref(true);
const isActiveSide = ref(true);


const toggleNav = () => {
  isActiveSide.value = !isActiveSide.value;
};

console.log(isActive);

const checkWindowWidth = () => {
  if (window.innerWidth < 440) {
    isActive.value = false;
  } else {
    isActive.value = true;
  }
  if (window.innerWidth > 440) {
    isActiveSide.value = false;
  }
};

onMounted(() => {
  checkWindowWidth(); // Initial check

  window.addEventListener('resize', checkWindowWidth); // Listen for window resize
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowWidth); // Remove event listener on component unmount
});
</script>

<template >
  <nav class="flex pb-[15px] w-full items-center py-[10px] px-[20px]">
    <div>
      <button
        class="bg-[#F7F8FB] px-[14px] rounded-md py-[12px] text-[15px] font-semibold leading-[16px] text-primary">Uygulamalar
      </button>
    </div>


    <div v-if="isActive" class='ml-auto space-x-[10px] md:space-x-[15px] flex items-center justify-center'>
      <img class="p-[10px]" src="/assets/icons/magnifier-2.svg" alt="logo">
      <img class="p-[10px]" src="/assets/icons/messages.svg" alt="logo">
      <img class="p-[10px]" src="/assets/icons/notification-2.svg" alt="logo">
      <img class="rounded-[9px]" src="/assets/icons/user.png" alt="user">
      <img class="p-[10px]" src="/assets/icons/apps-3.svg" alt="logo">
      <img class="p-[10px]" src="/assets/icons/exit.svg" alt="logo">
    </div>

    <button class="ml-auto" @click="toggleNav" v-if="!isActive">
      <img src="/assets/icons/threedot.svg" alt="arrow">
    </button>

    <Transition>
      <aside v-if="isActiveSide"
        class="z-20 rounded-l-md h-[calc(100vh-65px)] w-[68px] absolute top-[65px] right-0 bg-[#131313] py-2 ">
        <div class="flex flex-col gap-y-[10px] px-3 items-center justify-center">
          <img class="bg-white cursor-pointer rounded-md p-[10px]" src="/assets/icons/magnifier-2.svg" alt="logo">
          <img class="bg-white cursor-pointer rounded-md p-[10px]" src="/assets/icons/messages.svg" alt="logo">
          <img class="bg-white cursor-pointer rounded-md p-[10px]" src="/assets/icons/notification-2.svg" alt="logo">
          <img class="rounded-[9px]" cursor-pointer src="/assets/icons/user.png" alt="user">
          <img class="bg-white cursor-pointer rounded-md p-[10px]" src="/assets/icons/apps-3.svg" alt="logo">
          <img class="bg-white cursor-pointer rounded-md p-[10px]" src="/assets/icons/exit.svg" alt="logo">
        </div>
      </aside>
    </Transition>

    <userCard class="absolute top-5"/>
    

  </nav>
</template>

<style></style>

