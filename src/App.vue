<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="absolute filter blur-3xl -z-50 mix-blend-normal opacity-75 animate-blobright top-[14%] left-[48%] w-72 h-72 bg-purple-400 rounded-full">
  </div>
  <div
    class="absolute filter blur-3xl -z-50 mix-blend-normal opacity-75 top-[18%] right-[48%] w-72 h-72 bg-yellow-300 rounded-full animate-blobleft">
  </div>
  <div
    class="absolute filter blur-3xl -z-50 mix-blend-normal opacity-75 top-[27%] right-[42%] w-72 h-72 bg-pink-300 rounded-full animate-blobright">
  </div>
  <header class="flex justify-between items-center">
    <!-- TITLE -->
    <div class="font-bold text-xl">devfinder</div>
    <!-- THEME BUTTON -->
    <div class="flex items-center space-x-3">
      <div class="uppercase">{{ theme !== 'dark' ? 'light' : 'dark' }}</div>
      <button class="icon-btn">
        <svg v-if="theme !== 'dark'" @click="toggleTheme" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="32"
          height="32" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688q0-.412.275-.712l1.4-1.425q.3-.3.712-.3q.413 0 .713.3q.275.275.275.7q0 .425-.275.7L18.35 7.05q-.275.275-.7.275q-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275q.425 0 .7.275L7.05 5.65q.275.275.275.7q0 .425-.275.7q-.3.275-.7.275q-.4 0-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.712q0-.413.275-.688q.275-.275.688-.275q.412 0 .712.275l1.425 1.4q.3.275.287.7q-.012.425-.287.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7q0-.425.275-.7L5.65 16.95q.275-.275.688-.275q.412 0 .712.275q.3.3.3.713q0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0 0q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Z" />
        </svg>
        <svg @click="toggleTheme" v-else class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
          viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z" />
        </svg>
      </button>
    </div>
  </header>
  <RouterView />


  <div class="flex items-center justify-center mt-10">
    <div class="relative group">
      <div
        class="absolute -inset-0.5 bg-gradient-to-r from from-pink-600 to-primary  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
      </div>

      <a href="https://github.com/csof3cen/devfinder" target="_blank"
        class="relative flex items-center md:divide-x dark:divide-gray-500/60 divide-gray-200 px-7 py-4 bg-white dark:bg-darkfg rounded-lg leading-none border dark:border-primary/10 border-primary/30">
        <div class="flex items-center space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>

          <span class="pr-6 dark:text-gray-100 text-slate-900 hidden md:inline-block">Devfinder Bêta</span>
        </div>
        <span class="pl-6 text-primary group-hover:text-primary-light transition duration-200">Contribute&nbsp;
          &rarr;</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      theme: "",
    };
  },
  unmounted() {
    this.theme = localStorage.theme;
    console.log("Theme:" + this.theme);
  },
  methods: {
    toggleTheme() {
      this.theme = localStorage.theme;
      if (localStorage.getItem('theme')) {
        if (localStorage.theme == 'dark') {
          localStorage.theme = 'light'
        } else if (localStorage.theme == 'light') {
          localStorage.theme = 'dark'
        } else {
          localStorage.removeItem('theme')
        }
      } else {
        localStorage.theme = 'dark';
      }

      document.documentElement.classList.remove('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add(localStorage.theme ?? 'dark')
    }
  }
}
</script>