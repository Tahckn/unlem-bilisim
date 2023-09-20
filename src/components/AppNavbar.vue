<script setup lang="ts">
import { ref } from 'vue';
const navbar = ref(true)

// const toggleNav = () => {
    
// }
</script>

<template >
    <nav class="flex items-center w-screen py-[10px] px-[20px] z-20">
        <div>
            <button @click="toggleNav"
                class="bg-[#F7F8FB] px-[14px] py-[12px] text-[15px] font-semibold leading-[16px] text-primary">Uygulamalar</button>
        </div>
        <div class='ml-auto space-x-[15px] md:flex items-center justify-center'>
            <img class="p-[10px]" src="/assets/icons/magnifier-2.svg" alt="logo">
            <img class="p-[10px]" src="/assets/icons/messages.svg" alt="logo">
            <img class="p-[10px]" src="/assets/icons/notification-2.svg" alt="logo">
            <img src="/assets/icons/user.png" alt="user">
            <img class="p-[10px]" src="/assets/icons/apps-3.svg" alt="logo">
            <img class="p-[10px]" src="/assets/icons/exit.svg" alt="logo">
        </div>
    </nav>
</template>

