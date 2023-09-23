<template>
    <section
        class="py-[20px] px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
        <div>
            <!-- header  -->
            <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
                <div class="flex gap-x-[5px] items-center justify-center">
                    <h2 class="text-[#3F4254] text-[18px] font-semibold leading-[16px]">Kullanıcı Bilgileri</h2>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-y-[12px] justify-between pt-[20px] items-center">
                <input class="bg-[#F9F9F9] w-full min-w-[165px] md:w-auto lg:w-[279px] px-[12px] h-[38px]" type="text"
                    placeholder="Ara" name="search" id="search">

                <div class="flex items-center gap-x-[5px]">
                    <div
                        class="cursor-pointer bg-[#F9F9F9] gap-x-[8px] w-full md:w-auto flex flex-row items-center justify-between px-[12px] py-[13px]">
                        <button class="text-[12px] truncate leading-[12px] font-semibold text-[#A1A5B7]">Tarih Büyükten
                            Küçüğe
                            ’ye Sırala</button>
                        <img src="/assets/icons/arrow-down.svg" alt="arrow-down">
                    </div>
                    <button class="flex bg-[#EEF6FF] rounded-md flex-row items-center gap-x-[5px] py-[9px] px-[12px] justify-center">
                        <img src="/assets/icons/filter.svg" alt="filter">
                        <p class="text-primary font-bold text-[13px] leading-[14px]">Filtrele</p>
                    </button>
                </div>
            </div>
        </div>
        <!-- Table  -->
        <div class="flex items-stretch flex-col gap-y-[40px]">
            <!-- item 1 -->
            <div class="flex flex-row gap-x-[20px]">
                <div class="relative">
                    <img class="p-[9px] bg-[#F1F1F2] rounded-full" src="/assets/icons/notification-3.svg"
                        alt="notification">

                        <span class="w-[1px] border-l border-[#E1E3EA] border-dashed absolute h-full  left-1/2"></span>
                </div>
                <div>
                    <div class="flex flex-col gap-y-[10px]">
                        <p class=" text-[#3F4254] text-[13px] md:text-[16px] font-semibold leading-[16px]">Kullanıcı “Bildirim Ayarları”
                            güncellendi.</p>
                        <div class="md:flex-row flex-col flex items-start gap-y-[4px] md:items-center gap-x-[10px]">
                            <p class="text-[#A1A5B7] leading-[14px] text-[12px] md:text-[14px]">02.08.2023 10:35</p>
                            <img src="/assets/apps/img/gril.png" alt="gril">
                            <p class="text-[12px] md:text-[14px] leading-[14px] text-primary">Fikret Burak Cumaoğlu</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- item 2 -->
            <div class="flex w-full flex-row gap-x-[20px]">
                <div class="relative">
                    <img class="p-[9px] bg-[#F1F1F2] rounded-full" src="/assets/icons/notification-3.svg"
                        alt="notification">
                        <span class="w-[1px] border-l border-[#E1E3EA] border-dashed absolute h-full  left-1/2"></span>
                </div>
                <div class="flex-grow gap-y-[10px]">
                    <div class="flex flex-col gap-y-[10px]">
                        <p class=" text-[#3F4254] text-[13px] md:text-[16px] font-semibold leading-[16px]">“Kod Tanımları” için yeni tanım
                            eklendi.</p>
                        <div class="md:flex-row flex-col flex items-start gap-y-[4px] md:items-center gap-x-[10px]">
                            <p class="text-[#A1A5B7] leading-[14px] text-[12px] md:text-[14px]">02.08.2023 10:35</p>
                            <img src="/assets/apps/img/beard.png" alt="gril">
                            <p class="text-[12px] md:text-[14px] leading-[14px] text-primary">Fikret Burak Cumaoğlu</p>
                        </div>
                    </div>
                    <div class="py-[16px] gap-y-[10px] flex-col md:items-start items-center md:flex-row rounded-[7px] bg-[#EEF6FF] px-[14px] flex border border-dashed border-primary">
                        <img class="mr-[15px]" src="/assets/icons/tickk.svg" alt="shield">

                        <div class="flex flex-col gap-y-[5px] md:items-start items-center flex-grow">
                            <p class="">Hizmet Seri Numarası</p>
                            <p class="text-[#7E8299] text-[13px] font-semibold leading-[14px]">HZMT-{number}</p>
                        </div>

                        <button
                            class="text-[12px] md:ml-auto leading-[12px] md:text-[16px] float-right font-semibold md:leading-[16px] px-[16px] md:px-[24px] py-[10px] md:py-[16px] bg-primary rounded-md text-white  ">Kod
                            Tanımına Git
                        </button>
                    </div>
                </div>

            </div>
            <!-- item 3 -->
            <div class="flex flex-row gap-x-[20px]">
                <div>
                    <img class="p-[9px] bg-[#F1F1F2] rounded-full" src="/assets/icons/notification-3.svg"
                        alt="notification">
                </div>
                <div>
                    <div class="flex flex-col gap-y-[10px]">
                        <p class=" text-[#3F4254] text-[13px] md:text-[16px] font-semibold leading-[16px]">Kullanıcı “Kullanıcı bilgileri
                            güncellendi.</p>
                        <div class="md:flex-row flex-col flex items-start gap-y-[4px] md:items-center gap-x-[10px]">
                            <p class="text-[#A1A5B7] leading-[14px] text-[12px] md:text-[14px]">02.08.2023 10:35</p>
                            <img src="/assets/apps/img/gril.png" alt="gril">
                            <p class="text-[12px] md:text-[14px] leading-[14px] text-primary">Fikret Burak Cumaoğlu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation  -->
        <div class="flex w-full flex-col gap-y-[10px] md:flex-row justify-between items-center">
            <button
                class="flex p-[10px] rounded-[6px] justify-between items-center flex-shrink-0 w-[80px] h-[30px] bg-[#F9F9F9]">
                <p class="text-[#A1A5B7] text-[10px] font-semibold leading-[10px]">10</p>
                <img class="w-[9px] h-[5px]" src="/assets/icons/arrow-down.svg" alt="">
            </button>
            <!-- Pagination  -->
            <div class="w-full md:w-[395px] ">
                <nav>
                    <ul class="flex items-center drop-shadow-none justify-between">
                        <li class="cursor-pointer">
                            <img src="/assets/icons/nav-left-disabled.svg" alt="nav-left">
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center w-9 h-9 leading-tight text-white bg-primary rounded-[6px]  hover:bg-primary/80">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center w-9 h-9 leading-tight text-gray-600  rounded-[6px] bg-white hover:bg-gray-100">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                                class="flex items-center justify-center w-9 h-9 leading-tight text-gray-600  rounded-[6px] bg-white hover:bg-gray-100">3</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center w-9 h-9 leading-tight text-gray-600  rounded-[6px] bg-white hover:bg-gray-100">4</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center w-9 h-9 leading-tight text-gray-600  rounded-[6px] bg-white hover:bg-gray-100">5</a>
                        </li>
                        <li class="cursor-pointer">
                            <img src="/assets/icons/nav-right.svg" alt="nav-right">
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

