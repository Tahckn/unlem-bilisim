
<template >
    <!-- Web  -->
    <Transition>
        <div v-show="isActive" class="fixed top-0 right-0 mt-[65px] bg-background h-screen border-l border-[#F1F1F2]">
            <aside class="w-[68px] px-[10px] py-[20px]">
                <div class="flex gap-y-[10px] flex-col">
                    <img class="p-[8px]" src="/assets/icons/calendar.svg" alt="calendar">
                    <img class="p-[8px]" src="/assets/icons/users.svg" alt="calendar">
                    <img class="p-[8px]" src="/assets/icons/cube.svg" alt="calendar">
                    <img class="p-[8px]" src="/assets/icons/plus.svg" alt="calendar">
                </div>
            </aside>
        </div>
    </Transition>
    <Transition>
        <div v-show="!isActive" class="fixed top-[10%] right-[35px]">
            <button @click="toggleNav"
                class="border cursor-pointer border-[#181C32] top-12 bg-[#181C32] rounded-l-[6px]  h-8 w-8 flex items-center absolute p-[5px] ">
                <img class="py-1.5 pr-[1px] pl-2" src="/assets/icons/arrow-left.svg" alt="back">
            </button>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isActive = ref(true);
const openedManually = ref(false);

const toggleNav = () => {
    if (!isActive.value) {
        // Sidebar is closed, open it manually
        isActive.value = true;
        openedManually.value = true;
    } else {
        // Sidebar is open, toggle it
        isActive.value = !isActive.value;
    }
};

const checkWindowWidth = () => {
    if (window.innerWidth < 768 && !openedManually.value) {
        // Close the sidebar only if it wasn't opened manually
        isActive.value = false;
    } else if (window.innerWidth >= 768) {
        // Open the sidebar if the window width is above or equal to 768px
        isActive.value = true;
    }
};

// Add event listeners when the component is mounted and remove them when unmounted
onMounted(() => {
    checkWindowWidth(); // Initial check

    // Add a window resize event listener
    window.addEventListener('resize', checkWindowWidth);
});

onBeforeUnmount(() => {
    // Remove the window resize event listener when the component is unmounted
    window.removeEventListener('resize', checkWindowWidth);
});
</script>
