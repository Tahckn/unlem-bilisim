<template>
    <section
        class="py-[20px] px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
        <!-- header  -->
        <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
            <div class="flex gap-x-[5px] items-center justify-center">
                <h2 class="text-[#3F4254] text-[18px] font-semibold leading-[16px]">Bağlı Uygulamalar</h2>
                <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
            </div>
            <div class="ml-auto">
                <button
                    class="bg-primary px-[16px] py-[12px] rounded-md text-white leading-[14px] font-semibold text-[13px]">
                    Yeni Ekle
                </button>
            </div>
        </div>
        <!-- Connected Apps  -->
        <div class="flex flex-col gap-y-[20px] w-full border-b pb-[20px]">
            <div class="w-full">
                <button class="flex items-center w-full gap-x-[5px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px] px-[20px] py-[17px] bg-[#F1F1F2] rounded-md">
                    Uygulama
                    <img src="/assets/icons/attention.svg" alt="attention">
                </button>
            </div>
            <!-- Definition of Service  -->
            <div class="w-full flex items-center px-[20px]">
                <p class="text-[#7E8299] text-[14px] font-semibold leading-[14px]">Definition of Service</p>
                <button class="text-[#A1A5B7] bg-[#F9F9F9] text-[14px] font-semibold leading-[14px] items-center flex ml-auto px-[12px] py-[13px] rounded-md gap-x-[10px]">
                    İşlem
                    <img src="/assets/icons/arrow-down.svg" alt="arrow-down">
                </button>
            </div>
            <!-- Localization Service  -->
            <div class="w-full flex items-center px-[20px]">
                <p class="text-[#7E8299] text-[14px] font-semibold leading-[14px]">Localization Service</p>
                <button class="text-[#A1A5B7] bg-[#F9F9F9] text-[14px] font-semibold leading-[14px] items-center flex ml-auto px-[12px] py-[13px] rounded-md gap-x-[10px]">
                    İşlem
                    <img src="/assets/icons/arrow-down.svg" alt="arrow-down">
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>