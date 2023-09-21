<template>
     <section
                        class="w-full h-[600px] shadow-sm border flex flex-col gap-y-[30px] border-[#F1F1F2] rounded-xl p-[30px]">
                        <!-- header  -->
                        <div class="w-full flex items-center border-b border-[#E1E3EA h-[38px]">
                            <!-- App Status  -->
                            <div class="flex flex-row pb-[20px] justify-center gap-x-[5px] items-center">
                                <h2 class="text-[#3F4254] text-[18px] font-semibold leading-[18px] tracking-[-0.18px]">
                                    Uygulama Durumu</h2>
                                <img src="/assets/icons/attention.svg" class="w-[22px] h-[22px]" alt="attention">
                            </div>

                            <!-- tabs -->
                            <div class="flex ml-auto flex-row gap-x-[40px]">
                                <div class="cursor-pointer">
                                    <p
                                        class="pb-[20px] text-primary text-[16px] font-semibold leading-[16px] border-b border-primary ">
                                        Bugün</p>
                                </div>
                                <div class="cursor-pointer">
                                    <p class="pb-[20px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px]">Bu Hafta
                                    </p>
                                </div>
                                <div class="cursor-pointer">
                                    <p class="pb-[20px] text-[#A1A5B7] text-[16px] font-semibold leading-[16px]">Bu Hafta
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Tab Status -->
                        <div class="w-full flex justify-between items-center">
                            <div
                                class="px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[12px] py-[20px] justify-center items-center">
                                <p class="text-success font-semibold leading-[18px] tracking-[-0.18px] text-[18px]">Başarılı
                                    İşlem</p>
                                <p class="text-[#3F4254] text-[38px] font-semibold leading-[38px] tracking-[-0.76px]">36.966
                                </p>
                            </div>
                            <div
                                class="px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[12px] py-[20px] justify-center items-center">
                                <p class="text-warning font-semibold leading-[18px] tracking-[-0.18px] text-[18px]">Bekleyen
                                    İşlem</p>
                                <p class="text-[#3F4254] text-[38px] font-semibold leading-[38px] tracking-[-0.76px]">72</p>
                            </div>
                            <div
                                class="px-[60px] rounded-[6px] border border-[#D8D8E5] border-dashed flex flex-col gap-y-[12px] py-[20px] justify-center items-center">
                                <p class="text-danger font-semibold leading-[18px] tracking-[-0.18px] text-[18px]">Başarısız
                                    İşlem</p>
                                <p class="text-[#3F4254] text-[38px] font-semibold leading-[38px] tracking-[-0.76px]">291
                                </p>
                            </div>
                        </div>
                        <!-- Tab Graph  -->
                        <div class="w-full">
                            <!-- Graph Header  -->
                            <div class="flex items-center">
                                <h2 class="text-[#3F4254] text-[18px] font-semibold leading-[18px] tracking-[-0.18px]">
                                    Uygulama İşlem Grafiği
                                </h2>
                                <div class="ml-auto p-[10px] flex-row border-[#F1F1F2] border rounded-md gap-x-[10px] flex">
                                    <div class="px-[12px] py-[9px] bg-[#F1F1F2] rounded-md">
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
                            <div class="w-full h-[241px]">
                            </div>
                        </div>
                    </section>
</template>

<script setup lang="ts">

</script>
