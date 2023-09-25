<template>
    <div class="w-full p-[20px] flex flex-col shadow-sm border border-gray-200 min-w-[190px] rounded-xl gap-y-[30px]">
        <!-- user Info -->
        <div class="flex items-center justify-center flex-col gap-y-[25px]">
            <div class="relative">
                <img src="/assets/apps/img/user-img.png" alt="user">
                <span class="w-[10px] h-[10px] rounded-full bg-success bottom-1.5 animate-pulse right-2 absolute"></span>
            </div>
            <div class="flex flex-col items-center gap-y-[7px] justify-center">
                <h2 class="text-[16px] text-center font-semibold text-gray-[#3F4254] truncate leading-[16px]">MuhasebeTik
                </h2>
                <p class=" text-gray-500 text-[14px] font-semibold leading-[14px] underline-offset-2 underline">
                    www.muhasebetik.com</p>
            </div>
        </div>
        <!-- Advance -->
        <div class="flex flex-col gap-y-[7px] lg:flex-row gap-x-[10px] justify-between">
            <div
                class="w-full border-[0.5px] gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                <!-- MS  -->
                <p class="text-success text-[12px] font-semibold leading-[12px]">102 ms</p>
                <p class="text-gray-900 text-[12px] font-bold leading-[12px]">Cevap Süresi</p>
            </div>
            <!-- Last Request  -->
            <div
                class="w-full border-[0.5px] gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                <p class="text-[#A1A5B7] text-[12px] font-semibold leading-[12px]">05.08.2023 10:24:36</p>
                <p class="text-gray-900 text-[12px] font-bold leading-[12px]">Cevap Süresi</p>
            </div>
        </div>
        <!-- Details  -->
        <div class="w-full flex items-center justify-center">
            <router-link :to="'/apps/user-detail/' + id + '/general-overview'">
                <button
                    class="py-[12px] px-[16px] text-primary text-[13px] font-bold leading-[14px] rounded-[6px] bg-[#EEF6FF]">
                    Detay
                </button>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { PropType } from 'vue';
const props = defineProps({
    id: {
        type: Number as PropType<number>, // Specify the prop type
        required: true, // Make it required if necessary
    },
});

const id = props.id;
</script>
