<template lang="">
    <div v-if="isActiveBackdrop" class="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-30"></div>
    <div @click.stop @click="openNew" class="group cursor-pointer hover:bg-primary/10 transition-transform w-full p-[20px] flex flex-col shadow-sm border items-center justify-center border-gray-200 min-w-[190px] rounded-xl gap-y-[30px] h-full">
       <img class="transition-transform w-7 h-7 group-hover:scale-110 sm:w-8 sm:h-8"  src="/assets/icons/plus-rounded.svg" alt="plus">
    </div>
    <!-- Yeni ekle card  -->
    <Transition>
       <div v-if="isActive"
          class="new-card absolute z-40 top-1/2 left-1/2 transform  flex flex-col items-center justify-between -translate-y-1/2 -translate-x-1/2  bg-white h-auto rounded-md border border-[#E1E3EA] pt-[20px] lg:w-[800px] md:w-[600px] w-full">
          <div class="flex flex-col items-start">
             <!-- header  -->
             <div class="flex justify-between px-[20px] w-full pb-[20px]">
                <div class="flex gap-x-[5px] items-center">
                   <h2 class="text-[12px] md:text-[16px] font-semibold leading-[16px] text-[#181C32]">Yeni
                      Ekle
                   </h2>
                   <img class="w-[14px] h-[14px]" src="/assets/icons/attention.svg" alt="attention">
                </div>
                <!-- Close button  -->
                <img class="cursor-pointer" @click="closeNew" src="/assets/icons/exit-2.svg" alt="exit">
             </div>
             <!-- App Code  -->
             <form @submit.prevent="addApplication">
             <div class="w-full border-t border-[#E1E3EA] px-[20px] py-[20px] flex flex-col gap-y-[10px]">
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center ">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         Uygulama Kodu
                         <span class="text-danger font-semibold">*</span>
                      </p>
                      <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                   </div>
                   <div class="flex-grow">
                      <input required type="text" v-model="applicationData.appCode"
                         class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[7px] md:py-[9px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                   </div>
                </div>
                <!-- App Name  -->
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         Uygulama Adı <span class="text-danger font-semibold">*</span>
                      </p>
                      <img src="/assets/icons/attention.svg"
                         class="w-[20px] h-[20px] text-[12px] font-semibold leading-[12px]" alt="attention">
                   </div>
                   <div class="flex-grow">
                      <input required type="text" v-model="applicationData.appName"
                         class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[6px] md:py-[9px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                   </div>
                </div>
                <!-- Domain  -->
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         Domain <span class="text-danger font-semibold">*</span>
                      </p>
                      <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                   </div>
                   <div class="flex-grow">
                      <input required type="text" v-model="applicationData.domain"
                         class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[6px] md:py-[9px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                   </div>
                </div>
                <!-- Status  -->
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         Durum <span class="text-danger font-semibold">*</span>
                      </p>
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
                <!-- private  -->
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         Durum <span class="text-danger font-semibold">*</span>
                      </p>
                      <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                   </div>
                   <div>
                      <!-- Switch button  -->
                      <label class="relative inline-flex items-center cursor-pointer">
                         <input v-model="applicationData.privated" type="checkbox" value="" class="sr-only peer" checked>
                         <div
                            class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                         </div>
                      </label>
                   </div>
                </div>
                <!-- healthCheck  -->
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         healthCheck <span class="text-danger font-semibold">*</span>
                      </p>
                      <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                   </div>
                   <div>
                      <!-- Switch button  -->
                      <label class="relative inline-flex items-center cursor-pointer">
                         <input v-model="applicationData.healthCheck" type="checkbox" value="" class="sr-only peer" checked>
                         <div
                            class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                         </div>
                      </label>
                   </div>
                </div>
                <!-- healthCheckLink  -->
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         healthCheckLink <span class="text-danger font-semibold">*</span>
                      </p>
                      <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                   </div>
                   <div class="flex-grow">
                      <input type="text" v-model="applicationData.healthCheckLink"
                         class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[6px] md:py-[9px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                   </div>
                </div>
                <!-- healthCheckPeriod  -->
                <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                   <div class="flex w-[175px] gap-x-[5px] items-center">
                      <p
                         class="text-[#5E6278] text-[13px] leading-[12px] md:text-[15px] font-semibold lg:leading-[15px] tracking-[-0.18px]">
                         healthCheckPeriod <span class="text-danger font-semibold">*</span>
                      </p>
                      <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                   </div>
                   <div class="flex-grow">
                      <input type="text" v-model="applicationData.healthCheckPeriod" 
                         class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[6px] md:py-[9px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                   </div>
                </div>
                <div
                   class="pt-[10px] border-t border-[#E1E3EA] items-center px-[20px] flex gap-x-[10px] justify-end">
                   <button @click="closeNew"
                      class="text-[#7E8299] rounded-md bg-[#F9F9F9] md:text-[13px] font-semibold text-[11px] leading-[12px] md:leading-[14px] px-[14px] py-[10px] md:px-[16px] md:py-[12px]">Kapat</button>
                   <button
                      class="text-white rounded-md bg-primary md:text-[13px] font-semibold text-[11px] leading-[12px] md:leading-[14px] px-[14px] py-[10px] md:px-[16px] md:py-[12px]">Ekle</button>
                </div>
             </div>
            </form>
          </div>
       </div>
    </Transition>
 </template>
 
<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { useApplicationsStore } from '@/stores/applicationStore';
import { useNotification } from "@kyvg/vue3-notification";


const { notify } = useNotification();
const store = useApplicationsStore();

const isLoading = computed(() => store.isLoading);
const successMessage = computed(() => store.successMessage);
const error = computed(() => store.error);
const isActive = ref(false);
const isActiveBackdrop = ref(false);




const applicationData = ref({
    logo: "",
    privated: true,
    appName: "",
    appCode: "",
    icon: "",
    domain: "",
    status: true,
    healthCheck: false,
    healthCheckLink: '',
    healthCheckPeriod: 0,
});


// Function to add application 
const addApplication = async () => {
    try {
        const { appCode, appName, domain, icon, status, privated, healthCheck, healthCheckLink, healthCheckPeriod } = applicationData.value;
        // Call the updateApplication function from the store
        await store.createApplication({
            app_key: appCode, // Modify these fields based on your data structure
            name: appName,
            domain: domain,
            icon: icon,
            status: status,
            private: privated,
            healthCheck: healthCheck,
            healthCheckLink: healthCheckLink,
            healthCheckPeriod: healthCheckPeriod
        });

        // Optionally, you can redirect or show a success message here
    } catch (error) {
        console.error("Error updating application details:", error);
        // Handle the error, show a message, or perform other actions as needed
    }
};

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



const openNew = () => {
    isActive.value = true;
    isActiveBackdrop.value = true; // Show the backdrop
};

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


</script>

