<template>
  <div class="products">
    <h2>MY POSTS:</h2>

    <!-- <product_compo_1> </product_compo_1> -->

    <button v-on:click="resetLikes">RESET LIKES</button>

    <allposts> </allposts>
  </div>
</template>


<script>
/*     import product_compo_1 from "@/components/product_compo_1.vue"; */
  import allposts from "@/components/AllPosts.vue";

  export default {
    name: "Home",
    methods: {
      resetLikes: function () {
        this.$store.commit("resetLikes");
      },
    },
    components: { allposts },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  div.products{
    background-color: #494949;
    margin: 0px 250px 0px 250px;
    padding: 3px 3px 3px 3px;
  }
  h2 {
      text-align: center;
      font-size: 40px;
      font-family: sans-serif;
      color: #FFCC00;;
      background-color: black;
      margin: 3% -0.4% 1% 20%;
      padding: 0% 50% 0% 0%;
    }
    button{
      background-color: black;
      font-family: sans-serif;
      color: #FFCC00;;
      margin: 0% 0% 0% 85%;
    }
</style>
