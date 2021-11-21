<template>                                                                              <!-- Синяя часть -->
    <div id= "comp-list-two">
        <div class="blog_post" v-for="post in postsList" :key="post.id">                      <!-- В Contactus.vue тоже есть v-for. Там без ':key' вылетает ошибка(и здесь тоже). А без ':email' всё также продолжает работать.
                                                                                                    А ещё в ':key' на место 'id' можно поставить вообще ЧТО УГОДНО, главное чтоб было написано ':key="product. ... "' -->
            <div class="blog_info">
                <img alt="account" src="../assets/account.png" />
                <span class="timeStamp"> Time: {{post.timeStamp}}</span>
            </div>
            <div class="blog_picture">
                
                <img alt="meme" :src="post.pic" />
            </div>
            <div class="blog_text"><p> {{post.text}} </p></div>
            <span class="likes">     likes:       {{post.likes}}     </span>
            <button class="adprice" v-on:click="post.likes++">
                <img alt="like" src="../assets/thumb-up.png" />
            </button>
        </div>
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


<style>

div.blog_post{
    margin-left: 20%;
    margin-top: 5%;
    width: 60%;
    background-color: #FFCC00;
    box-shadow: 10px 10px 30px black;
  }

  h1 + div.blog_post{
    box-shadow: 10px 10px 50px #FF8F00 ;
  }

div.blog_info {
    height: 50px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    align-items: center;

  }

  div.blog_info > img {
    margin: 10%;
    margin-left: 1%;
    height: 80%;
  }

  div.blog_info span{
    margin: 5%;
    color: #FFCC00 ;
  }

  div.blog_picture {
    max-width: 100%;
    background-color: black;
  }

  div.blog_picture > img{
    width:  100%;
  }

  div.blog_text p{
    margin: 2%;
    font-family: "Impact";
  }

  button.adprice  {
    background-color: #FFCC00 ;
    margin: 2%;
    width: 50px;
  }

  button.adprice:hover  {
    background-color: #c59e00 ;
  }


  button.adprice > img {
    max-width: 100%;
  }


</style>