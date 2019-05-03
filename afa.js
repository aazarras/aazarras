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

        titleD.append(title,"<br>",year);
        imageD.append(image);
        numberD.append(number);

        row.append(titleD,imageD,numberD);
        body.append(row);

      }

      console.log(colors);


      var targSpace = $("<div class='moverS'><p class='h'>Articles</p></div>");

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

      $(".moverS > .title").each(function(){
        var index = $(this).index();
        $(this).css("background-color",colors[index]);
      });

      var all = $(".arch img").length;
      var random = Math.floor(Math.random()*all);
      $(".arch img").eq(0).clone().addClass("latest").appendTo(".arch");

      $(".row:first img").hide();




			if ($(window).width()>750) {



                  var $window = $(window),
                    
                      $stick = $('.row:first');
                      elTop = $stick.offset().top;

                     


                      $window.scroll(function() {
                        $(".moverS").toggleClass('sticky', $window.scrollTop() > elTop)

                  
                    });


                    // $(".row > .materials > p > a").each(function(){
                    //   // var hello = $("<img class='arrow' src='arrow.svg'>");
                    //   $(this).not(".l > .materials > p > a ").append("&nbsp;&nearr;");
                    // });

                    $(".moverS > .title").click(function(){
                      
                      var num = $(this).index();
                      var half = $(window).outerHeight()/2;
                      console.log(num);
                      var target = $(".row").eq(num);
                      var yup = $(target).offset();
                      var hello = $(yup).top;
                      console.log(yup);


                        $("html,body").animate({scrollTop: (yup.top)},1000);

                    });



            
                    // $(window).scroll(function(){

                    //   var image = $("img").offset();
                    //   var top = image.top;
                    //   console.log(top);

                    //   $(".moverS").css("top","-15vh");

                    //  clearTimeout($.data(this, 'scrollTimer'));
                    //   $.data(this, 'scrollTimer', setTimeout(function() {
                    //     $(".moverS").css("top","0vh");
                    //   // do something
                    //   console.log("Haven't scrolled in 250ms!");
                    //   }, 100));


                    //   if ($(window).scrollTop() > 500) {
                    //     $(".tim").css({"width":"4.5%","padding-top":".65%"});
                    //   } else {
                    //     $(".tim").css({"width":"9vw","padding-top":"0%"});
                    //     $(".moverS > .title").css("color","rgba(255, 255, 255, 1)");
                    //   }

                    // });

                  


                  // $(".arch img").click(function(){
                  //   console.log("hello");
                  //   if ($(this).height() > 200) {
                  //     console.log("hellno");
                  //     $(this).not(".latest").css({"height" : "23vh",
                  //     "width" : "auto","margin-right":"3vw"});
                  //   } else {
                  //     $(this).not(".latest").css({"height":"auto","width":"48vw","margin-right":"90vw"});
                  //   }
                  // });

				} else {

          $(".moverS > .title").click(function(){
            var num = $(this).index();
            var dis = $(".moverS").height();
            console.log(num);
            var target = $(".row").eq(num);
            var yup = $(target).offset();
            var hello = $(yup).top;
            console.log(yup);
            $("html,body").animate({scrollTop: (yup.top)-10},600);
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
