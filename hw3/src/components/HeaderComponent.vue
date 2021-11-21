<template>
    <div id="nav">
        <h1>{{ msg }}</h1>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'contacts' }"> Contacts </router-link> |
      <router-link to="/about">About</router-link>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>