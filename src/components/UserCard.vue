<template>
    <div class="py-5 rounded-xl sm:w-auto z-30 drop-shadow-lg bg-background w-[300px] px-[20px] flex flex-col gap-y-[20px] items-start justify-center">
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
        <div class="flex flex-col border-b w-full border-[#E1E3EA]">
            <p class="text-[16px] px-[15px] py-[17px] self-stretch font-semibold leading-[16px] text-[#5E6278]">Bilgilerim
            </p>
            <p class="text-[16px] px-[15px] py-[17px] self-stretch font-semibold leading-[16px] text-[#5E6278]">İşlem
                Geçmişi</p>
        </div>
        <div class="flex flex-col w-full">
            <div class="flex items-center justify-between">
                <p class="text-[16px] px-[15px] py-[17px] self-stretch font-semibold leading-[16px] text-[#5E6278]">Dil
                    Tercihi</p>
                    <div class="bg-[#F9F9F9] rounded flex gap-x-[10px] p-[5px]">
                        <p class="text-[#5E6278] text-[12px] font-semibold leading-[12px]">English</p>
                        <img src="/assets/apps/img/america.png" alt="">
                    </div>
            </div>
            <p class="text-[16px] px-[15px] py-[17px] self-stretch font-semibold leading-[16px] text-[#5E6278]">Çıkış Yap
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
