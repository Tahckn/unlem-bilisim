<template>
    <section
        class="py-[20px] px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
        <!-- header  -->
        <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
            <div class="flex gap-x-[5px] items-center justify-center">
                <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">API Bilgileri</h2>
                <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
            </div>
        </div>
        <!-- Api Information  -->
        <div class="flex flex-col gap-y-[20px] w-full border-b pb-[20px]">
            <!-- HTTP Server  -->
            <div class="flex w-full items-center gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">HTTP Sunucu<span
                            class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
                <div>
                    <!-- Switch button  -->
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <div
                            class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                        </div>
                    </label>
                </div>
            </div>
            <!-- HTTP port  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">HTTP Port <span
                            class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg"
                        class="w-[20px] h-[20px] text-[12px] font-semibold leading-[12px]" alt="attention">
                </div>
                <div class="flex-grow">
                    <input type="text"
                        class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md">
                </div>
            </div>
            <!-- GRPC Server  -->
            <div class="flex w-full items-center gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">GRPC Sunucu<span
                            class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
                <div>
                    <!-- Switch button  -->
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <div
                            class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                        </div>
                    </label>
                </div>
            </div>
            <!-- GRPC Port  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">GRPC Port <span
                            class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg"
                        class="w-[20px] h-[20px] text-[12px] font-semibold leading-[12px]" alt="attention">
                </div>
                <div class="flex-grow">
                    <input type="text"
                        class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md">
                </div>
            </div>
            <!-- Kuyruk -->
            <div class="flex w-full items-center gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">Kuyruk<span
                            class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
                <div>
                    <!-- Switch button  -->
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked>
                        <div
                            class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                        </div>
                    </label>
                </div>
            </div>
            <!-- Kuyruk Isimleri  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">Kuyruk
                        İsimleri<span class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg"
                        class="w-[20px] h-[20px] text-[12px] font-semibold leading-[12px]" alt="attention">
                </div>
                <div class="flex-grow">
                    <input type="text"
                        class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md">
                </div>
            </div>
            <!-- Databases  -->
            <div class="flex w-full flex-col gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                <div class="flex w-[175px] gap-x-[5px] items-center">
                    <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">Veri
                        Tabanları<span class="text-danger font-semibold">*</span></p>
                    <img src="/assets/icons/attention.svg"
                        class="w-[20px] h-[20px] text-[12px] font-semibold leading-[12px]" alt="attention">
                </div>
                <div class="flex-grow">
                    <input type="text"
                        class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md">
                </div>
            </div>
        </div>
        <!-- Sessions Auth  -->
        <div class="flex w-full items-center gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
            <div class="flex w-[175px] gap-x-[5px] items-center">
                <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">Oturum ( Auth )<span
                        class="text-danger font-semibold">*</span></p>
                <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
            </div>
            <div>
                <!-- Switch button  -->
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked>
                    <div
                        class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                    </div>
                </label>
            </div>
        </div>
        <!-- Private Project  -->
        <div class="flex w-full items-center gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
            <div class="flex w-[175px] gap-x-[5px] items-center">
                <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold sm:leading-[18px] tracking-[-0.18px]">
                    Kapalı Proje ( Private )<span class="text-danger font-semibold">*</span></p>
                <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
            </div>
            <div>
                <!-- Switch button  -->
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked>
                    <div
                        class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                    </div>
                </label>
            </div>
        </div>
        <!-- Status  -->
        <div class="flex w-full items-center gap-y-[10px] md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
            <div class="flex w-[175px] gap-x-[5px] items-center">
                <p class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px]">
                    Durum<span class="text-danger font-semibold">*</span></p>
                <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
            </div>
            <div>
                <!-- Switch button  -->
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked>
                    <div
                        class="w-11 h-6 bg-gray-200 rounded-full   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                    </div>
                </label>
            </div>
        </div>

        <div>
            <button
                class="text-[12px] leading-[12px] md:text-[16px] float-right font-semibold md:leading-[16px] px-[16px] md:px-[24px] py-[10px] md:py-[16px] bg-primary rounded-md text-white">Bilgileri
                Güncelle</button>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>