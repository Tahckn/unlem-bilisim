<template>
    <div class="flex flex-row items-start md:mr-[68px]">
        <div class="flex flex-col w-full">
            <div class="flex">
                <main class="p-[20px] w-full overflow-auto gap-y-[10px] flex flex-col border border-[#F1F1F2] rounded-xl">
                    <!-- Avatar Section  -->
                    <section
                        class="pt-[20px] px-[20px] overflow-hidden flex-shrink-0 justify-between sm:gap-y-[23px] md:gap-y-[45px] w-full flex flex-col h-[232px] shadow-sm border border-[#F1F1F2] rounded-xl">
                        <!-- Info Section  -->
                        <div class="flex gap-x-[25px] md:items-start relative">
                            <!-- image  -->
                            <div class="absolute md:relative rounded-md top-0 right-0">
                                <div
                                    class="relative flex-shrink-0 md:w-[120px] md:h-[120px] sm:w-[70px] sm:h-[70px] w-[40px] h-[40px]">
                                    <img class="md:rounded-md rounded-full" src="/assets/apps/img/user-detail.png"
                                        alt="user=image">
                                    <!-- Online Notification -->
                                    <span
                                        class="absolute md:w-4 md:h-4 sm:h-3 sm:w-3 h-2 w-2 rounded-full bg-success animate-pulse sm:top-2 md:-right-[8px] top-0 md:top-auto md:bottom-[25%]"></span>
                                </div>
                            </div>
                            <!-- details -->
                            <div class="flex flex-col">
                                <!-- User Name  -->
                                <h2
                                    class="text-[#181C32] text-[14px] md:text-[18px] leading-[14px] font-semibold md:leading-[18px] pb-[10px] tracking-[-0.18px]">
                                    MuhasebeTik</h2>
                                <!-- Items  -->
                                <div
                                    class="flex gap-y-[2px] flex-shrink-0 flex-col items-start md:items-center md:flex-row gap-x-[15px] pb-[20px]">
                                    <div class="flex flex-shrink-0 gap-x-[5px] items-center justify-center">
                                        <img class="w-[15px] h-[15px] md:w-[21px] md:h-[21px]"
                                            src="/assets/icons/home-2.svg" alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[13px] md:text-[15px] whitespace-nowrap font-semibold leading-[16px]">
                                            Ünlem Bilişim
                                            Teknolojileri A.Ş.</p>
                                    </div>
                                    <div class="flex flex-shrink-0 gap-x-[5px] items-center justify-center">
                                        <img class="w-[15px] h-[15px] md:w-[21px] md:h-[21px]" src="/assets/icons/link.svg"
                                            alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[13px] md:text-[15px]  whitespace-nowrap font-semibold leading-[16px]">
                                            muhasebetik.com
                                        </p>
                                    </div>
                                    <div class="flex flex-shrink-0 gap-x-[5px] items-center justify-center">
                                        <img class="w-[15px] h-[15px] md:w-[21px] md:h-[21px]" src="/assets/icons/key.svg"
                                            alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[13px] md:text-[15px]  whitespace-nowrap font-semibold leading-[16px]">
                                            Özel Yazılım</p>
                                    </div>
                                </div>
                                <!-- Items -->
                                <div class="flex md:flex-row gap-x-[10px] md:gap-x-[20px]">
                                    <!-- Response Time -->
                                    <div
                                        class="max-w-auto border-[0.5px] gap-y-[8px] md:gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                                        <!-- MS  -->
                                        <p
                                            class="text-success whitespace-nowrap text-[12px] leading-[12px]  md:text-[16px] font-semibold md:leading-[16px]">
                                            102 ms</p>
                                        <p
                                            class="text-[#A1A5B7] whitespace-nowrap text-[10px] leading-[10px] md:text-[12px] font-semibold md:leading-[12px]">
                                            Cevap Süresi</p>
                                    </div>
                                    <!-- Last Request  -->
                                    <div
                                        class="max-w-auto border-[0.5px] gap-y-[8px] md:gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                                        <p
                                            class="text-[#181C32] whitespace-nowrap leading-[12px] text-[12px] md:text-[16px] font-semibold md:leading-[16px]">
                                            05.08.2023
                                            10:36:12</p>
                                        <p
                                            class="text-[#A1A5B7] text-[10px] leading-[10px] md:text-[12px] font-semibold md:leading-[12px]">
                                            Son İstek</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab Section  -->
                        <div class="flex sm:gap-x-[20px] md:gap-x-[29px] items-center justify-between sm:items-start w-full">
                            <div>
                                <button @click="navGenel" :class="{ 'active': activeButton === 1 }"
                                    class="h-[37px] text-[#A1A5B7] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Genel
                                    Bakış</button>
                                <button @click="navGenel" :class="{ 'active': activeButton === 1 }">
                                    <img class="inline-block sm:hidden w-3.5 h-3.5" src="/assets/icons/arrow-down.svg" alt="icon">
                                </button>
                            </div>

                            <div>
                                <button @click="navAppInfo" :class="{ 'active': activeButton === 2 }"
                                    class="h-[37px] text-[#A1A5B7] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Uygulama
                                    Bilgileri</button>
                                <button @click="navAppInfo" :class="{ 'active': activeButton === 2 }">
                                    <img class="inline-block sm:hidden w-3.5 h-3.5" src="/assets/icons/arrow-down.svg" alt="icon">
                                </button>
                            </div>
                            <div>
                                <button @click="navConnectedApps" :class="{ 'active': activeButton === 3 }"
                                    class="h-[37px] text-[#A1A5B7] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Bağlı
                                    Uygulamalar</button>
                                <button @click="navConnectedApps" :class="{ 'active': activeButton === 3 }">
                                    <img class="inline-block sm:hidden w-3.5 h-3.5" src="/assets/icons/arrow-down.svg" alt="icon">
                                </button>
                            </div>
                            <div>
                                <button @click="navApiInfo" :class="{ 'active': activeButton === 4 }"
                                    class="h-[37px] text-[#A1A5B7] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">API
                                    Bilgileri</button>
                                <button @click="navApiInfo" :class="{ 'active': activeButton === 4 }">
                                    <img class="inline-block sm:hidden w-3.5 h-3.5" src="/assets/icons/arrow-down.svg" alt="icon">
                                </button>
                            </div>
                            <div>
                                <button @click="navConfiguration" :class="{ 'active': activeButton === 5 }"
                                    class="h-[37px] text-[#A1A5B7] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Yapılandırma</button>
                                <button @click="navConfiguration" :class="{ 'active': activeButton === 5 }">
                                    <img class="inline-block sm:hidden w-3.5 h-3.5" src="/assets/icons/arrow-down.svg" alt="icon">
                                </button>
                            </div>
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
import AppConnectedAppsWidget from '@/components/widgets/AppConnectedAppsWidget.vue';

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