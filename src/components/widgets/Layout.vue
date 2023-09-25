<template>
    <div class="flex flex-row items-start">
        <AppsSidebar :isActive="isActive" @toggle-sidebar="toggleSidebar" class="h-screen fixed z-40" />
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
import { computed, ref, watchEffect } from 'vue';
import AppsHeadSection from '@/components/AppsHeadSection.vue';
import AppsNavbar from '@/components/AppsNavbar.vue';
import AppsSidebar from '@/components/AppsSidebar.vue';
import AppsSidebarRight from '@/components/AppsSidebarRight.vue';

const isActive = ref(true);

const toggleSidebar = (newState: boolean) => {
    isActive.value = newState;
};

const setSidebarVisibility = () => {
    isActive.value = window.innerWidth >= 768;
};

watchEffect(() => {
    setSidebarVisibility();
});
</script>
  