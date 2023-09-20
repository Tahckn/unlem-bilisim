<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template >
    <nav class="py-4 w-screen px-[20px] md:px-[50px] lg:px-[100px] items-center bg-navbar text-[15px] font-semibold mb-[30px] leading-4 flex">
        <div class="flex items-center justify-center font-bold gap-1">
            <img src="../assets/icon.svg" alt="logo">
            <p class="font-raleway text-[20px] mr-[50px] text-white">Metronic</p>
        </div>
        <div class="mr-auto text-[#858585] flex gap-[10px]">
            <RouterLink class="px-[14px] py-[12px]" to="/dashboard">Dashboards</RouterLink>
            <RouterLink class="px-[14px] py-[12px]" to="/pages">Pages</RouterLink>
            <RouterLink class="px-[14px] py-[12px]" to="/apps">Apps</RouterLink>
            <RouterLink class="px-[14px] py-[12px]" to="/layouts">Layout</RouterLink>
            <RouterLink class="px-[14px] py-[12px]" to="/help">Help</RouterLink>
        </div>
        <div class='ml-auto hidden md:flex items-center justify-center'>
            <img class="p-[10px]" src="/assets/icons/magnifier.svg" alt="logo">
            <img class="p-[10px]" src="/assets/icons/notification.svg" alt="logo">
            <img class="p-[10px]" src="/assets/icons/apps.svg" alt="logo">

            <div class="w-9 h-9 flex-shrink-0 bg-yellow-200 rounded-lg">
                <!-- user image -->

            </div>
            <img class="p-[10px]" src="/assets/icons/exit-right.svg" alt="logo">
        </div>
    </nav>
</template>

