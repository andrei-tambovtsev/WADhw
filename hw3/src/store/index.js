import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    POSTSList: [
      { pic: "https://sun9-3.userapi.com/impg/6L2vHQ5Z3L5eybKvvHErvLwwp-V3_8Y_YYgXDw/wyZkE_I2iBw.jpg?size=600x347\u0026quality=96\u0026sign=d017fa8ad76dac2b88cb64862ecc5b83\u0026type=album", text: "I really like this meme. It brings me back my childhood memories #BringBackOldCoding #ForbidHashtags", likes: "0", timeStamp: "Sept 24, 2021 18:16", inCaseNoPicText: "Picture not found :|" },
      { pic: null, text: "A programmer puts two glasses on the bedside table before going to sleep. \n A full one, in case he gets thirsty, and an empty one, in case he doesn't.", likes: "0", timeStamp: "Sept 25, 2021 19:17", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://sun9-44.userapi.com/impg/OCZSVWT_JaofCc3-DArq9svnwBY7j2t_bBLhVA/Ddsfi9AsNCU.jpg?size=527x472\u0026quality=96\u0026sign=24bd97c74bb615c897264b6324ae2ec2\u0026type=album", text: "ahaha big brain \n #bigBrainMoment", likes: "0", timeStamp: "Sept 26, 2021 20:18", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://sun9-85.userapi.com/impg/y5wH6RHTAI1U_hvtliRYSiXRtGoFAyQBqw9ZxQ/K80t3j4Vi7U.jpg?size=494x721\u0026quality=96\u0026sign=0c37e80ae9a761e840e88c08a4c1285b\u0026type=album", text: "Captcha done right", likes: "0", timeStamp: "Sept 28, 2021 00:42", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://sun9-40.userapi.com/c810135/u156948694/docs/9f33417eaa0f/C0xNRJLXEAArQVk.gif?extra=WQ4d2_nIZ6LV0fNtBGArJMu7PAKjjjt6EeQNR-imVcgbxNo0jrMdaRiw_JSAVqCgBlXI-2fz0pEVPLHCEuppgbsPuWjGtBfKeBXJMCGcizKiYHWbpIzcOqpoNSEgfomzMiXb1et5SO-djOVhppwbnLp_Sw", text: "RED", likes: "0", timeStamp: "Sept 28, 2021 00:45", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://psv4.userapi.com/c810435/u156948694/docs/a59d7a32de50/C0xNWIQXEAIf0OJ.gif?extra=aZlwHGLCJpqGpCygP7cu6m421JIP5U9MZtGuImsjvaTSIvh12JnJ09q8e8D8sesdUKO1B-iPeqDi9gECgjJL0HtK_dhJujAFCEP0HH9NdHUmfthqQbL5UxCRkxL8itcJJE1_XQa0sYm2WVOqxKUsy4jyIA", text: "BLUE", likes: "0", timeStamp: "Sept 28, 2021 00:46", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://sun9-63.userapi.com/impg/YzOqINKSAQIaQ8FhkTrpQIOREGqFE8ru8UlkNg/ct9y03Y6GdA.jpg?size=623x629\u0026quality=96\u0026sign=8a68d9d264c1eea1b5a07efd57ec0e19\u0026type=album", text: "C++ = faithInHumanity--", likes: "0", timeStamp: "Sept 29, 2021 13:56", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://sun9-46.userapi.com/impg/3SOJL5sRWlM6LhaT6CEaq4Y4OXDty3XpZnGo3g/Z4xbISRXzkw.jpg?size=650x1319\u0026quality=96\u0026sign=dc0070400b2130f4d5cb31d051b1ac5a\u0026type=album", text: "Test for long pics", likes: "0", timeStamp: "Sept 30, 2021 00:40", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://sun9-22.userapi.com/impg/uA8tkFcp40QB8Tj_vDWTK_Llz4Hm8DxFVakokQ/l3A5WH0PghI.jpg?size=400x491\u0026quality=96\u0026sign=9436e3a8eb319dddcf33cfcae7ede631\u0026type=album", text: "Whait that's illegal", likes: "0", timeStamp: "Okt 1, 2021 04:17", inCaseNoPicText: "Picture not found :|" },
      { pic: "https://sun9-72.userapi.com/impg/-eCcGaz4l8HNJUibDghgZdA-2MRKOnrVpCOb1Q/aU4_0kja0Eg.jpg?size=960x960\u0026quality=96\u0026sign=016b16b1cb32bd74cbe91363e7af44e5\u0026type=album", text: "My grades at school were only C's", likes: "0", timeStamp: "Okt 2, 2021 12:12", inCaseNoPicText: "Picture not found :|" }]
  },
  mutations: {
    IncreasePrice: state => {
      state.POSTSList.forEach(post => {
        post.likes = 0;
      })
    },
    DecreasePrice: state => {
      state.productList.forEach(product => {
        product.price -= 1;
      })
    },
  }
})
