<script setup lang="ts">
</script>

<template>
  <main>
    <div class="py-2 px-2 mb-6 mt-6 dark:bg-darkfg bg-white rounded-xl flex items-center justify-evenly">
      <!-- SEARCH ICON -->
      <div class="ml-2">
        <svg class="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
          <path fill="currentColor"
            d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48ZM38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74Z" />
        </svg>
      </div>
      <!-- SEARCH INPUT -->
      <form action="#" method="post" class="w-full h-10 mx-4">
        <input type="text" maxlength="50" name="search" id="search" autofocus placeholder="Search GITHUB username"
          class="bg-transparent h-full w-full outline-none border-none focus:border-none focus:outline-none">
      </form>
      <!-- SEARCH BUTTON -->
      <button class="btn capitalize font-semibold">search</button>
    </div>
    <div class="w-full h-96 dark:bg-darkfg bg-white rounded-xl"></div>
</main></template>
