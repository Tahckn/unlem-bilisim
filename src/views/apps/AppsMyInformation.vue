<template>
    <div class="flex flex-col gap-y-[10px]">
        <section
            class="py-[20px] px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
            <!-- header  -->
            <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
                <div class="flex gap-x-[5px] items-center justify-center">
                    <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">Kullanıcı Bilgileri</h2>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
            </div>
            <!-- My Information -->
            <div class="flex flex-col gap-y-[20px] w-full border-b pb-[20px]">
                <!-- Avatar  -->
                <div class="flex flex-row gap-x-[200px] items-start">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Avatar</p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div>
                        <div class="relative">
                            <img class="pb-[15px]" src="/assets/apps/img/user-red.png" alt="user-img">
                            <div class="absolute -bottom-1 left-5 flex flex-row">
                                <img src="/assets/icons/Close.svg" alt="close">
                                <img src="/assets/icons/Edit.svg" alt="edit">
                            </div>
                        </div>
                        <p class="text-[#A1A5B7] text-[10px] font-semibold leading-[10px] tracking-[-0.3px]">İzin verilen
                            dosya
                            türleri: png, jpg, jpeg.</p>
                    </div>
                </div>
                <!-- Ad Soyad  -->
                <div class="flex w-full gap-x-5px flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center ">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Ad Soyad
                            <span class="text-danger font-semibold">*</span>
                        </p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="">
                            <input type="text"
                                class="text-[#7E8299] sm:w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                        </div>
                        <div class=" ">
                            <input type="text"
                                class="text-[#7E8299] sm:w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                        </div>
                    </div>
                </div>
                <!--Telefon Numarasi  -->
                <div class="flex w-full flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Telefon Numarası<span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg"
                            class="w-[20px] h-[20px] text-[12px] font-semibold leading-[12px]" alt="attention">
                    </div>
                    <div class="flex-grow">
                        <input type="text"
                            class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                    </div>
                </div>
                <!-- E-posta  -->
                <div class="flex w-full flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            E-Posta Adresi <span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex-grow">
                        <input type="text"
                            class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                    </div>
                </div>
                <!-- Dil Tercihi  -->
                <div class="flex w-full flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Dil tercihi <span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex-grow">
                        <input type="text"
                            class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                    </div>
                </div>
                <!-- Saat Dilimi  -->
                <div class="flex w-full flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Saat Dilimi <span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex-grow">
                        <input type="text"
                            class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                    </div>
                </div>
                <!-- Tema Modu *  -->
                <div class="flex w-full flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Tema Modu<span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex-grow">
                        <input type="text"
                            class="text-[#7E8299] w-full md:px-[12px] px-[8px] text-[12px] md:text-[14px] py-[9px] md:py-[13px] outline-none ring-0 bg-[#F1F1F2] rounded-md ">
                    </div>
                </div>
                <!-- Status  -->
                <div class="flex w-full flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            İki Faktörlü Doğrulama (2FA) <span class="text-danger font-semibold">*</span></p>
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
                <!-- 2FA Doğrulama Methodları -->
                <div class="flex w-full flex-col gap-y-[10px]  md:flex-row md:gap-x-[120px] lg:gap-x-[200px]">
                    <div class="flex w-[175px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            İki Faktörlü Doğrulama (2FA) <span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex items-start gap-x-[20px]">
                        <!-- checkboxes -->
                        <div class="flex items-center mb-4">
                            <input id="e-posta" type="checkbox" value=""
                                class="text-white accent-primary w-[30px] h-[30px]">
                            <label for="e-posta" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">E-posta</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="sms" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                            <label for="sms" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">SMS</label>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <button
                    class="text-[12px] leading-[12px] md:text-[16px] float-right font-semibold md:leading-[16px] px-[16px] md:px-[24px] py-[10px] md:py-[16px] bg-primary rounded-md text-white">Bilgileri
                    Güncelle</button>
            </div>
        </section>

        <!-- Giris yontemleri  -->
        <section
            class="py-[20px] px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
            <!-- header  -->
            <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
                <div class="flex gap-x-[5px] items-center justify-center">
                    <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">Giriş Yöntemleri</h2>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
            </div>
            <div class="flex flex-col gap-y-[5px] md:flex-row items-start border-b border-[#E1E3EA] pb-[10px] border-dashed justify-between">
                <!-- Eposta Adresi  -->
                <div>
                    <div class="flex mb-[10px] w-[200px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            E-posta Adresi<span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex gap-x-[5px] items-center">
                        <p class="text-[#A1A5B7] text-[14px] font-semibold">fikret.cumaoglu@unlembilisim.com</p>
                        <p class="p-[4px] text-[12px] rounded text-success font-semibold bg-[#E8FFF3]">Doğrulandı</p>
                    </div>
                </div>
                <!-- Eposta Change -->
                <div>
                    <button class="bg-[#F1F1F2] px-[10px] md:px-[16px] font-semibold rounded-md py-[8px] text-[13px] md:text-[16px] md:py-[12px] text-[#7E8299]">E-posta Adresi
                        Değiştir</button>
                </div>
            </div>
            <div class="flex flex-col gap-y-[5px] md:flex-row items-start border-b border-[#E1E3EA] pb-[10px] border-dashed justify-between">
                <!-- Telefon Numarası -->
                <div>
                    <div class="flex mb-[10px] w-[200px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Telefon Numarası<span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex gap-x-[5px] items-center">
                        <p class="text-[#A1A5B7] text-[14px] font-semibold">0535 397 43 99</p>
                        <p class="p-[4px] text-[12px] rounded text-success font-semibold bg-[#E8FFF3]">Doğrulandı</p>
                    </div>
                </div>
                <!-- Telefon Degistir -->
                <div>
                    <button class="bg-[#F1F1F2] px-[10px] md:px-[16px] font-semibold rounded-md py-[8px] text-[13px] md:text-[16px] md:py-[12px] text-[#7E8299]">Telefon
                        Numarası</button>
                </div>
            </div>
            <div class="flex flex-col gap-y-[5px] md:flex-row items-start border-b border-[#E1E3EA] pb-[10px] border-dashed justify-between">
                <!-- sifre -->
                <div>
                    <div class="flex mb-[10px] w-[200px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Şifre<span class="text-danger font-semibold">*</span></p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                    <div class="flex gap-x-[5px] items-center">
                        <p class="text-[#A1A5B7] text-[14px] font-semibold">*********************</p>
                    </div>
                </div>
                <!--  sifre -->
                <div>
                    <button class="bg-[#F1F1F2] px-[10px] md:px-[16px] font-semibold rounded-md py-[8px] text-[13px] md:text-[16px] md:py-[12px] text-[#7E8299]">Şifre
                        Değiştir</button>
                </div>

            </div>
            <div class="py-[16px] gap-y-[10px] flex-col md:items-start items-center md:flex-row rounded-[7px] bg-[#EEF6FF] px-[14px] flex border border-dashed border-primary">
                <img class="mr-[15px] w-[25px] h-[56px]" src="/assets/icons/shield.svg" alt="shield">

                <div class="flex flex-col gap-y-[5px]">
                    <p class="">Hesabını Güvenli Hale Getir</p>
                    <p class="text-[#7E8299] text-[13px] font-semibold leading-[14px]">İki faktörlü kimlik doğrulama,
                        hesabınıza ekstra bir güvenlik katmanı ekler. Giriş yapmak için ek olarak 6 haneli bir kod
                        sağlamanız gerekir.</p>
                </div>

                <button
                    class="text-[12px] md:ml-auto leading-[12px] md:text-[16px] float-right font-semibold md:leading-[16px] px-[16px] md:px-[24px] py-[10px] md:py-[16px] bg-primary rounded-md text-white ">Aktif
                    Et
                </button>
            </div>
        </section>

        <section
            class="py-[20px] px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
            <!-- header  -->
            <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
                <div class="flex gap-x-[5px] items-center justify-center">
                    <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">Bildirimler ve Duyurular</h2>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
            </div>
            <div class="flex items-center pb-[10px] border-dashed justify-between">
                <!--Sistem Bildirimleri  -->
                <div>
                    <div class="flex mb-[10px] w-[200px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Sistem Bildirimleri</p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                </div>
                <!-- sistem checkbox -->
                <div class="flex items-start gap-x-[20px]">
                    <!-- checkboxes -->
                    <div class="flex items-center mb-4">
                        <input id="e-posta" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="e-posta" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">E-posta</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="sms" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="sms" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">SMS</label>
                    </div>
                </div>
            </div>
            <div class="flex items-center pb-[10px] border-dashed justify-between">
                <!--Sistem Duyurulari  -->
                <div>
                    <div class="flex mb-[10px] w-[200px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Sistem Duyurları</p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                </div>
                <!-- duyuru checkbox -->
                <div class="flex items-start gap-x-[20px]">
                    <!-- checkboxes -->
                    <div class="flex items-center mb-4">
                        <input id="e-posta" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="e-posta" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">E-posta</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="sms" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="sms" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">SMS</label>
                    </div>
                </div>
            </div>
            <div class="flex items-center pb-[10px] border-dashed justify-between">
                <!--Bakim Duyurulari  -->
                <div>
                    <div class="flex mb-[10px] w-[200px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Bakım Duyuruları </p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                </div>
                <!-- bakim checkbox -->
                <div class="flex items-start gap-x-[20px]">
                    <!-- checkboxes -->
                    <div class="flex items-center mb-4">
                        <input id="e-posta" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="e-posta" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">E-posta</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="sms" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="sms" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">SMS</label>
                    </div>
                </div>
            </div>
            <div class="flex items-center pb-[10px] border-dashed justify-between">
                <!--Güncelleme Duyuruları   -->
                <div>
                    <div class="flex mb-[10px] w-[200px] gap-x-[5px] items-center">
                        <p
                            class="text-[#5E6278] text-[13px] leading-[12px] md:text-[18px] font-semibold lg:leading-[18px] tracking-[-0.18px] whitespace-nowrap">
                            Güncelleme Duyuruları </p>
                        <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                    </div>
                </div>
                <!-- bakim checkbox -->
                <div class="flex items-start gap-x-[20px]">
                    <!-- checkboxes -->
                    <div class="flex items-center mb-4">
                        <input id="e-posta" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="e-posta" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">E-posta</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="sms" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="sms" class=" ml-[10px] text-[13px] md:text-[16px] text-[#5E6278] font-semibold">SMS</label>
                    </div>
                </div>
            </div>
            <div class="py-[16px] rounded-[7px] px-[14px] border-t border-[#F1F1F2] flex ">

                <button
                    class="text-[12px] ml-auto leading-[12px] md:text-[16px] float-right font-semibold md:leading-[16px] px-[16px] md:px-[24px] py-[10px] md:py-[16px] bg-primary rounded-md text-white">Güncelle
                </button>
            </div>
        </section>

        <section
            class="py-[20px] px-[20px] gap-y-[20px] flex flex-col w-full h-auto shadow-sm border border-[#F1F1F2] rounded-xl">
            <!-- header  -->
            <div class="flex w-full items-center border-b pb-[20px] border-[#E1E3EA]">
                <div class="flex gap-x-[5px] items-center justify-center">
                    <h2 class="text-[#181C32] text-[14px] leading-[12px]  md:text-[18px] font-semibold md:leading-[16px]">Hesabını Devre Dışı Bırak</h2>
                    <img src="/assets/icons/attention.svg" class="w-[20px] h-[20px]" alt="attention">
                </div>
            </div>
            <!-- Hesabi devre disi birak  -->
            <div class="flex flex-col gap-y-[20px] border-[#E1E3EA] border-b pb-[50px]">
                <div class="py-[16px] rounded-[7px] bg-[#FFF8DD] px-[14px] flex border border-dashed border-warning">
                    <img class="mr-[15px]" src="/assets/icons/attention-yellow.svg" alt="shield">

                    <div class="flex flex-col gap-y-[5px]">
                        <p class="">Hesabınızı Devre Dışı Bırakıyorsunuz</p>
                        <p class="text-[#7E8299] text-[13px] font-semibold leading-[14px]">Hesabını devre dışı bırakmak için
                            e-postanızı veya telefon numaranızı onaylamış olmanız gerekir.</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center mb-4">
                        <input id="e-posta" type="checkbox" value="" class="text-white accent-primary w-[30px] h-[30px]">
                        <label for="e-" class=" ml-[10px] text-[13px] md:text-[15px] text-[#A1A5B7] font-semibold">Hesabımın devre dışı bırakılmasını
                            onaylıyorum.</label>
                    </div>
                </div>
            </div>
            <div>
                <button
                    class="text-[12px] ml-auto rounded-md float-right font-semibold md:leading-[16px] px-[16px] md:px-[24px] py-[10px] md:py-[16px] bg-danger text-white md:text-[16px] leading-[16px]">
                    Devre Dışı Bırak
                </button>
            </div>

        </section>
    </div>
</template>

<script setup lang="ts">

</script>

