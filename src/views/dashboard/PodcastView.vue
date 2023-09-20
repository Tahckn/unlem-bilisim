<script setup lang="ts">
</script>

<template>
    <!-- Subheader Section  -->

    <section class="flex -mt-[10px] justify-between items-center">
        <div class="flex flex-col gap-y-2">
            <h1 class="text-[#181C32] text-[22px] font-semibold leading-[22px] tracking-[-0.22px]">Podcast Dashboard</h1>
            <h3 class="text-[#A1A5B7] text-[14px] leading-[14px]">Home - Dashboard</h3>
        </div>

        <div>
            <button class="text-[#5E6278] py-3 px-4 text-[13px] font-bold leading-[14px]">Manage Bids</button>
            <button class="text-white py-3 px-4 text-[13px] font-semibold bg-primary leading-[14px] rounded-md">Start
                Auction</button>
        </div>
    </section>

    <div class="flex flex-col py-[30px] gap-y-[30px]">
        <section
            class="flex w-full justify-center items-center md:items-start md:justify-start md:flex-row gap-y-[30px] flex-col gap-x-[30px]">
            <!-- Music Info  -->
            <div class="w-full md:w-[420px] lg:w-[850px] rounded-xl bg-[#010101] -z-10 h-[400px] relative overflow-hidden">
                <div class="scale-125 absolute inset-0 -z-20 overflow-hidden">
                    <div class="w-full h-full" style="overflow: hidden; border-radius: 20px;">
                        <img class="w-full h-full object-cover" src="/assets/podcast/img/human.jpg"
                            style="transform:  translateX(20%);" alt="human">
                    </div>
                </div>
                <div class="flex flex-col items-start h-full justify-around px-[60px]">
                    <div>
                        <h1 class="text-white text-[38px] font-semibold leading-[38px] mb-[15px] tracking-[-0.76px]">Utah
                            Case
                        </h1>
                        <p class='text-white text-[16px] font-semibold leading-[16px] mb-[20px]'>with Kristin Watson</p>
                        <div class="flex gap-x-[20px]">
                            <div class="flex items-center justify-center gap-x-[7px]">
                                <img src="/assets/icons/play-blue.svg" alt="play">
                                <p class="text-white text-[14px] leading-[14px]">70.000+ plays</p>
                            </div>
                            <div class="flex items-center justify-center gap-x-[7px]">
                                <img src="/assets/icons/headset.svg" alt="headset">
                                <p class="text-white text-[14px] leading-[14px]">372 listening now</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-x-[10px]">
                        <button
                            class="text-white text-[13px] font-semibold bg-primary leading-[14px] rounded-md px-[16px] py-[12px]">Listen
                            Now</button>
                        <button
                            class="text-white text-[13px] leading-[14px] border rounded-md border-white font-bold px-[16px] py-[12px]">Save
                            For Later</button>
                    </div>
                </div>
            </div>

            <!-- Music Control  -->

            <div class="w-full md:w-[420px] h-[400px] bg-[#0D1114] overflow-hidden p-[30px] relative rounded-xl">
                <div class="flex justify-between">
                    <p class="text-white text-[18px] font-semibold leading-[18px] tracking-[-0.18px]">Player</p>
                    <img src="/assets/icons/threedot.svg" alt="threedot">
                </div>
                <div class="flex justify-center flex-col items-center mt-[13px]">
                    <img class="flex mb-[20px] w-[120px] object-cover h-[120px] rounded-full"
                        src="/assets/podcast/img/ai.png" alt="ai">
                    <h1 class="text-white text-[24px] font-semibold leading-[24px] tracking-[-0.24px]">Strange Friends</h1>
                    <p class="mt-[10px] text-white text-[13px] font-semibold leading-[14px] opacity-60">Theresa Webb</p>
                </div>
                <div class="w-full h-[104px] flex-shrink-0 bottom-0 left-0 absolute bg-primary">
                    <div class="w-full rounded-[3px] h-[6px] relative bg-[#F1F1F2]">
                        <div class="flex w-full absolute -top-5 left-0 px-[5px] justify-between items-center">
                            <p class="text-[#E1E3EA] text-[11px] leading-[13px] tracking-[0.11px]">1:13</p>
                            <p class="text-[#E1E3EA] text-[11px] leading-[13px] tracking-[0.11px]">5:53</p>
                        </div>
                    </div>
                    <div class="w-[18px] -top-1.5 drop-shadow-lg left-14 z-10 h-[18px] absolute bg-primary rounded-full">
                    </div>
                    <div class="flex h-full gap-x-[30px] items-center justify-center">
                        <img src="/assets/icons/again.svg" alt="again">
                        <img src="/assets/icons/back.svg" alt="back">
                        <img src="/assets/icons/play.svg" alt="play">
                        <img src="/assets/icons/next.svg" alt="next">
                        <img src="/assets/icons/mix.svg" alt="mix">
                    </div>

                </div>
            </div>
        </section>

        <section class="flex md:flex-row gap-y-[30px] flex-col  self-stretch gap-x-[30px]">
            <!-- Recently Played  -->
            <div
                class="border border-[#F1F1F2] p-[30px] flex flex-col gap-y-[30px] rounded-xl drop-shadow-md w-auto lg:w-[850px] lg:h-auto">

                <!-- Header  -->
                <div class="flex w-full justify-between items-center">
                    <div class="flex flex-col gap-y-[10px]">
                        <h1 class="recent-title">Recently Played</h1>
                        <p class="recent-sub-title">Update 37 minutes ago</p>
                    </div>
                    <div>
                        <button
                            class="text-[#7E8299] text-[13px] font-semibold leading-[14px] py-3 px-4 rounded-md bg-[#F1F1F2]">History</button>
                    </div>
                </div>

                <!-- List 1 -->
                <div class="flex md:justify-center justify-between items-start gap-x-[30px] self-stretch">
                    <div
                        class="lg:h-[250px] h-[220px] flex-shrink-0  flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/woman.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title lg:w-[175px] w-[97px]">Daily Podcast</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Darlene Robertson</p>
                        </div>
                    </div>
                    <div
                        class="lg:h-[250px] h-[220px] flex-shrink-0  flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/pink.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title lg:w-[175px] w-[97px]">Neon Lights</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Wade Warren</p>
                        </div>
                    </div>
                    <div
                        class="lg:h-[250px] h-[220px] flex-shrink-0  flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/man.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title lg:w-[175px] w-[97px]">Single Eye</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Robert Fox</p>
                        </div>
                    </div>
                    <div
                        class="lg:h-[250px] h-[220px] hidden flex-shrink-0  lg:flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/child.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title lg:w-[175px] w-[97px]">Radiohead</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Jacob Jone</p>
                        </div>
                    </div>
                </div>

                <!-- List 2  -->
                <div class="flex md:justify-center justify-between items-start gap-x-[30px] self-stretch">
                    <div
                        class="lg:h-[250px] h-[220px] flex-shrink-0  flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/halloween.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title lg:w-[175px] w-[97px]">It is what it is</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Jane Cooper</p>
                        </div>
                    </div>
                    <div
                        class="lg:h-[250px] h-[220px] flex-shrink-0  flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/girl.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title lg:w-[175px] w-[97px]">Broken Mirros</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Jeny Wilson</p>
                        </div>
                    </div>
                    <div
                        class="lg:h-[250px] h-[220px] flex-shrink-0  flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/dark.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title lg:w-[175px] w-[97px]">The Hood</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Albert Flores</p>
                        </div>
                    </div>
                    <div
                        class="lg:h-[250px] h-[220px] hidden flex-shrink-0  lg:flex flex-col items-start justify-around lg:justify-between">
                        <img class="lg:w-[175px] lg:h-[190px] rounded-xl flex-shrink-0 w-[97px] md:h-[105px]"
                            src="/assets/podcast/img/eye.png" alt="woman">
                        <div class="flex flex-col justify-start gap-y-[13px]">
                            <h1 class="recent-title">Circle Lights</h1>
                            <p class="recent-sub-title lg:w-[175px] w-[97px]">Dianne Russell</p>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Top Podcaster  -->
            <div
                class="md:w-[420px] border h-[604px] lg:h-[662px] border-[#F1F1F2] p-[30px] flex flex-col gap-y-[30px] rounded-xl drop-shadow-md">
                <!-- Header  -->
                <div class="flex w-full justify-between items-center">
                    <div class="flex flex-col gap-y-[10px]">
                        <h1 class="recent-title">Top Podcaster</h1>
                        <p class="recent-sub-title">8k social visitors</p>
                    </div>
                    <div>
                        <button
                            class="text-[#7E8299] text-[13px] font-semibold leading-[14px] py-3 px-4 rounded-md bg-[#F1F1F2]">View
                            All</button>
                    </div>
                </div>
                <!-- Podcasters  -->
                <div class="flex h-full flex-col justify-between divide-y space-y-1 divide-dashed ">
                    <div class="flex items-center gap-x-[15px]">
                        <img class="h-[60px] w-[60px] lg:h-[70px] lg:w-[70px]" src="/assets/podcast/img/leslie.png"
                            alt="leslie">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title" style="font-size: 16px;">Leslie Alexander</h1>
                            <p class="recent-sub-title">Community</p>
                        </div>
                        <button
                            class="text-[16px] font-semibold rounded-md leading-[16px] text-primary ml-auto py-4 px-6 bg-[#EEF6FF]">Follow</button>
                    </div>
                    <div class="flex items-center pt-3 gap-x-[15px]">
                        <img class="h-[60px] w-[60px] lg:h-[70px] lg:w-[70px]" src="/assets/podcast/img/jacob.png"
                            alt="leslie">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title" style="font-size: 16px;">Jacob Jones</h1>
                            <p class="recent-sub-title">Community</p>
                        </div>
                        <button
                            class="text-[16px] rounded-md font-semibold leading-[16px] text-white ml-auto py-4 px-6 bg-primary">Following</button>
                    </div>
                    <div class="flex pt-3 items-center gap-x-[15px]">
                        <img class="h-[60px] w-[60px] lg:h-[70px] lg:w-[70px]" src="/assets/podcast/img/ronald.png"
                            alt="leslie">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title" style="font-size: 16px;">Ronald Richards</h1>
                            <p class="recent-sub-title">Community</p>
                        </div>
                        <button
                            class="text-[16px] font-semibold rounded-md leading-[16px] text-primary ml-auto py-4 px-6 bg-[#EEF6FF]">Follow</button>
                    </div>
                    <div class="flex pt-3 items-center gap-x-[15px]">
                        <img class="h-[60px] w-[60px] lg:h-[70px] lg:w-[70px]" src="/assets/podcast/img/courtney.png"
                            alt="leslie">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title" style="font-size: 16px;">Courtney Henry</h1>
                            <p class="recent-sub-title">Community</p>
                        </div>
                        <button
                            class="text-[16px] font-semibold rounded-md leading-[16px] text-primary ml-auto py-4 px-6 bg-[#EEF6FF]">Follow</button>
                    </div>
                    <div class="flex pt-3 items-center gap-x-[15px]">
                        <img class="h-[60px] w-[60px] lg:h-[70px] lg:w-[70px]" src="/assets/podcast/img/arlene.png"
                            alt="leslie">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title" style="font-size: 16px;">Arlene McCoy</h1>
                            <p class="recent-sub-title">Community</p>
                        </div>
                        <button
                            class="text-[16px] rounded-md font-semibold leading-[16px] text-white ml-auto py-4 px-6 bg-primary">Following</button>
                    </div>
                    <div class="flex pt-3 items-center gap-x-[15px]">
                        <img class="h-[60px] w-[60px] lg:h-[70px] lg:w-[70px]" src="/assets/podcast/img/marvin.png"
                            alt="leslie">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title" style="font-size: 16px;">Marvin McKinney</h1>
                            <p class="recent-sub-title">Community</p>
                        </div>
                        <button
                            class="text-[16px] font-semibold rounded-md leading-[16px] text-primary ml-auto py-4 px-6 bg-[#EEF6FF]">Follow</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="flex md:flex-row gap-y-[30px] flex-col items-center lg:items-start self-stretch h-[] gap-x-[30px]">
            <!-- Recent Followers  -->
            <div
                class="border border-[#F1F1F2] p-[30px] md:w-[420px] flex flex-col gap-y-[25px] rounded-xl drop-shadow-md w-full lg:w-[850px] h-auto">
                <!-- Header  -->
                <div class="flex w-full justify-between items-center">
                    <div class="flex flex-col gap-y-[10px]">
                        <h1 class="recent-title">Recent Followers</h1>
                        <p class="recent-sub-title">Total 424,567 deliveries</p>
                    </div>
                    <div>
                        <button
                            class="text-[#7E8299] text-[13px] font-semibold leading-[14px] py-3 px-4 rounded-md bg-[#F1F1F2]">History</button>
                    </div>
                </div>

                <!-- Images -->
                <div class="md:w-[420px] md:px-0 justify-between md:justify-normal  w-full flex items-center gap-x-[32px] h-[241px]">
                    <div class="flex flex-shrink-0 gap-y-[12px] flex-col justify-between">
                        <img class="lg:w-[242px] lg:h-[190px] rounded-xl flex-shrink-0 w-[163px] h-[127.98px]"
                            src="/assets/podcast/img/sunset.png" alt="mountain">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title md:text-start text-center">Feeling Good</h1>
                            <p class="recent-sub-title md:text-start text-center">2 hours</p>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 gap-y-[12px] flex-col justify-between">
                        <img class="lg:w-[242px] lg:h-[190px] rounded-xl flex-shrink-0 w-[163px] h-[127.98px]"
                            src="/assets/podcast/img/mountain.png" alt="mountain">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title md:text-start text-center">Both Sides</h1>
                            <p class="recent-sub-title md:text-start text-center">52 mins</p>
                        </div>
                    </div>
                    <div class="lg:flex hidden flex-shrink-0 gap-y-[12px] flex-col justify-between">
                        <img class="lg:w-[242px] lg:h-[190px] rounded-xl flex-shrink-0 w-[163px] h-[127.98px]"
                            src="/assets/podcast/img/birds.png" alt="mountain">
                        <div class="flex flex-col gap-y-[7px]">
                            <h1 class="recent-title md:text-start text-center">Birds in the Sky</h1>
                            <p class="recent-sub-title md:text-start text-center">5 hours</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Have you tried our new ...  -->
            <div class="w-full md:w-[420px]">
                <div
                    class="h-[368px] border border-[#F1F1F2] p-[30px] flex flex-col gap-y-[30px] rounded-xl drop-shadow-md">
                    <!-- Podcasters  -->
                    <div class="flex flex-col space-y-[18px] items-center justify-center">
                        <h1 class="text-[20px] font-semibold leading-[20px] text-center pb-1 max-w-[213px] text-[#3F4254]">
                            Have your tried new Invoice manager?</h1>
                        <img src="/assets/podcast/img/haveyou.svg" alt="haveyou">
                        <div class="flex gap-x-[10px] items-center justify-center">
                            <button
                                class="text-white py-3 px-4 text-[13px] font-semibold bg-primary leading-[14px] rounded-md">Try
                                Now</button>
                            <button
                                class="text-[#7E8299] text-[13px] leading-[14px] bg-[#F1F1F2] rounded-md font-semibold px-[16px] py-[12px]">Learn
                                More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <!-- Podcasters  -->
            <div
                class="h-[460px] border max-w-[841px] w-full border-[#F1F1F2] p-[30px] flex flex-col gap-y-[30px] rounded-xl drop-shadow-md">
                <!-- Header  -->
                <div class="flex w-full justify-between items-center">
                    <div class="flex flex-col gap-y-[10px]">
                        <h1 class="recent-title">Most Popular Sellers</h1>
                        <p class="recent-sub-title">Total 424,567 deliveries</p>
                    </div>
                    <div>
                        <button
                            class="flex items-center gap-x-[10px] justify-center text-[#7E8299] text-[13px] font-semibold leading-[14px] py-3 px-4 rounded-md bg-[#F1F1F2]">4Jan
                            2023 - 2 Feb 2023
                            <span>
                                <img src="/assets/icons/watch.svg" alt="">
                            </span>
                        </button>
                    </div>
                </div>

                <!-- Table  -->

                <div class="flex flex-col items-stretch justify-between h-full divi-y-1 divide-y divide-dashed">
                    <div class="flex flex-row justify-between items-end">
                        <div class="flex items-center justify-center gap-x-[10px]">
                            <img src="/assets/podcast/img/brooklyn.png" alt="brook">

                            <div>
                                <h1 class="recent-title" style="font-size: 14px;">Brooklyn Simmons</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Zuid Area</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-right flex flex-col gap-y-[7px] mr-[58px]">
                                <h1 class="recent-title">1,240</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Deliveries</p>
                            </div>
                            <div class='text-center flex flex-col gap-y-[7px] mr-[50px]'>
                                <h1 class="recent-title">$5,400</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Earnings</p>
                            </div>
                            <div class="flex mr-[46px] flex-col gap-y-[7px] text-right">
                                <div class="flex flex-row">
                                    <div v-for="i in 5">
                                        <img class="h-[17px] w-[17px]" src="/assets/icons/star.svg" alt="star">
                                    </div>
                                </div>
                                <p class="recent-sub-title" style="font-size: 13px">Rating</p>
                            </div>
                            <div>
                                <img class="bg-[#F1F1F2] p-[7px] w-[25px] h-[25px] rounded-md"
                                    src="/assets/icons/arrow-right.svg" alt="arrow-right">
                            </div>
                        </div>
                    </div>

                    <div class=" pt-3 flex flex-row justify-between items-end">
                        <div class="flex items-center justify-center gap-x-[10px]">
                            <img src="/assets/podcast/img/brooklyn.png" alt="brook">

                            <div>
                                <h1 class="recent-title" style="font-size: 14px;">Brooklyn Simmons</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Zuid Area</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-right flex flex-col gap-y-[7px] mr-[58px]">
                                <h1 class="recent-title">1,240</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Deliveries</p>
                            </div>
                            <div class='text-center flex flex-col gap-y-[7px] mr-[50px]'>
                                <h1 class="recent-title">$5,400</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Earnings</p>
                            </div>
                            <div class="flex mr-[46px] flex-col gap-y-[7px] text-right">
                                <div class="flex flex-row">
                                    <div v-for="i in 5">
                                        <img class="h-[17px] w-[17px]" src="/assets/icons/star.svg" alt="star">
                                    </div>
                                </div>
                                <p class="recent-sub-title" style="font-size: 13px">Rating</p>
                            </div>
                            <div>
                                <img class="bg-[#F1F1F2] p-[7px] w-[25px] h-[25px] rounded-md"
                                    src="/assets/icons/arrow-right.svg" alt="arrow-right">
                            </div>
                        </div>
                    </div>
                    <div class=" pt-3 flex flex-row justify-between items-end">
                        <div class="flex items-center justify-center gap-x-[10px]">
                            <img src="/assets/podcast/img/brooklyn.png" alt="brook">

                            <div>
                                <h1 class="recent-title" style="font-size: 14px;">Brooklyn Simmons</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Zuid Area</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-right flex flex-col gap-y-[7px] mr-[58px]">
                                <h1 class="recent-title">1,240</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Deliveries</p>
                            </div>
                            <div class='text-center flex flex-col gap-y-[7px] mr-[50px]'>
                                <h1 class="recent-title">$5,400</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Earnings</p>
                            </div>
                            <div class="flex mr-[46px] flex-col gap-y-[7px] text-right">
                                <div class="flex flex-row">
                                    <div v-for="i in 5">
                                        <img class="h-[17px] w-[17px]" src="/assets/icons/star.svg" alt="star">
                                    </div>
                                </div>
                                <p class="recent-sub-title" style="font-size: 13px">Rating</p>
                            </div>
                            <div>
                                <img class="bg-[#F1F1F2] p-[7px] w-[25px] h-[25px] rounded-md"
                                    src="/assets/icons/arrow-right.svg" alt="arrow-right">
                            </div>
                        </div>
                    </div>
                    <div class=" pt-3 flex flex-row justify-between items-end">
                        <div class="flex items-center justify-center gap-x-[10px]">
                            <img src="/assets/podcast/img/brooklyn.png" alt="brook">

                            <div>
                                <h1 class="recent-title" style="font-size: 14px;">Brooklyn Simmons</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Zuid Area</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-right flex flex-col gap-y-[7px] mr-[58px]">
                                <h1 class="recent-title">1,240</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Deliveries</p>
                            </div>
                            <div class='text-center flex flex-col gap-y-[7px] mr-[50px]'>
                                <h1 class="recent-title">$5,400</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Earnings</p>
                            </div>
                            <div class="flex mr-[46px] flex-col gap-y-[7px] text-right">
                                <div class="flex flex-row">
                                    <div v-for="i in 5">
                                        <img class="h-[17px] w-[17px]" src="/assets/icons/star.svg" alt="star">
                                    </div>
                                </div>
                                <p class="recent-sub-title" style="font-size: 13px">Rating</p>
                            </div>
                            <div>
                                <img class="bg-[#F1F1F2] p-[7px] w-[25px] h-[25px] rounded-md"
                                    src="/assets/icons/arrow-right.svg" alt="arrow-right">
                            </div>
                        </div>
                    </div>
                    <div class=" pt-3 flex flex-row justify-between items-end">
                        <div class="flex items-center justify-center gap-x-[10px]">
                            <img src="/assets/podcast/img/brooklyn.png" alt="brook">

                            <div>
                                <h1 class="recent-title" style="font-size: 14px;">Brooklyn Simmons</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Zuid Area</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-right flex flex-col gap-y-[7px] mr-[58px]">
                                <h1 class="recent-title">1,240</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Deliveries</p>
                            </div>
                            <div class='text-center flex flex-col gap-y-[7px] mr-[50px]'>
                                <h1 class="recent-title">$5,400</h1>
                                <p class="recent-sub-title" style="font-size: 13px">Earnings</p>
                            </div>
                            <div class="flex mr-[46px] flex-col gap-y-[7px] text-right">
                                <div class="flex flex-row">
                                    <div v-for="i in 5">
                                        <img class="h-[17px] w-[17px]" src="/assets/icons/star.svg" alt="star">
                                    </div>
                                </div>
                                <p class="recent-sub-title" style="font-size: 13px">Rating</p>
                            </div>
                            <div>
                                <img class="bg-[#F1F1F2] p-[7px] w-[25px] h-[25px] rounded-md"
                                    src="/assets/icons/arrow-right.svg" alt="arrow-right">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
