<template>
    <div class="flex flex-col gap-y-[11px]">
        <div class="flex gap-x-[8px]">
            <button @click="router.push('/apps')">
                <img src="/assets/icons/home.svg" alt="breadcrumb">
            </button>
            <img src="/assets/icons/arrow-right-2.svg" alt="breadcrumb">
            <h3 v-if="path.startsWith('/apps')" @click="router.push({ path: '/apps' })"
                class="text-[#3F4254] text-[13px] cursor-pointer font-semibold leading-[14px]">Uygulamalar</h3>
            <h3 v-if="path.startsWith('/my-information')" @click="router.push({ path: '/my-information' })"
                class="text-[#3F4254] text-[13px] cursor-pointer font-semibold leading-[14px]">Bilgilerim</h3>
            <h3 v-if="path.startsWith('/my-transactions')" @click="router.push({ path: '/my-transactions' })"
                class="text-[#3F4254] text-[13px] cursor-pointer font-semibold leading-[14px]">İşlem Geçmişi</h3>
            <img v-if="path === '/apps/user-detail'" src="/assets/icons/arrow-right-2.svg" alt="breadcrumb">
            <h3 v-if="path === '/apps/user-detail'" class="text-[#3F4254] text-[13px] font-semibold leading-[14px]">
                MuhasebeTik</h3>
        </div>
        <div class="flex items-center js gap-x-[4px]">
            <h1 v-if="path === '/apps'" class="text-[#181C32] text-[22px] font-semibold leading-[22px] tracking-[-0.22px]">
                Uygulamalar</h1>
            <h1 v-if="path === '/apps/user-detail'"
                class="text-[#181C32] text-[18px] font-semibold leading-[18px] tracking-[-0.18px]">
                MuhasebeTik</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter();
const route = useRoute();
const path = computed(() => route.path)
</script>
