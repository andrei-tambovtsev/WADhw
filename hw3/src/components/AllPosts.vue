<template>                                                                              <!-- Синяя часть -->
    <div id= "comp-list-two">
        <h1> Book list two</h1>
        <p class="item" v-for="post in postsList" :key="post.id">                      <!-- В Contactus.vue тоже есть v-for. Там без ':key' вылетает ошибка(и здесь тоже). А без ':email' всё также продолжает работать.
                                                                                                    А ещё в ':key' на место 'id' можно поставить вообще ЧТО УГОДНО, главное чтоб было написано ':key="product. ... "' -->
            <span class="author">    timeStap:   {{post.timeStamp}}    </span> <br>
            <img class="book" :src = post.pic >      pic:             
               <!--  <img src={{post.pic}} alt="meme" > --><br>
            <span class="goodreads"> inCaseNoPicText: {{post.inCaseNoPicText}} </span><br>
            <span class="price">     text:       {{post.text}}     </span><br>
            <span class="likes">     likes:       {{post.likes}}     </span>
            <button class="adprice" v-on:click="post.likes++"> Add like </button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "PostsLIIIIIST",
        data: function() {
            return {
            }
        },
        computed: {
            postsList(){
                return this.$store.state.POSTSList
            }
        }
    }
</script>


<style scoped>


</style>

