<template>
    <div id="ft">
        <h1>{{ msg }}</h1>
      <router-link :to="{ name: 'contacts' }"> Contacts </router-link>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
  #ft {
    background-color: #494949;
    text-align: center;
    margin: 0px 0px 0px 0px;              /* Отступ от краёв */
    padding: 0px 0px 10px 0px;           /* Отступ от краёв коробки */
  }
  a {
      color: #FFCC00;
      /* border: 111px 0px 22222px 0px; */
  }
  a.router-link-exact-active {
      color: #8208ba;
      
    }
</style>>