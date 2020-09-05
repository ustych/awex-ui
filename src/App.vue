<template>
  <div class="w-full">
    <Header class="absolute inset-x-0 bg-white h-12 shadow-md" />

    <div class="flex">
      <Sidebar class="fixed inset-0 z-10 bg-gray-800 w-48 mt-12" />

      <div class="ml-48 pt-12 bg-gray-200 w-full h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<!-- <router-link to="/about">About</router-link> -->
