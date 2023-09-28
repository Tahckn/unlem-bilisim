<template>
    <div v-if="isActiveBackdrop" class="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-30"></div>
    <section
        class="py-[20px] relative px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
        <!-- header  -->
        <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
            <div class="flex gap-x-[5px] items-center justify-center">
                <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">Bağlı
                    Uygulamalar</h2>
                <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
            </div>
            <div class="ml-auto">
                <button @click.stop @click="openNew"
                    class="bg-primary px-[14px] py-[10px] md:px-[16px] md:py-[12px] rounded-md text-white text-[11px] leading-[12px] md:leading-[14px] font-semibold md:text-[13px]">
                    Yeni Ekle
                </button>
                <!-- Yeni ekle card  -->
                <Transition>
                    <div v-if="isActive"
                        class="new-card absolute z-40 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-white rounded-md border border-[#E1E3EA] py-[20px] lg:w-[600px] md:w-[500px] w-full">
                        <div class="flex flex-col items-start">
                            <!-- header  -->
                            <div class="flex justify-between px-[20px] w-full pb-[20px]">
                                <div class="flex gap-x-[5px] items-center">
                                    <h2 class="text-[12px] md:text-[16px] font-semibold leading-[16px] text-[#181C32]">Yeni
                                        Ekle</h2>
                                    <img class="w-[14px] h-[14px]" src="/assets/icons/attention.svg" alt="attention">
                                </div>
                                <!-- Close button  -->
                                <img class="cursor-pointer" @click="closeNew" src="/assets/icons/exit-2.svg" alt="exit">
                            </div>
                            <!-- content  -->
                            <div class="w-full border-t border-[#E1E3EA]">
                                <div class="px-[20px] py-[20px] flex flex-col gap-y-[10px]">
                                    <div class="flex space-x-[5px]">
                                        <h3
                                            class="text-[#3F4254] font-semibold text-[11px] leading-[12px] md:leading-[14px] md:text-[13px]">
                                            Uygulama
                                        </h3>
                                        <img class="w-[14px] h-[14px]" src="/assets/icons/attention.svg" alt="attention">
                                    </div>
                                    <div>
                                        <select id="countries" v-model="selectedApplicationId"
                                            class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md">
                                            <option v-for="app in applications" :key="app.id" :value="app.id">
                                                {{ app.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div
                                    class="pt-[10px]  border-t border-[#E1E3EA] items-center px-[20px] flex gap-x-[10px] justify-end">
                                    <button @click="closeNew"
                                        class="text-[#7E8299] rounded-md bg-[#F9F9F9] md:text-[13px] font-semibold text-[11px] leading-[12px] md:leading-[14px] px-[14px] py-[10px] md:px-[16px] md:py-[12px]">Kapat</button>
                                    <button @click="addConnections"
                                        class="text-white rounded-md bg-primary md:text-[13px] font-semibold text-[11px] leading-[12px] md:leading-[14px] px-[14px] py-[10px] md:px-[16px] md:py-[12px]">Ekle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
        <!-- Connected Apps  -->
        <div class="flex flex-col gap-y-[20px] w-full border-b pb-[20px]">
            <div class="w-full">
                <button
                    class="flex items-center w-full gap-x-[5px] text-[#A1A5B7] text-[14px] md:text-[16px] font-semibold leading-[14px] md:leading-[16px] px-[15px] py-[13px] md:px-[20px] md:py-[17px] bg-[#F1F1F2] rounded-md">
                    Uygulama
                    <img src="/assets/icons/attention.svg" alt="attention">
                </button>
            </div>
            <div v-for="app in apiApplications" :key="app.id">
                <!-- Definition of Service  -->
                {{ app.id }}
                <div class="w-full flex items-center justify-between px-[20px]">
                    <p class="text-[#7E8299] md:text-[14px] font-semibold text-[11px] leading-[12px] md:leading-[14px]">
                        {{ app.name }}</p>
                    <div class="flex flex-col gap-y-[2px] items-center">
                        <button @click="toggleButton(app.id)"
                            class="text-[#A1A5B7] bg-[#F9F9F9] relative text-[11px] leading-[12px] md:leading-[14px] font-semibold md:text-[13px] items-center flex ml-auto px-[14px] py-[10px] md:px-[12px] md:py-[13px] rounded-md gap-x-[10px]">
                            İşlem
                            <img src="/assets/icons/arrow-down.svg" alt="arrow-down">
                        </button>
                        <transition>
                            <button v-if="btnActive" @click="removeConnection(app.id)"
                                class="text-white w-full justify-center bg-danger text-[11px] leading-[12px] md:leading-[14px] font-semibold md:text-[13px] items-center flex ml-auto px-[14px] py-[10px] md:px-[12px] md:py-[13px] rounded-md gap-x-[10px]">
                                Sil
                            </button>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useApplicationsStore } from '@/stores/applicationStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useApplicationsStore();
const isActive = ref(false);
const isActiveBackdrop = ref(false);
const selectedApplicationId = ref(null);
const btnActive = ref(false);




const openNew = () => {
    isActive.value = true;
    isActiveBackdrop.value = true; // Show the backdrop
};

const apiApplications = computed(() => store.apiApplications);
const applications = computed(() => store.applications);

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

const closeNew = () => {
    isActive.value = false;
    isActiveBackdrop.value = false; // Hide the backdrop
};

const handleClickOutside = (event: any) => {
    const newCard = document.querySelector(".new-card"); // Adjust the selector as per your actual CSS
    if (newCard && !newCard.contains(event.target)) {
        closeNew();
    }
};


const removeConnection = async (appId) => {
    try {
        await store.deleteConnection(appId);
    } catch (error) {
        console.error('silme hatasi', error);
    }
};


const toggleButton = (id) => {
    btnActive.value = !btnActive.value;
};

const addConnections = async () => {
    try {
        const values = {
            applicationId: selectedApplicationId.value,
            sourceApplicationId: route.params.id
        };
        await store.addConnection(values);
    } catch (error) {
        console.error('Uygulama eklenirken hata olustu');
    }

};



</script>
