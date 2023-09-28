<template>
  <section class="flex absolute w-screen z-50 justify-center items-center h-screen bg-background">
    <div class="max-w-md w-full bg-white rounded shadow-md border border-[#F1F1F2] p-6 space-y-4">
      <div class="mb-4">
        <p class="text-gray-600">Log In</p>
      </div>
      <div>
        <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
          type="text" placeholder="Email">
      </div>
      <div>
        <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
          type="text" placeholder="Password">
      </div>
      <div>
        <button
          class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign
          In</button>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex flex-row items-center">
        </div>
        <div>
          <a class="text-sm text-blue-600 hover:underline" href="/signup">Kayıt Ol</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
