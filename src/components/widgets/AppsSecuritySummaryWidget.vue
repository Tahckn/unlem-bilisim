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
        <div class="w-full flex flex-col gap-y-[10px] md:gap-y-[0] md:flex-row justify-between items-center">
            <!-- Basarili islem  -->
            <div
                class="md:w-auto w-full md:px-[35px] lg:px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[2px] lg:gap-y-[12px] py-[5px] md:py-[20px] justify-center items-center">
                <p
                    class="text-success font-semibold leading-[18px] tracking-[-0.18px] text-[14px] md:text-[15px] lg:text-[18px]">
                    Başarılı
                    İşlem</p>
                <p
                    class="text-[#3F4254] text-[16px] md:text-[24px] lg:text-[38px] font-semibold md:leading-[38px] tracking-[-0.76px]">
                    36.966
                </p>
            </div>
            <!-- Basarisiz islem  -->

            <div
                class=" md:w-auto w-full md:px-[35px] lg:px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[2px] lg:gap-y-[12px] py-[5px] md:py-[20px] justify-center items-center">
                <p
                    class="text-danger font-semibold leading-[18px] tracking-[-0.18px] text-[14px] md:text-[15px] lg:text-[18px]">
                    Başarısız
                    İşlem</p>
                <p
                    class="text-[#3F4254] text-[16px] md:text-[24px] lg:text-[38px] font-semibold md:leading-[38px] tracking-[-0.76px]">
                    291
                </p>
            </div>
            <!-- Bir sonraki islem  -->
            <div
                class=" md:w-auto w-full md:px-[35px] lg:px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[2px] lg:gap-y-[12px] py-[5px] md:py-[20px] justify-center items-center">
                <p
                    class="text-warning font-semibold leading-[18px] tracking-[-0.18px] text-[14px] md:text-[15px] lg:text-[18px]">
                    Bekleyen
                    İşlem</p>
                <p
                    class="text-[#3F4254] text-[16px] md:text-[24px] lg:text-[38px] font-semibold md:leading-[38px] tracking-[-0.76px]">
                    72</p>
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
                    <VueApexCharts type="area" height="241" :options="chartOptions" :series="series"></VueApexCharts>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts';

const chartOptions: Ref<any> = ref({
    chart: {
        id: "uygulama-islem-grafik",
    },
    xaxis: {
        categories: ['9AM', '12PM', '15PM', '18PM', '19PM'],
    },
});

const series: Ref<any[]> = ref([
    {
        name: "",
        data: [30, 45, 60, 75, 90, 105, 120],
    },

]);
</script>

