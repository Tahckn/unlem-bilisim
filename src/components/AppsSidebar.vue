<template>
    <Transition>
        <div class="fixed top-[10%] left-0">
            <button @click="toggleNav" v-if="!isActive"
                class="border cursor-pointer border-[#181C32] top-12 bg-[#181C32] rounded-r-[6px]  h-8 w-8 flex items-center absolute p-[5px] left-0">
                <img class="rotate-180 py-1.5 pr-[1px] pl-2" src="/assets/icons/arrow-left.svg" alt="back">
            </button>
        </div>
    </Transition>
    <Transition name="slide">
        <aside v-show="isActive" class="w-[280px] flex flex-shrink-0 gap-y-5 flex-col h-screen bg-[#131313] fixed z-50">
            <!-- Logo -->
            <div class="w-[260px] flex flex-col justify-between h-screen mx-auto">
                <div>
                    <div
                        class="items-center mb-5 relative flex mx-auto justify-center border-b h-[68px] border-[#393945] border-dashed">
                        <img class="px-5 py-[10px]" src="/assets/apps/img/unlem-logo.svg" alt="logo">
                        <!-- Sidebar Toggle  -->
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
                <div
                    class="my-[10px] rounded-md w-240px flex justify-center items-center py-[9px] px-4 bg-white bg-opacity-20">
                    <button class="text-[12px] text-opacity-60 text-white  leading-[20px]">Kullanım Kılavuzu</button>
                    <div></div>
                </div>
            </div>
        </aside>
    </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { isActive: propIsActive } = defineProps(['isActive']);
const emits = defineEmits(['toggle-sidebar']);
const isActive = ref(propIsActive);


const toggleNav = () => {
    isActive.value = !isActive.value;
    emits('toggle-sidebar', isActive.value); // Emit the event to notify the parent component
};

</script> 

<style>
.slide-enter {
    transform: translateX(-100%);
}

.slide-enter-active {
    transition: all .3s ease-in;
}

.slide-leave-active {
    transition: all .3s ease-in;
}

.slide-leave-to {
    transform: translateX(-100%);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

