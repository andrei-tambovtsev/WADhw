const express = require('express');         /* Express - это фреймворк с прошлого практоса */
const app = express();
const bp = require('body-parser')
const pool = require('./database');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// !!! register the ejs view engine
app.set('view engine', 'ejs');

app.listen(3000);                           /* http://localhost:3000/ */

app.use(express.static('Public'));          //Это чтобы использовать static files (такие как цсс-файлы и картинки). Указываем папку Public, где наши статичные файлы и должен будет искать EXPRESS.

/* app.get('/', (req, res) => {                
   res.render('posts', {the_title:"Home page"});
}); */

app.get('/', async (req, res) => {
    /* let postS =                     
    [{"pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Typical_internet_meme_image_format.svg/1200px-Typical_internet_meme_image_format.svg.png","text":"I really like this meme. It brings me back my childhood memories #BringBackOldCoding #ForbidHashtags","likes":"0","timeStamp":"Sept 24, 2021 18:16","inCaseNoPicText":"Picture not found :|"},{
      "pic":null,"text":"A programmer puts two glasses on the bedside table before going to sleep. \n A full one, in case he gets thirsty, and an empty one, in case he doesn't.","likes":"0","timeStamp":"Sept 25, 2021 19:17","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg","text":"ahaha big brain \n #bigBrainMoment","likes":"0","timeStamp":"Sept 26, 2021 20:18","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://i.insider.com/6088f9a30da8f40018033e29?width=700","text":"Captcha done right","likes":"0","timeStamp":"Sept 28, 2021 00:42","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://exse.eyewated.com/pict/c38cc4d7ef9a30de-1024x683.jpg","text":"RED","likes":"0","timeStamp":"Sept 28, 2021 00:45","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://psv4.userapi.com/c810435/u156948694/docs/a59d7a32de50/C0xNWIQXEAIf0OJ.gif?extra=aZlwHGLCJpqGpCygP7cu6m421JIP5U9MZtGuImsjvaTSIvh12JnJ09q8e8D8sesdUKO1B-iPeqDi9gECgjJL0HtK_dhJujAFCEP0HH9NdHUmfthqQbL5UxCRkxL8itcJJE1_XQa0sYm2WVOqxKUsy4jyIA","text":"BLUE","likes":"0","timeStamp":"Sept 28, 2021 00:46","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Typical_internet_meme_image_format.svg/1200px-Typical_internet_meme_image_format.svg.png","text":"C++ = faithInHumanity--","likes":"0","timeStamp":"Sept 29, 2021 13:56","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://cdn.vox-cdn.com/thumbor/3MyX_yQsQFv8YK7K1kx_R3Vc490=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315879/npcmeme.jpg","text":"Test for long pics","likes":"0","timeStamp":"Sept 30, 2021 00:40","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://i.ytimg.com/vi/8EUkr90BiCk/maxresdefault.jpg","text":"Whait that's illegal","likes":"0","timeStamp":"Okt 1, 2021 04:17","inCaseNoPicText":"Picture not found :|"},
      {"pic":"https://cdn.vox-cdn.com/thumbor/o53k-QbKFns_s-OP89E8o34Ho8U=/0x0:599x500/1200x800/filters:focal(286x259:380x353)/cdn.vox-cdn.com/uploads/chorus_image/image/69634799/download__5_.0.jpg","text":"My grades at school were only C's","likes":"0","timeStamp":"Okt 2, 2021 12:12","inCaseNoPicText":"Picture not found :|"}];
     */

    //   res.render('posts', { pOsts: postS , the_title:"Home page" } );                          /* Можно было бы и posts:posts написать, и всё бы работало, но мне ТАК понятнее. */
    try {
        console.log("get posts request has arrived");
        let posts = await pool.query(
            "SELECT * FROM poststable"
        );
        res.render('posts', { pOsts: posts.rows, the_title: "Home page" });
    } catch (err) {
        console.error(err.message);
    }

});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
});
app.get('/singlepost/:id', async (req, res) => {

    try {
        console.log("get single post request has arrived");
        const { id } = req.params;
        const posts = await pool.query(
            "SELECT * FROM poststable WHERE id = $1", [id]
        );
        console.log(posts);
        res.render('singlepost', {post: posts.rows[0]});
    } catch (err) {
        console.error(err.message);
    }
    res.render('singlepost');
});

app.post('/newpost', async (req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO poststable( pic, text, timestamp) values ($1, $2, current_date) RETURNING*", [post.pic, post.text]
        );
        console.log(post)
        res.json(newpost)
    } catch (err) {
        console.error(err.message);
    }
});
app.use((req, res) => {
    res.status(404).render('404');
});

app.put('/singlepost/:id/like', async(req, res) => {
    try {
    const { id } = req.params;
    const post = req.body;
    console.log("update request has arrived");
    const updatepost = await pool.query(
    "UPDATE poststable SET (likes) = ($4) WHERE id = $1", [id, post.likes+1]
    );
    res.json(post);
    } catch (err) {
    console.error(err.message);
    }
   });