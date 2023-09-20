<template>
    <div class="flex flex-row items-start ">
        <AppsSidebar class="z-10 h-screen" />
        <div class="flex flex-col w-full">
            <AppsNavbar class="z-20" />
            <div class="flex">
                <main
                    class="p-[20px] w-full h-[calc(100vh-65px)] gap-y-[30px] flex flex-col border border-[#F1F1F2] rounded-xl drop-shadow-md">
                    <!-- Head Section  -->
                    <div class="flex flex-col gap-y-[11px]">
                        <div class="flex gap-x-[8px]">
                            <img src="/assets/icons/home.svg" alt="breadcrumb">
                            <img src="/assets/icons/arrow-right-2.svg" alt="breadcrumb">
                            <h3 class="text-[#3F4254] text-[13px] font-semibold leading-[14px]">Uygulamalar</h3>
                        </div>
                        <div class="flex items-center js gap-x-[4px]">
                            <h1 class="text-[#181C32] text-[22px] font-semibold leading-[22px] tracking-[-0.22px]">
                                Uygulamalar</h1>
                            <img src="/assets/icons/attention.svg" alt="attention">
                        </div>
                    </div>
                    <div class="flex flex-row gap-x-[30px]">
                        <div class="rounded-xl border border-[#F1F1F2] drop-shadow-sm w-[331px] h-[287px]"></div>
                        <div class="rounded-xl border border-[#F1F1F2] drop-shadow-sm w-[331px] h-[287px]"></div>
                        <div class="rounded-xl border border-[#F1F1F2] drop-shadow-sm w-[331px] h-[287px]"></div>
                    </div>
                    <div class="w-full rounded-xl border border-[#F1F1F2] drop-shadow-sm h-[287px]">
                    </div>
                    <div class="flex flex-row gap-x-[30px]">
                        <div class="rounded-xl border border-[#F1F1F2] drop-shadow-sm w-[331px] h-[287px]"></div>
                        <div class="rounded-xl border border-[#F1F1F2] drop-shadow-sm w-[331px] h-[287px]"></div>
                        <div class="rounded-xl border border-[#F1F1F2] drop-shadow-sm w-[331px] h-[287px]"></div>
                    </div>
                </main>
                <AppsSidebarRight />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppsNavbar from '@/components/AppsNavbar.vue';
import AppsSidebar from '@/components/AppsSidebar.vue';
import AppsSidebarRight from '@/components/AppsSidebarRight.vue';
</script>
