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
  
    /* let divposts = $('<div class= "all_blog_posts">')
    $(function() {
      $.get("https://api.npoint.io/11f5f6db3c0134b392c2", function(posts) {
        for (post of posts) {                                         //for every element in the array from the site with JSON code
          let divpost = $('<div class="blog_post">');                 //Defining, that it is A POST
          let divinfo = $('<div class="blog_info">');                 // Making a field to add user's acc picture and posting time
          let imginfo = $('<img src="/img/account.png" alt="account">');
          let spaninfo = $('<span>').text(post.timeStamp);
          //let divinfoclose = $('</div>');
          //let divpictclose = $('</div>');
          let divtext = $('<div class="blog_text">');                 // Making a field for a user's comment
          let text = $('<p>').text(post.text);
          //let divtextclose = $('</div>');
          let likebutton = $('<button class="like">');                // Making a like button
          let imglike = $('<img src="/img/thumb-up.png" alt="like">');
          //let divlikeclose = $('</button>');
  
  
  
          divinfo.append(imginfo);
          divinfo.append(spaninfo);
          divpost.append(divinfo);
          //divpost.append(divinfoclose);
          if(post.pic != null){                                       //if we HAVE picture, we do this
          let divpict = $('<div class="blog_picture">');              // Making a field to add a picture
  
          let img = $('<img>');
  
          img.attr("src", post.pic);                                   // Getting a pic's adress and Сhanging img's picture's adress(src)
          img.attr("alt", post.inCaseNoPicText)                        // Getting a text's value
  
  
  
          divpict.append(img);
          divpost.append(divpict);
          }
          //divpost.append(divpictclose);
          divtext.append(text);
          divpost.append(divtext);
          //divpost.append(divtextclose);
          likebutton.append(imglike);
          divpost.append(likebutton);
          //divpost.append(divlikeclose);
          divposts.prepend(divpost);                              // Adding each created post to the beginning of the page
          $('div.background_line').append(divposts)
        }
    })
  }); */
  
  });