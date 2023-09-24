<template>
    <!-- Search Section  -->
    <div>
        <div class="flex flex-col md:flex-row gap-y-[12px] justify-between px-[10px] md:px-[20px] pt-[20px] items-center">
            <input class="bg-[#F9F9F9] w-full min-w-[165px] md:w-auto lg:w-[279px] px-[12px] h-[38px]" type="text"
                placeholder="Ara" name="search" id="search">
            <div
                class="cursor-pointer min-w-[165px] bg-[#F9F9F9] w-full md:w-auto lg:w-[177px] flex flex-row items-center justify-between px-[12px] py-[13px]">
                <button class="text-[12px] truncate leading-[12px] font-semibold text-[#A1A5B7]">Ürün Adı
                    A-Z’ye
                    Sırala</button>
                <img src="/assets/icons/arrow-down.svg" alt="arrow-down">
            </div>
        </div>
    </div>
    <div class="mx-auto w-full px-[10px] md:px-[20px] py-[20px] shadow-sm rounded-[12px] flex flex-col gap-y-[20px]">
        <!-- Cards -->
        <div class="grid grid-cols-1 gap-y-[30px] md:grid-cols-2 lg:grid-cols-3 gap-x-[30px]">
            <div v-for="i in 3">
                <AppsAvatarCard />
            </div>
        </div>
        <!-- Footer  -->
        <div class="flex md:flex-col gap-y-[10px] flex-col justify-between items-center">
            <button
                class="flex p-[10px] rounded-[6px] justify-between items-center flex-shrink-0 w-[80px] h-[30px] bg-[#F9F9F9]">
                <p class="text-[#A1A5B7] text-[10px] font-semibold leading-[10px]">10</p>
                <img class="w-[9px] h-[5px]" src="/assets/icons/arrow-down.svg" alt="">
            </button>
            <!-- Pagination  -->
            <div>
                <nav>
                    <ul class="flex items-center drop-shadow-none w-[395px] justify-between">
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
    </div>
</template>

<script setup lang="ts">
import AppsAvatarCard from '../AppsAvatarCard.vue';
import { getApplications, fetchData } from '@/api';

getApplications()
    .then((applications) => {
        console.log('API verisi:', applications);
    })
    .catch((error) => {
        console.error('Hata:', error);
    });

fetchData()
    .then((data) => {
        console.log('Data from the API:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


</script>

