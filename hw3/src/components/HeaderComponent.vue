<template>
    <div id="nav">
        <h1>{{ msg }}</h1>
        <p>
          <router-link to="/">Home</router-link> |
          <router-link :to="{ name: 'contacts' }"> Contacts </router-link> |
          <router-link to="/about">About</router-link>
        </p>
      
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

<style lang="scss">
#nav {
  margin: 0px;              /* Отступ коробки */
  padding: 10px;

  a {
    color: #494949;

    &.router-link-exact-active {
      color: #8208ba;
    }
  }
  text-align: center;
  background-color: black;

  h1{
    color:#FFCC00;
    font-size: 40px;
  }
  p{
    /* background-color: #494949; */
    margin: 0px 500px 0px 500px;
    font-size: 20px;
  }
}
</style>