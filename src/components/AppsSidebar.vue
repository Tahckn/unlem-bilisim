<template>
    <aside v-show="isActive" class="w-[280px] flex flex-shrink-0 gap-y-5 flex-col h-screen bg-[#131313]">
        <!-- Logo -->
        <div class="w-[260px] flex flex-col justify-between h-screen mx-auto">
            <div>
                <div
                    class="items-center mb-5 relative flex mx-auto justify-center border-b h-[68px] border-[#393945] border-dashed">
                    <img class="px-5 py-[10px]" src="/assets/apps/img/unlem-logo.svg" alt="logo">
                    <button @click="toggleNav"
                        class="border cursor-pointer border-white bg-white rounded-l-[6px]  h-8 w-8 flex items-center absolute p-[5px] -right-6">
                        <img class="py-1.5 pl-[1px] pr-2" src="/assets/icons/arrow-left.svg" alt="back">
                    </button>
                </div>

                <!-- Items  -->
                <div class="px-5 pb-5 flex flex-col gap-y-[5px]">
                    <div>
                        <h2 class="text-[13px] font-semibold leading-[14px] text-[#7E8299]">Menüler</h2>
                    </div>
                    <!-- Uygulamalar -->
                    <div class="py-3 cursor-pointer">
                        <div class="flex items-center flex-row gap-x-[12px]">
                            <img src="/assets/icons/apps-2.svg" alt="">
                            <h2 class="text-[#E1E3EA] text-[16px] font-semibold leading-[16px]">Uygulamalar</h2>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kullanim klavuzu  -->
            <div class="my-[10px] rounded-md w-240px flex justify-center items-center py-[9px] px-4 bg-white bg-opacity-20">
                <button class="text-[12px] text-opacity-60 text-white  leading-[20px]">Kullanım Kılavuzu</button>
                <div></div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(true);

const toggleNav = () => {
    isActive.value = !isActive.value;
}
</script>


