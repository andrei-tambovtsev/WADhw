<template>
  <div class="products">
    <h2>Posts:</h2>

    <!-- <product_compo_1> </product_compo_1> -->

    <button v-on:click="IncreasePrice">RESET LIKES</button>

    <allposts> </allposts>
  </div>
</template>


<script>
/*     import product_compo_1 from "@/components/product_compo_1.vue"; */
import allposts from "@/components/AllPosts.vue";

export default {
  name: "Home",
  methods: {
    IncreasePrice: function () {
      this.$store.commit("IncreasePrice");
    },
    DecreasePrice: function () {
      this.$store.commit("DecreasePrice");
    },
  },
  components: { allposts },
  /* props: ["productList"], */ /* Не нужная строчка?"!" */ /* Я закоментил и стало работать, хотя в практосе этого сделать не написано. А ПОТОМ ПОМЕНЯЛ НАЗВАНИЕ НА productLIST(а было productList), разкоментил, и всё стало работать. Это видимо убрало конфуз?? И всё до сих пор работатет без этой строчки */
  data() {
    return {};
  },
};
</script>
