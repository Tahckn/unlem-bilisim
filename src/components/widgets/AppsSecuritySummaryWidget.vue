<template>
    <section class="w-full h-auto shadow-sm border flex flex-col gap-y-[30px] border-[#F1F1F2] rounded-xl p-[20px]">
        <!-- header  -->
        <div class="w-full md:flex-row flex-col flex items-center border-b border-[#E1E3EA">
            <!-- App Status  -->
            <div class="flex whitespace-nowrap flex-row pb-[20px] justify-center gap-x-[5px] items-center">
                <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">
                    Uygulama Durumu</h2>
                <img src="/assets/icons/attention.svg" class="w-[22px] h-[22px]" alt="attention">
            </div>

            <!-- tabs -->
            <div class="flex whitespace-nowrap justify-between md:ml-auto flex-row gap-x-[20px] md:gap-x-[40px]">
                <div class="cursor-pointer">
                    <p
                        class="pb-[20px] text-primary text-[14px] md:text-[16px] font-semibold  leading-[16px] border-b border-primary ">
                        Bugün</p>
                </div>
                <div class="cursor-pointer">
                    <p class="pb-[20px] text-[#A1A5B7] text-[14px] md:text-[16px] font-semibold  leading-[16px]">Bu Hafta
                    </p>
                </div>
                <div class="cursor-pointer">
                    <p class="pb-[20px] text-[#A1A5B7] text-[14px] md:text-[16px] font-semibold  leading-[16px]">Bu Ay
                    </p>
                </div>
            </div>
        </div>
        <!-- Tab Status -->
        <div
            class="w-full flex flex-shrink-0 whitespace-nowrap flex-col gap-y-[10px] md:gap-y-[0] md:flex-row justify-between items-center">
            <!-- Basarili islem  -->
            <div
                class="md:w-auto w-full md:px-[30px] lg:px-[50px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[2px] lg:gap-y-[12px] py-[5px] md:py-[20px] justify-center items-center">
                <p
                    class="text-success font-semibold leading-[18px] tracking-[-0.18px] text-[14px] md:text-[15px] lg:text-[18px]">
                    Başarılı
                    İşlem</p>
                <p
                    class="text-[#3F4254] text-[16px] md:text-[24px] lg:text-[38px] font-semibold md:leading-[38px] tracking-[-0.76px]">
                    {{ successfulOperations }}
                </p>
            </div>
            <!-- Basarisiz islem  -->

            <div
                class=" md:w-auto w-full md:px-[30px] lg:px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[2px] lg:gap-y-[12px] py-[5px] md:py-[20px] justify-center items-center">
                <p
                    class="text-danger font-semibold leading-[18px] tracking-[-0.18px] text-[14px] md:text-[15px] lg:text-[18px]">
                    Başarısız
                    İşlem</p>
                <p
                    class="text-[#3F4254] text-[16px] md:text-[24px] lg:text-[38px] font-semibold md:leading-[38px] tracking-[-0.76px]">
                    {{ failedOperations }}
                </p>
            </div>
            <!-- Bir sonraki islem  -->
            <div
                class=" md:w-auto w-full md:px-[30px] lg:px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[2px] lg:gap-y-[12px] py-[5px] md:py-[20px] justify-center items-center">
                <p
                    class="text-warning font-semibold leading-[18px] tracking-[-0.18px] text-[14px] md:text-[15px] lg:text-[18px]">
                    Bekleyen İşlemler</p>
                <p
                    class="text-[#3F4254] text-[16px] md:text-[24px] lg:text-[38px] font-semibold md:leading-[38px] tracking-[-0.76px]">
                    {{ waitingJobs }}</p>
            </div>
        </div>
        <!-- Tab Graph  -->
        <div class="w-full">
            <!-- Graph Header  -->
            <div class="flex-col md:flex-row flex items-center gap-y-[12px]">
                <h2
                    class="text-[#181C32] text-center md:text-left text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">
                    Uygulama İşlem Grafiği
                </h2>
                <div class="md:ml-auto p-[10px] flex-row border-[#F1F1F2] border rounded-md gap-x-[10px] flex">
                    <div class="px-[12px] py-[9px] bg-[#F1F1F2] rounded-md" a>
                        <p class="text-[12px] font-semibold leading-[12px] text-[#7E8299]">Tümü</p>
                    </div>
                    <div class="px-[12px] py-[9px] bg-white rounded-md">
                        <p class="text-[12px] font-semibold leading-[12px] text-[#7E8299]">Cevap Süresi</p>
                    </div>
                    <div class="px-[12px] py-[9px] bg-white rounded-md">
                        <p class="text-[12px] font-semibold leading-[12px] text-[#7E8299]">İstek</p>
                    </div>
                </div>
            </div>
            <!-- Graph  -->
            <div class="w-full h-auto">
                <div id="chart">
                    <VueApexCharts type="area" height="241" :options="chartOptions" :series="chartSeries"></VueApexCharts>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts';
import { useApplicationsStore } from '@/stores/applicationStore';
import moment from 'moment';

const store = useApplicationsStore();
const application = ref(null);

const isLoading = computed(() =>
    store.isLoading
);

onMounted(async () => {
    application.value = await store.applicationById;
});

const healthChecks = computed(() => application.value?.healthChecks || []);
// Successful Operations (initialize as 0)
const successfulOperations = ref(0);
const failedOperations = ref(0);
const waitingJobs = ref(0);
const chartData = ref([]);
const chartDataHeader = ref([]);

// check operations.
watch(healthChecks, () => {
    // Reset counts and waitingJobs
    successfulOperations.value = 0;
    failedOperations.value = 0;
    waitingJobs.value = 0;
    chartData.value = [];
    chartDataHeader.value = [];

    // Check if application and healthChecks are available
    if (application.value && healthChecks.value.length > 0) {
        const firstHealthCheck = healthChecks.value[0];

        // Calculate the next health check time
        const nextHealthCheckTime = moment(firstHealthCheck.endedAt, "YYYY-MM-DD HH:mm:ss")
            .add(application.value.healthCheckPeriod, "seconds")
            .format("DD-MM-YYYY HH:mm:ss");

        // Set waitingJobs to the calculated time
        waitingJobs.value = nextHealthCheckTime;
    }

    // Count successful and failed operations
    for (const healthCheck of healthChecks.value) {
        if (healthCheck.statusCode === "200") {
            successfulOperations.value++;
        } else if (healthCheck.statusCode === "401") {
            failedOperations.value++;
        }
    }

    for (const healthCheck of healthChecks.value) {
        const timings = Number(healthCheck.timing);
        const headers = moment(healthCheck.createdAt).format("DD-MM-YYYY HH:mm:ss");

        chartDataHeader.value.push(headers);
        chartData.value.push(timings);
    }


}, { immediate: true }); // The immediate option ensures that the watcher runs initially

//Chart Table options
const chartOptions = ref({
    chart: {
        id: 'uygulama-islem-grafik',
    },
    xaxis: {
        categories: chartDataHeader,
        tickPlacement:'on',
        labels: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
    },
    toolbar: {
        show: false
    }
});

const chartSeries = ref([
    {
        name: 'Cevaplama Zamaı', // You can change the name as per your data
        data: chartData,
    },
]);
</script>

