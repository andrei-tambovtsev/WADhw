<template>
  <div id="app">
    <HeaderComponent msg="Welcome to our website"></HeaderComponent>
    <router-view />
    <FooterComponent msg="Contact us!"></FooterComponent>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
  name: "app",
  components: { HeaderComponent, FooterComponent },
  data() {
    return {};
  },
};
</script>


<style lang="scss">
#app {
  font-family: Impact;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #000000;
  background-color: #FFCC00
}
</style>
