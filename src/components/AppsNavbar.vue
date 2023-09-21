<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import UserCard from '@/components/UserCard.vue'

const isActive = ref(true);
const isActiveSide = ref(true);
const isActiveUserCard = ref(false)
const isActiveUserCardSide = ref(false)


const toggleNav = () => {
  isActiveSide.value = !isActiveSide.value;
  if(isActiveUserCardSide.value){
    isActiveUserCardSide.value = false
  }
};

const toggleUserCard = () => {
  isActiveUserCard.value = !isActiveUserCard.value
}

const toggleUserCardSide = () => {
  isActiveUserCardSide.value = !isActiveUserCardSide.value
}

const checkWindowWidth = () => {
  if (window.innerWidth < 500) {
    isActive.value = false;
  } else {
    isActive.value = true;
  }
  if (window.innerWidth > 500) {
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

    <!-- web navbar  -->
    <div v-if="isActive" class='ml-auto relative space-x-[10px] md:space-x-[15px] flex items-center justify-center'>
      <button>
        <img class="p-[10px]" src="/assets/icons/magnifier-2.svg" alt="logo">
      </button>
      <button><img class="p-[10px]" src="/assets/icons/messages.svg" alt="logo"></button>
      <button><img class="p-[10px]" src="/assets/icons/notification-2.svg" alt="logo"></button>
      <!-- User Image -->
      <button @click="toggleUserCard"><img class="rounded-[9px]" src="/assets/icons/user.png" alt="user"></button>
      <button><img class="p-[10px]" src="/assets/icons/apps-3.svg" alt="logo"></button>
      <button> <img class="p-[10px]" src="/assets/icons/exit.svg" alt="logo"></button>
      <!-- User Card  -->
      <Transition name="fade-up">
        <UserCard v-show="isActiveUserCard" class="absolute top-[65px]" />
      </Transition>
    </div>

    <!-- Mobile nav expander  -->
    <button class="ml-auto" @click="toggleNav" v-if="!isActive">
      <img src="/assets/icons/threedot.svg" alt="arrow">
    </button>

    <!-- mobile navbar -->
    <Transition>
      <aside v-if="isActiveSide" class="z-20 rounded-l-md h-fit w-[68px] absolute top-[65px] right-0 bg-[#131313] py-2 ">
        <div class="relative">
          <div class="flex flex-col gap-y-[10px] px-3 items-center justify-center">
            <button><img class="bg-white cursor-pointer rounded-[9px] p-[10px]" src="/assets/icons/magnifier-2.svg"
                alt="logo"></button>
            <button><img class="bg-white cursor-pointer rounded-[9px] p-[10px]" src="/assets/icons/messages.svg"
                alt="logo"></button>
            <button><img class="bg-white cursor-pointer rounded-[9px] p-[10px]" src="/assets/icons/notification-2.svg"
                alt="logo"></button>
            <button @click="toggleUserCardSide"><img class="rounded-[9px]" cursor-pointer src="/assets/icons/user.png"
                alt="user"></button>
            <!-- User Card  -->
            <Transition name="fade-up">
              <UserCard v-show="isActiveUserCardSide && isActiveSide" class="absolute -top-[7px] right-[68px]" />
            </Transition>
            <button><img class="bg-white cursor-pointer rounded-[9px] p-[10px]" src="/assets/icons/apps-3.svg"
                alt="logo"></button>
            <button> <img class="bg-white cursor-pointer rounded-[9px] p-[10px]" src="/assets/icons/exit.svg"
                alt="logo"></button>
          </div>
        </div>
      </aside>
    </Transition>
  </nav>
</template>


<style>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-up-enter,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
  /* Adjust the translateY value as needed */
}
</style>