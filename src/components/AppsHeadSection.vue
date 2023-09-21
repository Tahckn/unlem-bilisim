<template>
    <div class="flex flex-col gap-y-[11px]">
        <div class="flex gap-x-[8px]">
            <img src="/assets/icons/home.svg" alt="breadcrumb">
            <img src="/assets/icons/arrow-right-2.svg" alt="breadcrumb">
            <h3
            @click="router.push({ path: '/apps' })"
            class="text-[#3F4254] text-[13px] cursor-pointer font-semibold leading-[14px]">Uygulamalar</h3>
            <img v-if="path === '/apps/user-detail'" src="/assets/icons/arrow-right-2.svg" alt="breadcrumb">
            <h3 v-if="path === '/apps/user-detail'" class="text-[#3F4254] text-[13px] font-semibold leading-[14px]">
                MuhasebeTik</h3>
        </div>
        <div class="flex items-center js gap-x-[4px]">
            <h1  v-if="path === '/apps'" class="text-[#181C32] text-[22px] font-semibold leading-[22px] tracking-[-0.22px]">
                Uygulamalar</h1>
            <h1 v-if="path === '/apps/user-detail'"
                class="text-[#181C32] text-[18px] font-semibold leading-[18px] tracking-[-0.18px]">
                MuhasebeTik</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter();
const route = useRoute();
const path = computed(() => route.path)
</script>
