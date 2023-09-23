<template>
    <section
        class="px-[15px] md:px-[30px] pb-[42px] pt-[30px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
        <!-- header  -->
        <div class="flex items-center">
            <div class="flex gap-x-[5px] items-center justify-center">
                <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">Oturumlar</h2>
                <img src="/assets/icons/attention.svg" alt="attention">
            </div>
            <div class="ml-auto whitespace-nowrap flex flex-row  gap-x-[15px] md:gap-x-[20px]">
                <button class="rounded-md px-[8px] md:px-[12px] flex items-center gap-x-[12px] md:gap-x-[20px] py-[9px] md:py-[13px] bg-[#F9F9F9]">
                    <p class="text-[#A1A5B7] text-[12px] font-semibold leading-[12px]">1 Saat</p>
                    <img src="/assets/icons/arrow-down.svg" alt="arrow-down">
                </button>
                <button class="rounded-md bg-primary flex items-center justify-center px-[16px] py-[12px] text-white">
                    <p class="text-[12px] font-semibold leading-[12px]">Filtrele</p>
                </button>
            </div>
        </div>
        <!-- Table Header  -->
        <div class="overflow-x-auto w-full">
            <div
                class="flex flex-row min-w-fit whitespace-nowrap justify-between gap-x-[23px] w-full text-[#A1A5B7] py-[17px] px-[20px] rounded-md h-[50px] bg-[#F1F1F2] text-[14px] md:text-[16px] font-semibold leading-[16px]">
                <div class="flex items-center min-w-[122px] gap-x-[5px] flex-shrink-0">
                    <p>Konum</p>
                    <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
                </div>
                <div class="flex items-center min-w-[122px] gap-x-[5px] flex-shrink-0">
                    <p>Durum</p>
                    <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
                </div>
                <div class="flex items-center min-w-[122px] gap-x-[5px] flex-shrink-0">
                    <p>Servis</p>
                    <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
                </div>
                <div class="flex items-center min-w-[122px] gap-x-[5px] flex-shrink-0">
                    <p>IP Adresi</p>
                    <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
                </div>
                <div class="flex items-center min-w-[150px] gap-x-[5px] flex-shrink-0">
                    <p>Zaman</p>
                    <img src="/assets/icons/attention.svg" class="w-[13px] h-[13px]" alt="attention">
                </div>
            </div>
            <!-- Table Content 1-->
            <div
                class="py-[17px] px-[20px] place-items-center whitespace-nowrap justify-items-stretch flex flex-row justify-between flex-shrink-0 gap-x-[23px] w-full">
                <p class="text-[#7E8299] min-w-[122px] text-[12px] font-semibold leading-[14px] md:text-[14px]">MuhasebeTik</p>
                <div class="min-w-[122px]">
                    <p
                        class="text-success text-[12px] font-semibold leading-[12px] h-[32px] w-[26px]  flex justify-center items-center rounded-[4px] bg-[#E8FFF3]">
                        OK</p>
                </div>
                <p class="text-[#7E8299] min-w-[122px] text-[12px] font-semibold leading-[12px] md:text-[14px]">Authentication</p>
                <p class="text-[#7E8299] min-w-[122px] text-[12px] font-semibold leading-[14px] md:text-[14px]">236.125.56.78</p>
                <p class="text-[#7E8299] min-w-[150px] text-[12px] font-semibold leading-[14px] md:text-[14px]">05.08.2023 10:34:24</p>
            </div>
            <!-- Table Content 2-->
            <div
                class="py-[17px] px-[20px] place-items-center whitespace-nowrap justify-items-stretch flex flex-row justify-between flex-shrink-0 gap-x-[23px] w-full">
                <p class="text-[#7E8299] min-w-[122px] text-[12px] font-semibold leading-[14px] md:text-[14px]">MuhasebeTik</p>
                <div class="min-w-[122px]">
                    <p
                        class="text-danger text-[12px] font-semibold leading-[12px] h-[32px] w-[26px]  flex justify-center items-center rounded-[4px] bg-[#FFF5F8]">
                        ERR</p>
                </div>
                <p class="text-[#7E8299] min-w-[122px] text-[12px] font-semibold leading-[12px] md:text-[14px]">Authentication</p>
                <p class="text-[#7E8299] min-w-[122px] text-[12px] font-semibold leading-[14px] md:text-[14px]">236.125.56.78</p>
                <p class="text-[#7E8299] min-w-[150px] text-[12px] font-semibold leading-[14px] md:text-[14px]">05.08.2023 10:34:24</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>