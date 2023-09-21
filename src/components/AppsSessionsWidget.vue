<template>
    <section
        class="px-[30px] pb-[42px] pt-[30px] gap-y-[20px] flex flex-col w-full h-[600px] shadow-sm border border-[#F1F1F2] rounded-xl">
        <!-- header  -->
        <div class="flex items-center">
            <div class="flex gap-x-[5px] items-center justify-center">
                <h2 class="text-[#181C32] text-[18px] font-semibold leading-[16px]">Oturumlar</h2>
                <img src="/assets/icons/attention.svg" alt="attention">
            </div>
            <div class="ml-auto flex flex-row gap-x-[20px]">
                <button class="rounded-md px-[12px] flex items-center gap-x-[20px] py-[13px] bg-[#F9F9F9]">
                    <p class="text-[#A1A5B7] text-[12px] font-semibold leading-[12px]">1 Saat</p>
                    <img src="/assets/icons/arrow-down.svg" alt="arrow-down">
                </button>
                <button class="rounded-md bg-primary flex items-center justify-center px-[16px] py-[12px] text-white">
                    <p class="text-[12px] font-semibold leading-[12px]">Filtrele</p>
                </button>
            </div>
        </div>
        <!-- Table Header  -->
        <div
            class="grid grid-cols-5 grid-ga w-full text-[#A1A5B7] py-[17px] px-[20px] rounded-md h-[50px] bg-[#F1F1F2] text-[16px] font-semibold leading-[16px]">
            <div class="flex items-center gap-x-[5px]">
                <p>Konum</p>
                <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
            </div>
            <div class="flex items-center gap-x-[5px]">
                <p>Durum</p>
                <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
            </div>
            <div class="flex items-center gap-x-[5px]">
                <p>Servis</p>
                <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
            </div>
            <div class="flex items-center gap-x-[5px]">
                <p>IP Adresi</p>
                <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
            </div>
            <div class="flex items-center gap-x-[5px]">
                <p> Zaman</p>
                <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
            </div>
        </div>

        <div class="py-[17px] px-[20px] place-items-center justify-items-stretch grid grid-cols-5">
            <p class="text-[#7E8299] font-semibold leading-[14px] text-[14px]">MuhasebeTik</p>
            <p
                class="text-success font-semibold leading-[12px] h-[32px] w-[26px]  flex justify-center items-center rounded-[4px] bg-[#E8FFF3] text-[12px]">
                OK</p>
            <p class="text-[#7E8299] font-semibold leading-[12px] text-[12px]">Authentication</p>
            <p class="text-[#7E8299] font-semibold leading-[14px] text-[14px]">236.125.56.78</p>
            <p class="text-[#7E8299] font-semibold leading-[14px] text-[14px]">05.08.2023 10:34:24</p>
        </div>
        <div class="py-[17px] px-[20px] place-items-center justify-items-stretch grid grid-cols-5">
            <p class="text-[#7E8299] font-semibold leading-[14px] text-[14px]">MuhasebeTik</p>
            <p
                class="text-danger bg-[#FFF5F8] font-semibold leading-[12px] h-[32px] w-[26px]  flex justify-center items-center rounded-[4px]  text-[12px]">
                ERR</p>
            <p class="text-[#7E8299] font-semibold leading-[12px] text-[12px]">Authentication</p>
            <p class="text-[#7E8299] font-semibold leading-[14px] text-[14px]">236.125.56.78</p>
            <p class="text-[#7E8299] font-semibold leading-[14px] text-[14px]">05.08.2023 10:34:24</p>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>