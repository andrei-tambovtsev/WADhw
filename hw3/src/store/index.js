import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    POSTSList: [{"pic":"https://media.sproutsocial.com/uploads/meme-example.jpg","text":"I really like this meme. It brings me back my childhood memories #BringBackOldCoding #ForbidHashtags","likes":"0","timeStamp":"Sept 24, 2021 18:16","inCaseNoPicText":"Picture not found :|"},{
      "pic":null,"text":"A programmer puts two glasses on the bedside table before going to sleep. \n A full one, in case he gets thirsty, and an empty one, in case he doesn't.","likes":"0","timeStamp":"Sept 25, 2021 19:17","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg","text":"ahaha big brain \n #bigBrainMoment","likes":"0","timeStamp":"Sept 26, 2021 20:18","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://i.insider.com/6088f9a30da8f40018033e29?width=700","text":"Captcha done right","likes":"0","timeStamp":"Sept 28, 2021 00:42","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://exse.eyewated.com/pict/c38cc4d7ef9a30de-1024x683.jpg","text":"RED","likes":"0","timeStamp":"Sept 28, 2021 00:45","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://psv4.userapi.com/c810435/u156948694/docs/a59d7a32de50/C0xNWIQXEAIf0OJ.gif?extra=aZlwHGLCJpqGpCygP7cu6m421JIP5U9MZtGuImsjvaTSIvh12JnJ09q8e8D8sesdUKO1B-iPeqDi9gECgjJL0HtK_dhJujAFCEP0HH9NdHUmfthqQbL5UxCRkxL8itcJJE1_XQa0sYm2WVOqxKUsy4jyIA","text":"BLUE","likes":"0","timeStamp":"Sept 28, 2021 00:46","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Typical_internet_meme_image_format.svg/1200px-Typical_internet_meme_image_format.svg.png","text":"C++ = faithInHumanity--","likes":"0","timeStamp":"Sept 29, 2021 13:56","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://cdn.vox-cdn.com/thumbor/3MyX_yQsQFv8YK7K1kx_R3Vc490=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315879/npcmeme.jpg","text":"Test for long pics","likes":"0","timeStamp":"Sept 30, 2021 00:40","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://i.ytimg.com/vi/8EUkr90BiCk/maxresdefault.jpg","text":"Whait that's illegal","likes":"0","timeStamp":"Okt 1, 2021 04:17","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://cdn.vox-cdn.com/thumbor/o53k-QbKFns_s-OP89E8o34Ho8U=/0x0:599x500/1200x800/filters:focal(286x259:380x353)/cdn.vox-cdn.com/uploads/chorus_image/image/69634799/download__5_.0.jpg","text":"My grades at school were only C's","likes":"0","timeStamp":"Okt 2, 2021 12:12","inCaseNoPicText":"Picture not found :|"}]
  },
  mutations: {
      resetLikes: state => {
      state.POSTSList.forEach(post => {
        post.likes = 0;
      })
    },
  }
})
