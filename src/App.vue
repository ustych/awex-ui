<template>
  <div class="w-full">
    <Header class="absolute inset-x-0 bg-white shadow-md h-12" />

    <div class="flex">
      <Sidebar class="fixed inset-0 z-10 w-48 mt-12" />

      <div class="ml-48 bg-gray-200 w-full h-screen pt-12">
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
