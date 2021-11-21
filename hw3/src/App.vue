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
  methods: {
    IncreasePrice: function () {
      this.$store.commit("IncreasePrice");
    },
    DecreasePrice: function () {
      this.$store.commit("DecreasePrice");
    },
  },
  components: { HeaderComponent, FooterComponent },
  /* props: ["productList"], */ /* Не нужная строчка?"!" */ /* Я закоментил и стало работать, хотя в практосе этого сделать не написано. А ПОТОМ ПОМЕНЯЛ НАЗВАНИЕ НА productLIST(а было productList), разкоментил, и всё стало работать. Это видимо убрало конфуз?? И всё до сих пор работатет без этой строчки */
  data() {
    return {};
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFCC00
}
</style>
