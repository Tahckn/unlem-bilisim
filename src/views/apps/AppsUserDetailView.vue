<template>
    <div class="flex flex-row items-start ">
        <div class="flex flex-col w-full">
            <div class="flex">
                <main class="p-[20px] w-full overflow-auto gap-y-[10px] flex flex-col border border-[#F1F1F2] rounded-xl">
                    <!-- Avatar Section  -->
                    <section
                        class="pt-[20px] px-[20px] flex-shrink-0 justify-between md:gap-y-[45px] w-full flex flex-col h-[232px] shadow-sm border border-[#F1F1F2] rounded-xl">
                        <!-- Info Section  -->
                        <div class="flex gap-x-[25px]">
                            <!-- image  -->
                            <div class="relative flex-shrink-0">
                                <img src="/assets/apps/img/user-detail.png" alt="user=image">
                                <!-- Online Notification -->
                                <span
                                    class="absolute w-4 h-4 rounded-full bg-success animate-pulse -right-[8px] bottom-[25%]"></span>
                            </div>
                            <!-- details -->
                            <div class="flex flex-col">
                                <!-- User Name  -->
                                <h2
                                    class="text-[#181C32] text-[18px] font-semibold leading-[18px] pb-[10px] tracking-[-0.18px]">
                                    MuhasebeTik</h2>
                                <!-- Items  -->
                                <div class="flex flex-row gap-x-[15px]  pb-[20px]">
                                    <div class="flex gap-x-[5px] items-center justify-center">
                                        <img src="/assets/icons/home-2.svg" alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[15px] whitespace-nowrap font-semibold leading-[16px]">
                                            Ünlem Bilişim
                                            Teknolojileri A.Ş.</p>
                                    </div>
                                    <div class="flex gap-x-[5px] items-center justify-center">
                                        <img src="/assets/icons/link.svg" alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[15px]  whitespace-nowrap font-semibold leading-[16px]">
                                            muhasebetik.com
                                        </p>
                                    </div>
                                    <div class="flex gap-x-[5px] items-center justify-center">
                                        <img src="/assets/icons/key.svg" alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[15px]  whitespace-nowrap font-semibold leading-[16px]">
                                            Özel Yazılım</p>
                                    </div>
                                </div>
                                <!-- Items 2  -->
                                <div class="flex flex-row gap-x-[20px]">
                                    <div
                                        class="max-w-auto border-[0.5px] gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                                        <!-- MS  -->
                                        <p class="text-success text-[16x] font-semibold leading-[16px]">102 ms</p>
                                        <p
                                            class="text-[#A1A5B7] whitespace-nowrap text-[12px] font-semibold leading-[12px]">
                                            Cevap Süresi</p>
                                    </div>
                                    <!-- Last Request  -->
                                    <div
                                        class="max-w-auto border-[0.5px] gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                                        <p
                                            class="text-[#181C32] whitespace-nowrap text-[16px] font-semibold leading-[16px]">
                                            05.08.2023
                                            10:36:12</p>
                                        <p class="text-[#A1A5B7] text-[12px] font-semibold leading-[12px]">Son İstek</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab Section  -->
                        <div class="flex gap-x-[29px] items-start w-full">
                            <button @click="navGenel" :class="{ 'active': activeButton === 1 }"
                                class="h-[37px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px] whitespace-nowrap flex flex-col pb-[20px] items-center justify-center">Genel
                                Bakış</button>
                            <button @click="navAppInfo" :class="{ 'active': activeButton === 2 }"
                                class="h-[37px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px] whitespace-nowrap flex flex-col pb-[20px] items-center justify-center">Uygulama
                                Bilgileri</button>
                            <button @click="navConnectedApps" :class="{ 'active': activeButton === 3 }"
                                class="h-[37px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px] whitespace-nowrap flex flex-col pb-[20px] items-center justify-center">Bağlı
                                Uygulamalar</button>
                            <button @click="navApiInfo" :class="{ 'active': activeButton === 4 }"
                                class="h-[37px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px] whitespace-nowrap flex flex-col pb-[20px] items-center justify-center">API
                                Bilgileri</button>
                            <button @click="navConfiguration" :class="{ 'active': activeButton === 5 }"
                                class="h-[37px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px] whitespace-nowrap flex flex-col pb-[20px] items-center justify-center">Yapılandırma</button>
                        </div>
                    </section>
                    <!-- Routes  -->
                    <Transition>
                        <!-- Security Summary  -->
                        <AppsSecuritySummaryWidget v-if="route === obj.path1" />
                    </Transition>
                    <Transition>
                        <!-- Whislisht  -->
                        <AppsWhislistWidget v-if="route === obj.path1" />
                    </Transition>
                    <Transition>
                        <!-- Sessions  -->
                        <AppsSessionsWidget v-if="route === obj.path1" />
                    </Transition>
                    <Transition>
                        <!-- App Info  -->
                        <AppInfoWidget v-if="route === obj.path2" />
                    </Transition>
                    <Transition>
                        <!-- Api Info  -->
                        <AppApiInfoWidget v-if="route === obj.path4" />
                    </Transition>

                    <Transition>
                        <!--  Configuration  -->
                        <AppConfigurationWidget v-if="route === obj.path5" />
                    </Transition>

                    <Transition>
                        <!-- <Connected Apps  -->
                        <AppConnectedAppsWidget v-if="route === obj.path3" />
                    </Transition>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import AppsSecuritySummaryWidget from '@/components/widgets/AppsSecuritySummaryWidget.vue';
import AppsWhislistWidget from '@/components/widgets/AppsWhislistWidget.vue';
import AppsSessionsWidget from '@/components/widgets/AppsSessionsWidget.vue';
import AppInfoWidget from '@/components/widgets/AppInfoWidget.vue';
import AppApiInfoWidget from '@/components/widgets/AppApiInfoWidget.vue';
import AppConfigurationWidget from '@/components/widgets/AppConfigurationWidget.vue';
import AppConnectedAppsWidget from '@/components/widgets/AppConnectedAppsWidget.vue'

const obj = reactive({
    path1: 'navGenel',
    path2: 'navAppInfo',
    path3: 'navConnectedApps',
    path4: 'navApiInfo',
    path5: 'navConfiguration',
});

const route = ref(obj.path1);

const navGenel = () => {
    route.value = obj.path1;
};

const navAppInfo = () => {
    route.value = obj.path2;
};
const navConnectedApps = () => {
    route.value = obj.path3;
};
const navApiInfo = () => {
    route.value = obj.path4;
};
const navConfiguration = () => {
    route.value = obj.path5;
};

const activeButton = computed(() => {
    if (route.value === obj.path1) return 1;
    if (route.value === obj.path2) return 2;
    if (route.value === obj.path3) return 3;
    if (route.value === obj.path4) return 4;
    if (route.value === obj.path5) return 5;
});

</script>

<style>
.active {
    border-bottom: 1px solid #3E97FF;
    color: #3E97FF;
}
</style>