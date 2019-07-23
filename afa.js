$(document).ready(function(){


Prismic.Api('https://afineattempt.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $(".arch");
      var bodys = $("body");
      var table = $("table");
      var colors = [];

      for (var i = 0; i < results.length; i++) {

        color = results[i].getColor("project.color");
        number = results[i].getNumber("project.number");
        title = results[i].getStructuredText("project.title").asText();
        year = results[i].getStructuredText("project.year").asText();
        image = results[i].getStructuredText("project.content").asHtml();

        colors.push(color);

        var targ = $("<p class='mover'></p>");
				var row = $("<div class='row'></div>");
        var titleD = $("<div class='title'></div>");
        var imageD = $("<div class='images'></div>");
        var numberD = $("<td class='number' style='display:none'></td>");

        titleD.append(title,"<br>",year).css({"border-bottom": "5px solid" + color,"color" : color});
        imageD.append(image);
        numberD.append(number);

        row.append(titleD,imageD,numberD);
        body.append(row);

      }

      console.log(colors);


      var targSpace = $("<div class='moverS'><img src='arrow.svg' class='h'/><p class='f'>Recent Posts</p></div>");

      $(targSpace).appendTo(".arch");

      $(".load").hide();

      var $divs = $(".row");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo(".arch");


      $(".title").not(".title:first").clone().appendTo(".moverS");

      var all = $(".arch img").length;
      var random = Math.floor(Math.random()*all);
      $("img").eq(1).clone().addClass("latest").appendTo(".arch");

      $(".row:first img").hide();

      $(".row:first p").css({"width":"40vw","left":"1vw"});

      $(".row > .title").css({"margin-top":"2vh"});

			if ($(window).width()>750) {



                  $(".row > .title").css("background-color","transparent !important");

                  var rotation = 0;

                  jQuery.fn.rotate = function(degrees) {
                      $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
                      return $(this);
                  };

                  $(".h,.f").click(function(){
        
                      $(".moverS").removeClass("sticky");
                      $(".h").removeClass("rotate");
                      $(".f").removeClass("overs");
                  });

                  $(window).scroll(function(){

                    var top_offset = $(window).scrollTop();
                    var opacity = top_offset*-9000;
                    $(".latest").css("opacity",opacity);
                    if (top_offset == 0) {
                        $('.h').removeClass('rotate');
                       $(".latest").css("opacity",".6");
                    } else {
                        $('.h').addClass('rotate');
                        
                    }

                  });

                  var $window = $(window),
                    
                      $stick = $('.row:first');
                      elTop = $stick.offset().top;

                      $window.scroll(function() {
                        $(".moverS").toggleClass('sticky', $window.scrollTop() > elTop);
                        $(".h").toggleClass('over', $window.scrollTop() > elTop);
                        $(".f").toggleClass('overs', $window.scrollTop() > elTop);
                  
                    });

                    $(".moverS > .title").click(function(){

                      var num = $(this).index();
                      var half = $(window).outerHeight()*.0002;
                      console.log(num);
                      var target = $(".row").eq(num-1);
                      var yup = $(target).offset();
                      var hello = $(yup).top;
                      console.log(yup);

                      $("html,body").animate({scrollTop: (yup.top)},1000);

                    });

				} else {

          $(".row:first p").css({"width":"40vw","left":"4vw"});
          $(".row:first").css({"color":"white !important"});

          $(".row > .title").css({"left":"4vw"});

          // $(".moverS").css("top","50vh");

          var rotation = 0;

                  jQuery.fn.rotate = function(degrees) {
                      $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
                      return $(this);
                  };

                  $(".h").click(function(){
        
                      $(".moverS").removeClass("sticky").addClass("full");
                      $(this).removeClass("rotate");
                  });

           $(window).scroll(function(){

                    var top_offset = $(window).scrollTop();
                    if (top_offset == 0) {
                        $('.h').removeClass('rotate');

                    } else {
                        $('.h').addClass('rotate');
                    }

                  });



                  var $window = $(window),
                    
                      $stick = $('.row:first');
                      elTop = $stick.offset().top;

                     
                      $window.scroll(function() {
                        $(".moverS").toggleClass('sticky', $window.scrollTop() > elTop);
                        $(".moverS").removeClass("full");

                  
                    });


          $(".moverS > .title").click(function(){
            $(".moverS > .title").not(this).removeClass("there");
            $(this).addClass("there");
            var num = $(this).index();
            var dis = $(".moverS").height();
            console.log(num);
            var target = $(".row").eq(num-1);
            var yup = $(target).offset();
            var hello = $(yup).top;
            console.log(yup);
            $("html,body").animate({scrollTop: (yup.top)+2},600);
          });



        }

        if( /iPad/i.test(navigator.userAgent) ) {
         $(".latest").hide();

        } else {
          // normal //
        }






    });



  }, "MC5YTXluQnhBQUFKMnE0MVNn.ND7vv70077-977-9KzBR77-9Ln3vv73vv71nCzgRCjFm77-9Vl3vv70u77-977-9Me-_vWDvv70");

  $(".about").click(function(){
    var height = $(document).height();
    $("html,body").animate({scrollTop:height},500);
  });


//
});
