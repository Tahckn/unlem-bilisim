<template>
    <div class="flex flex-row items-start">
        <div class="flex flex-col w-full">
            <div class="flex">
                <main class="p-[20px] w-full overflow-auto gap-y-[10px] flex flex-col border border-[#F1F1F2] rounded-xl">
                    <!-- Avatar Section  -->
                    <section
                        class="pt-[20px] px-[20px] overflow-hidden flex-shrink-0 justify-between sm:gap-y-[23px] md:gap-y-[45px] w-full flex flex-col h-[232px] shadow-sm border border-[#F1F1F2] rounded-xl relative">
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
                                <div class="flex">
                                    <h2
                                        class="text-[#181C32] text-[14px] md:text-[18px] leading-[14px] font-semibold md:leading-[18px] pb-[10px] tracking-[-0.18px]">
                                        {{ application?.name }}
                                    </h2>

                                    <p @click="removeApplication"
                                        class="bg-danger font-semibold cursor-pointer text-[14px] leading-[14px] text-white rounded-lg hover:bg-danger/70 px-3 py-2 absolute top-[40%] sm:top-[55%] sm:right-[3%] md:top-0 md:right-0 right-0">
                                        sil
                                    </p>

                                </div>
                                <!-- Items  -->
                                <div
                                    class="flex gap-y-[2px] flex-shrink-0 flex-col items-start md:items-center md:flex-row gap-x-[15px] pb-[20px]">
                                    <div class="flex flex-shrink-0 gap-x-[5px] items-center justify-center">
                                        <img class="w-[15px] h-[15px] md:w-[21px] md:h-[21px]"
                                            src="/assets/icons/home-2.svg" alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[12px] md:text-[15px] whitespace-nowrap font-semibold leading-[16px]">
                                            Ünlem Bilişim
                                            Teknolojileri A.Ş.</p>
                                    </div>
                                    <div class="flex flex-shrink-0 gap-x-[5px] items-center justify-center">
                                        <img class="w-[15px] h-[15px] md:w-[21px] md:h-[21px]" src="/assets/icons/link.svg"
                                            alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[12px] md:text-[15px]  whitespace-nowrap font-semibold leading-[16px]">
                                            {{ application?.domain }}
                                        </p>
                                    </div>
                                    <div class="flex flex-shrink-0 gap-x-[5px] items-center justify-center">
                                        <img class="w-[15px] h-[15px] md:w-[21px] md:h-[21px]" src="/assets/icons/key.svg"
                                            alt="home">
                                        <p
                                            class="text-[#A1A5B7] text-[12px] md:text-[15px]  whitespace-nowrap font-semibold leading-[16px]">
                                            Özel Yazılım</p>
                                    </div>
                                </div>
                                <!-- Items -->
                                <div class="flex flex-row gap-x-[10px] md:gap-x-[20px]">
                                    <!-- Response Time -->
                                    <div
                                        class="max-w-auto border-[0.5px] gap-y-[8px] md:gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                                        <!-- MS  -->
                                        <p
                                            class="text-success whitespace-nowrap text-[12px] leading-[12px]  md:text-[16px] font-semibold md:leading-[16px]">
                                            {{ getMs() }} ms</p>
                                        <p
                                            class="text-[#A1A5B7] whitespace-nowrap text-[10px] leading-[10px] md:text-[12px] font-semibold md:leading-[12px]">
                                            Cevap Süresi</p>
                                    </div>
                                    <!-- Last Request  -->
                                    <div
                                        class="max-w-auto border-[0.5px] gap-y-[8px] md:gap-y-[5px] border-[#D8D8E5] border-dashed rounded-md px-[15px] py-[11px] flex flex-col items-start">
                                        <p
                                            class="text-[#181C32] whitespace-nowrap leading-[12px] text-[12px] md:text-[16px] font-semibold md:leading-[16px]">
                                            {{ getLastRequest() }}</p>
                                        <p
                                            class="text-[#A1A5B7] text-[10px] leading-[10px] md:text-[12px] font-semibold md:leading-[12px]">
                                            Son İstek</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tab Section  -->
                        <!-- !add icon  -->

                        <div
                            class="flex sm:gap-x-[20px] md:gap-x-[29px] items-center justify-between sm:items-start w-full">
                            <!-- GENEL BAKIS  -->
                            <div>
                                <router-link :to="{ name: 'GeneralOverview' }">
                                    <button :class="{ active: isActive('Genel Bakış') }"
                                        class="h-[37px] text-[#A1A5B7] sm:text-[13px] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Genel
                                        Bakış</button>
                                </router-link>
                                <router-link :to="{ name: 'GeneralOverview' }">
                                    <button :class="{ active: isActive('Genel Bakış') }">
                                        <img class="inline-block mb-2 sm:hidden w-4 h-4" src="/assets/icons/eye.svg"
                                            alt="icon">
                                    </button>
                                </router-link>
                            </div>
                            <!-- UYGULAMA BILGILERI  -->
                            <div>
                                <router-link :to="{ name: 'ApplicationInfo' }">
                                    <button :class="{ active: isActive('Uygulama Bilgileri') }"
                                        class="h-[37px] text-[#A1A5B7] sm:text-[13px] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Uygulama
                                        Bilgileri</button>
                                </router-link>
                                <router-link :to="{ name: 'ApplicationInfo' }">
                                    <button :class="{ active: isActive('Uygulama Bilgileri') }">
                                        <img class="inline-block mb-2 sm:hidden w-4 h-4" src="/assets/icons/information.svg"
                                            alt="icon">
                                    </button>
                                </router-link>
                            </div>
                            <!-- BAGLI UYGULAMALAR -->
                            <div>
                                <router-link :to="{ name: 'ConnectedApplications' }">
                                    <button :class="{ active: isActive('Bağlı Uygulamalar') }"
                                        class="h-[37px] text-[#A1A5B7] sm:text-[13px] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Bağlı
                                        Uygulamalar</button>
                                </router-link>
                                <router-link :to="{ name: 'ConnectedApplications' }">
                                    <button :class="{ active: isActive('Bağlı Uygulamalar') }">
                                        <img class="inline-block mb-2 sm:hidden w-4 h-4" src="/assets/icons/connected.svg"
                                            alt="icon">
                                    </button>
                                </router-link>
                            </div>
                            <div>
                                <!-- API BILGILERI  -->
                                <router-link :to="{ name: 'APIInfo' }">
                                    <button :class="{ active: isActive('API Bilgileri') }"
                                        class="h-[37px] text-[#A1A5B7] sm:text-[13px] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">API
                                        Bilgileri</button>
                                </router-link>
                                <router-link :to="{ name: 'APIInfo' }">
                                    <button :class="{ active: isActive('API Bilgileri') }">
                                        <img class="inline-block mb-2 sm:hidden w-4 h-4" src="/assets/icons/api.svg"
                                            alt="icon">
                                    </button>
                                </router-link>
                            </div>
                            <div>
                                <!-- YAPILANDIRMA  -->
                                <router-link :to="{ name: 'Configuration' }">
                                    <button :class="{ active: isActive('Yapılandırma') }"
                                        class="h-[37px] text-[#A1A5B7] sm:text-[13px] md:text-[16px] font-semibold leading-[12px] md:leading-[16px] whitespace-nowrap hidden sm:flex flex-col pb-[20px] items-center justify-center">Yapılandırma</button>
                                </router-link>
                                <router-link :to="{ name: 'Configuration' }">
                                    <button :class="{ active: isActive('Yapılandırma') }">
                                        <img class="inline-block mb-2 sm:hidden w-4 h-4"
                                            src="/assets/icons/configuration.svg" alt="icon">
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </section>
                    <!-- Routes  -->
                    <RouterView />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute, RouterLink } from 'vue-router';
import { getAppDetailsById } from '@/api';
import { computed, onMounted, ref, watch } from 'vue';
import { notify } from '@kyvg/vue3-notification';
import moment from 'moment';
import { useApplicationsStore } from '@/stores/applicationStore';
const route = useRoute();
const store = useApplicationsStore();
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

// Function to update application details
const removeApplication = async () => {
    try {
        const id = route.params.id;
        // Call the delete function from the store
        await store.deleteApplication(id);

        // Optionally, you can redirect or show a success message here
    } catch (error) {
        console.error("Error updating application details:", error);
        // Handle the error, show a message, or perform other actions as needed
    }
};



// loading state
const isLoading = ref(false);


// get id from route
const id = route.params.id;
const application = ref<Application | null>(null);


// Define TypeScript interfaces
interface Application {
    // Define your application properties here
    id: number;
    name: string;
    domain: string;
    healthChecks: HealthCheck[];
}

// Define HealthCheck interface if not already defined in your API
interface HealthCheck {
    // Define health check properties here
    timing: number;
    endedAt: string;
    // Add other properties as needed
}


//GET APP DETAILS
onMounted(async () => {
    try {
        isLoading.value = true;
        const appData = await getAppDetailsById(id);
        application.value = appData;
    } catch (error) {
        console.error('Error:', error);
    } finally {
        isLoading.value = false;
    }
});

//Cevap Suresi
const getMs = () => {
    if (application.value?.healthChecks && application.value.healthChecks.length > 0) {
        const lastCheck = application.value.healthChecks[0];
        const ms = lastCheck.timing;
        return ms;
    } else return '-';
};

// Son istek
const getLastRequest = () => {
    if (application.value?.healthChecks && application.value.healthChecks.length > 0) {
        const lastCheck = application.value.healthChecks[0];
        const LastRequest = moment(lastCheck.endedAt).format("DD-MM-YYYY HH:mm:ss");
        return LastRequest;
    } else return '-';
};


const routes = {
    GeneralOverview: 'Genel Bakış',
    ApplicationInfo: 'Uygulama Bilgileri',
    ConnectedApplications: 'Bağlı Uygulamalar',
    APIInfo: 'API Bilgileri',
    Configuration: 'Yapılandırma',
};

//type assertion in TypeScript
//This ensures TypeScript understands that route.name is used as an index to access the routes object.
const isActive = (routeName: string) => {
    return routeName === routes[route.name as keyof typeof routes];
};

</script>

<style scoped>
.active {
    border-bottom: 2px solid #3E97FF;
    color: #3E97FF;
}

.active img {
    filter: invert(41%) sepia(81%) saturate(1497%) hue-rotate(202deg) brightness(94%) contrast(88%);
    /* You can adjust the filter values to get the desired color effect */
}

button.active,
button:not(.active) {
    background-color: white;
}
</style>