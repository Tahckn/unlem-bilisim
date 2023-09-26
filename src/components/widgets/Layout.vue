<template>
    <div class="flex flex-row items-start">
        <div class="h-screen fixed z-40">
            <AppsSidebar :isActive="isActive" @toggle-sidebar="updateIsActive" />
        </div>
        <div class="flex flex-col w-full" :class="{ 'ml-[300px]': isActive }">
            <AppsNavbar class="fixed" :class="{ 'pr-[320px]': isActive }" />
            <div class="flex mr-0 md:pr-[68px]">
                <main
                    class="p-[10px] sm:p-[20px] w-full gap-y-[10px] flex flex-col border-x border border-[#F1F1F2] rounded-xl md:mb-0 mb-[68px] mt-[65px] ">
                    <!-- Header Section -->
                    <AppsHeadSection />
                    <!-- Widgets -->
                    <div>
                        <slot></slot> <!-- Router View -->
                    </div>
                </main>
                <AppsSidebarRight />
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import AppsHeadSection from '@/components/AppsHeadSection.vue';
import AppsNavbar from '@/components/AppsNavbar.vue';
import AppsSidebar from '@/components/AppsSidebar.vue';
import AppsSidebarRight from '@/components/AppsSidebarRight.vue';

const isActive = ref(false);
const updateIsActive = (newState: boolean) => {
    isActive.value = newState;
}

</script>
  