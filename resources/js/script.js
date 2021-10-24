$(document).ready(function(){ //Dropdown Menu
  $("#dropdown").hide();
  let dropdown_shown = false;
  $("#account").click(function(){
    if(dropdown_shown){
      console.log("hide dropdown")
      $("#dropdown").hide();
      dropdown_shown = false;
    }
  else{
    console.log("show dropdown")
    $("#dropdown").show();
    dropdown_shown = true;
  }
  });
  $(function() {
    $.get("https://www.npoint.io/docs/11f5f6db3c0134b392c2", function(posts) {
      for (post of posts) {
        let divpost = $('<div class="blog_post">');
        let divinfo = $('<div class="blog_info">');
        let imginfo = $('<img src="resources/img/account.png" alt="account">');
        let spaninfo = $('<span= "timeStamp">').text(post.timeStamp);
        //let divinfoclose = $('</div>');
        let divpict = $('<div class="blog_picture">');
        let pictimg = $('<img src>').text(post.pic);
        //let divpictclose = $('</div>');
        let divtext = $('<div class="blog_text">');
        let text = $('<p>').text(post.text);
        //let divtextclose = $('</div>');
        let likebutton = $('<button class="like">');
        let imglike = $('<img src="resources/img/thumb-up.png" alt="like">');
        //let divlikeclose = $('</button>');
       
      
        divinfo.append(imginfo);
        divinfo.append(spaninfo);
        divpost.append(divinfo);
        //divpost.append(divinfoclose);
        divpict.append(pictimg);
        divpost.append(divpict);
        //divpost.append(divpictclose);
        divtext.append(text);
        divpost.append(divtext);
        //divpost.append(divtextclose);
        likebutton.append(imglike);
        divpost.append(likebutton);
        //divpost.append(divlikeclose);
        $('background_line').append(divpost)
      }
  })
});


});

//jQuery function that shows posts
$(function() {
  $.get("https://api.npoint.io/11f5f6db3c0134b392c2", function(posts) {
      for (post of posts) {
          let div = $('<div class= "blog_post">');

          let div2 = $('<div class= "blog_info">');
          let acPic =$('<img src="resources/img/account.png" alt="account">')
          let time = $('<span>').text(post.timeStamp);
          div.append(div2);
          div2.append(acPic);
          div2.append(time);


          let div3 = $('<div class= "blog_picture">');
          let picAdress = post.pic;
          // console.log(picAdress);
          let img = $('<img>').attr("src", picAdress);
          let noPicCase = post.inCaseNoPicText;
          $(img).css('color', '#FFCC00');
          // console.log(noPicCase);
          img.attr("alt", noPicCase);
          div.append(div3);
          div3.append(img); 

          


          let div4 = $('<div class= "blog_text">');
          let blogText = $('<p>').text(post.text);
          div.append(div4);
          div4.append(blogText);

          let likeButton = $('<button class="like">');
          let likeButtonPic = $('<img src="resources/img/thumb-up.png" alt="like">');
          div.append(likeButton);
          likeButton.append(likeButtonPic);

          
          $('div.background_line').prepend(div);
      }
  })
});
// Я тут шаманю немножечко
// let MYPOSTS = document.querySelector("body > div.background_line > h1")
// $('div.background_line').prepend(MYPOSTS);
