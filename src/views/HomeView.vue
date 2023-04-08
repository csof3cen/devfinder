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
      <input type="text" maxlength="50" name="search" id="search" autocomplete="off" v-model="username" @keydown.enter="search()" autofocus
        placeholder="Search GITHUB username"
        class="bg-transparent w-full outline-none border-none focus:border-none focus:outline-none h-10 mx-4">
      <!-- SEARCH BUTTON -->
      <button class="btn capitalize font-semibold">search</button>
    </div>

    <!-- USER DETAILS SECTION -->
    <div class="w-full dark:bg-darkfg bg-white rounded-xl p-10">
      <div class="" v-if="notFound === true">
        <p class="font-semibold text-xl text-center">User not foud ! Please check provided username.</p>
      </div>
      <div v-if="userInfos && notFound === false" class="flex items-start w-full">
        <!-- USER AVATAR -->
        <div class="min-w-max">
          <img :src="userInfos.avatar_url" alt="User avatar" class="h-32 w-32 rounded-full">
        </div>
        <!-- USER DETAILS -->
        <div class="flex flex-col w-full ml-10">
          <div class="flex w-full justify-between items-center">
            <div class="text-2xl font-semibold">{{ userInfos.name ?? 'No display name' }}</div>
            <div class="text-base text-gray-300">Joined {{ joinedDate }}</div>
          </div>

          <!-- USERNAME -->
          <div class="mt-4 text-primary/80 hover:text-primary">
            <a :href="userInfos.html_url" target="_blank" rel="noopener noreferrer">@{{ userInfos.login }}</a>
          </div>

          <!-- USER BIO -->
          <div class="semi-muted mt-6">{{ userInfos.bio ?? 'This profile has no bio' }}</div>

          <!-- USER REPO STATS -->
          <div class="dark:bg-darkbg bg-gray-200 p-4 flex justify-between rounded-lg mt-6">
            <div class="flex flex-col">
              <div class="semi-muted">Repos</div>
              <div class="text-xl font-semibold">{{ userInfos.public_repos }}</div>
            </div>
            <div class="flex flex-col">
              <div class="semi-muted">Followers</div>
              <div class="text-xl font-semibold">{{ userInfos.followers }}</div>
            </div>
            <div class="flex flex-col">
              <div class="semi-muted">Following</div>
              <div class="text-xl font-semibold">{{ userInfos.following }}</div>
            </div>
          </div>

          <!-- USER SOCIAL LINKS AND OTHER DETAILS -->
          <div class="mt-6">
            <!-- LINKS FISRT ROW -->
            <div class="flex justify-between">
              <!-- LOCATION -->
              <div class="flex space-x-4 items-center text-sm">
                <div class="icon">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </div>
                <div class="">{{ userInfos.location }}</div>
              </div>

              <!-- TWITTER -->
              <div class="flex space-x-4 items-center text-sm">
                <div class="icon">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />
                  </svg>
                </div>
                <div class="">{{ userInfos.twitter_username ?? 'Not Available' }}</div>
              </div>
            </div>
            <!-- LINKS SECOND ROW -->
            <div class="flex justify-between mt-4">
              <!-- BLOG -->
              <div class="flex space-x-4 items-center text-sm">
                <div class="icon">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42Z"/></svg>
                </div>
                <div class="">{{ userInfos.blog }}</div>
              </div>

              <!-- COMPANY -->
              <div class="flex space-x-4 items-center text-sm">
                <div class="icon">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M17 15h2v2h-2v-2Zm2-4h-2v2h2v-2Z"/><path fill-rule="evenodd" d="M13 7h10v14H1V3h12v4ZM8 5h3v2H8V5Zm3 14v-2H8v2h3Zm0-4v-2H8v2h3Zm0-4V9H8v2h3Zm10 8V9h-8v2h2v2h-2v2h2v2h-2v2h8ZM3 19v-2h3v2H3Zm0-4h3v-2H3v2Zm3-4V9H3v2h3ZM3 7h3V5H3v2Z" clip-rule="evenodd"/></g></svg>
                </div>
                <div class="">{{ userInfos.company ?? 'Not Available' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      username: "csof3cen",
      userInfos: Object(),
      joinedDate: "",
      notFound: false,
    };
  },
  mounted(){
    this.search();
  },
  methods: {
    search() {
      axios
        .get("https://api.github.com/users/" + this.username)
        .then((res) => {
          console.log(res.data);
          if (res) {
            this.userInfos = res.data;
            let date = res.data.created_at;
            let format = new Date(date);
            let day = format.getUTCDate();
            let month = format.getUTCMonth() + 1;
            let year = format.getUTCFullYear();
            let formattedDate = day + "." + month + "." + year;
            this.joinedDate = formattedDate;
          }
          this.notFound = false;
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
          } else if (err.request) {
            console.log("no response found");
          } else {
            console.log(err);
            this.notFound = true;
          }
          this.notFound = true;
        });
    },
  },
};
</script>