<template>
    <section class="w-full h-auto shadow-sm border flex flex-col gap-y-[30px] border-[#F1F1F2] rounded-xl p-[20px]">
        <!-- header  -->
        <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
            <div class="flex gap-x-[5px] items-center justify-center">
                <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">
                    Uygulama Bilgileri</h2>
                <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
            </div>
        </div>
        <!-- Profile Details  -->
        <div class="flex flex-col gap-y-[20px] w-full border-b pb-[20px]">
            <!-- Logo  -->
            <div class="flex flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px] items-start">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p
                        class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px]">
                        Logo <span class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
                <div>
                    <div class="relative">
                        <img class="pb-[15px] w-[60px] md:w-[90px]" src="/assets/apps/img/user-red.png" alt="user-img">
                        <div
                            class="absolute md:-bottom-1 md:left-5 md:top-auto top-0 left-10 drop-shadow-md flex flex-col md:flex-row">
                            <img src="/assets/icons/Close.svg" alt="close">
                            <img src="/assets/icons/Edit.svg" alt="edit">
                        </div>
                    </div>
                    <p class="text-[#A1A5B7] text-[10px] font-semibold leading-[10px] tracking-[-0.3px]">İzin verilen dosya
                        türleri: png, jpg, jpeg.</p>
                </div>
            </div>
            <!-- App Code  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center ">
                    <p
                        class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px]">
                        Uygulama Kodu
                        <span class="text-danger font-semibold">*</span>
                    </p>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
                <div class="flex-grow">
                    <input type="text" v-model="applicationData.appCode"
                        class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                </div>
            </div>
            <!-- App Name  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p
                        class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px]">
                        Uygulama Adı <span class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg"
                        class="w-[20px] h-[20px] text-[12px] font-semibold leading-[12px]" alt="attention">
                </div>
                <div class="flex-grow">
                    <input type="text" v-model="applicationData.appName"
                        class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                </div>
            </div>
            <!-- Domain  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p
                        class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px]">
                        Domain <span class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
                <div class="flex-grow">
                    <input type="text" v-model="applicationData.domain"
                        class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                </div>
            </div>
            <!-- Status  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p
                        class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px]">
                        Durum <span class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
                <div>
                    <!-- Switch button  -->
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input v-model="applicationData.status" type="checkbox" value="" class="sr-only peer" checked>
                        <div
                            class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                        </div>
                    </label>
                </div>
            </div>

        </div>
        <div>
            <button @click="updateAppDetails" :class="{ 'disabled': isLoading }"
                class="text-[12px] leading-[12px] md:text-[16px] float-right font-semibold md:leading-[16px] px-[16px] md:px-[24px] py-[10px] md:py-[16px] bg-primary rounded-md text-white ">Bilgileri
                Güncelle</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useApplicationsStore } from '@/stores/applicationStore';
import { useNotification } from "@kyvg/vue3-notification";


const { notify } = useNotification();
const store = useApplicationsStore();
const route = useRoute();

const isLoading = computed(() => store.isLoading);
const successMessage = computed(() => store.successMessage);
const error = computed(() => store.error);

//notify when update succesful
watch(successMessage, (newValue) => {
    if (newValue) {
        notify({
            type: "success",
            title: "Güncelleme",
            text: "Uygulama Bilgileri Başarıyla Güncellendi",
        });
    }
});

//notify when update succesful
watch(error, (newValue) => {
    if (newValue) {
        notify({
            type: "warn",
            title: "Güncelleme",
            text: "Uygulama Bilgileri Güncellenemedi",
        });
    }
});



const applicationData = ref({
    logo: "",
    appCode: "",
    appName: "",
    domain: "",
    status: true,
});


// *tomorrow 
// Function to update application details
const updateAppDetails = async () => {
    try {
        const { logo, appCode, appName, domain, status } = applicationData.value;
        const id = route.params.id;

        // Call the updateApplication function from the store
        await store.updateApplication(id, {
            app_key: appCode, // Modify these fields based on your data structure
            name: appName,
            domain: domain,
            icon: logo,
            status: status,
        });

        // Optionally, you can redirect or show a success message here
    } catch (error) {
        console.error("Error updating application details:", error);
        // Handle the error, show a message, or perform other actions as needed
    }
};

</script>
