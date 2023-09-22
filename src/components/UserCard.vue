<template>
    <div
        class="py-5 rounded-xl sm:w-auto z-30 drop-shadow-lg bg-background w-[300px] px-[20px] flex flex-col gap-y-[20px] items-start justify-center">
        <!-- Image  -->
        <div class="border-b pb-[20px] border-[#E1E3EA] flex gap-x-[15px] items-center justify-center">
            <img src="/assets/apps/img/user.png" alt="user">
            <div class="flex items-start gap-y-[11px] flex-col">
                <div class="flex items-center gap-x-[5px] justify-center">
                    <h1 class="text-[18px] font-semibold leading-[18px] text-[#181C32] tracking-[-0.18px]">Fikret Burak
                        Cumaoğlu
                    </h1>
                    <p
                        class="text-success flex justify-center items-center text-[12px] font-semibold bg-[#E8FFF3] p-[7px] rounded-[4px] leading-[12px]">
                        VIP</p>
                </div>
                <p class="text-[#A1A5B7] text-[16px] font-semibold leading-[16px]">max@kt.com</p>
            </div>
        </div>
        <!-- Bilgilerim islem gecmisi  -->
        <div class="flex items-start flex-col border-b w-full border-[#E1E3EA]">
            <button @click="router.push('/my-information')">
                <p class="text-[16px] px-[15px] py-[17px] self-stretch font-semibold leading-[16px] text-[#5E6278]">
                    Bilgilerim
                </p>
            </button>
            <button @click="router.push('/my-transactions')">
                <p class="text-[16px] px-[15px] py-[17px] self-stretch font-semibold leading-[16px] text-[#5E6278]">İşlem
                    Geçmişi</p>
            </button>
        </div>
        <!-- Dil tercihi  -->
        <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
                <button>
                    <p class="text-[16px] px-[15px] py-[17px] self-stretch font-semibold leading-[16px] text-[#5E6278]">Dil
                        Tercihi</p>
                </button>
                <button>
                    <div class="bg-[#F9F9F9] rounded flex gap-x-[10px] p-[5px]">
                        <p class="text-[#5E6278] text-[12px] font-semibold leading-[12px]">English</p>
                        <img src="/assets/apps/img/america.png" alt="">
                    </div>
                </button>
            </div>
            <button>
                <p class="float-left text-[16px] px-[15px] py-[17px] font-semibold leading-[16px] text-[#5E6278]">Çıkış
                    Yap
                </p>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>
