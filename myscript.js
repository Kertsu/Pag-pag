$(document).ready(function(){
    $(".banner").click(function(){
      $(".banner").slideUp();
      var play = document.createElement('audio');
      play.src = '/play.mp3';
      play.play();
    });
  });

  $(document).ready(function(){
    $("img").click(function(){
      var play1 = document.createElement('audio');
      play1.src = '/play1.mp3';
      play1.play();
    });
  });

  $(document).ready(function(){
    $(".next").click(function(){
        var play = document.createElement('audio');
        play.src = '/play.mp3';
        play.play();
    });
  });


$(document).ready(function(){
    $('.item1-w, .item2-w, .item3-w, .item4-w, .item5-w, .item6-w, .item-i-w, .item8-w, .item9-w, .item10-w, .item11-w, .item12-w, .item14-w, .item2-8-w, .item2-9-w, .item2-10-w' ).click(function(event){
        $target = $(event.target);
            $target.addClass('wrong-answer1');
        var wrong = document.createElement('audio');
        wrong.src = '/wrong.mp3';
        wrong.play();
    });
});
$(document).ready(function(){
    $('.item1-r, .item2-r, .item3-r, .item4-r, .item5-r, .item6-r, .item-i-r, .item8-r, .item9-r, .item10-r, .item11-r, .item12-r, .item13-r, .item14-r, .item2-8-r, .item2-9-r, .item2-10-r').click(function(event){
        $target = $(event.target);
            $target.addClass('correct-answer1');
            var right = document.createElement('audio');
            right.src = '/right.mp3';
            right.play();
    });
});

$(document).ready(function(){
    $(".reveal1").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item1-r").addClass('correct-answer1');
      $(".item1-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal2").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item2-r").addClass('correct-answer1');
      $(".item2-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal3").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item3-r").addClass('correct-answer1');
      $(".item3-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal4").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item4-r").addClass('correct-answer1');
      $(".item4-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal5").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item5-r").addClass('correct-answer1');
      $(".item5-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal6").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item6-r").addClass('correct-answer1');
      $(".item6-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal-f").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".mod").text($('.mod').text().replace('kalayaan bilang isang indibiduwal', 'karunungan'))
      $(".item-i-r").addClass('correct-answer1');
      $(".item-i-w").addClass('wrong-answer1');
    });
  });
  $(document).ready(function(){
    $(".reveal8").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".mod").text($('.mod').text().replace('kalayaan bilang isang indibiduwal', 'karunungan'))
      $(".item8-r").addClass('correct-answer1');
      $(".item8-w").addClass('wrong-answer1');
    });
  });
  $(document).ready(function(){
    $(".reveal9").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".mod").text($('.mod').text().replace('kalayaan bilang isang indibiduwal', 'karunungan'))
      $(".item9-r").addClass('correct-answer1');
      $(".item9-w").addClass('wrong-answer1');
    });
  });
  $(document).ready(function(){
    $(".reveal10").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".mod").text($('.mod').text().replace('kalayaan bilang isang indibiduwal', 'karunungan'))
      $(".item10-r").addClass('correct-answer1');
      $(".item10-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal11").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".mod1").text($('.mod1').text().replace('pagsagot', 'pagtatanong'))
      $(".item11-r").addClass('correct-answer1');
      $(".item11-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal12").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item12-r").addClass('correct-answer1');
      $(".item12-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal13").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item13-r").addClass('correct-answer1');
      $(".item13-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal14").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
      $(".item14-r").addClass('correct-answer1');
      $(".item14-w").addClass('wrong-answer1');
    });
  });

//   PAGE 2

$(document).ready(function(){
    $(".reveal1-2").click(function(){
      $(".identification1").text('research');
        var right = document.createElement('audio');
        right.src = '/right.mp3';
        right.play();
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
    });
  });
$(document).ready(function(){
    $(".reveal2-2").click(function(){
      $(".identification2").text('matinding puwersa');
        var right = document.createElement('audio');
        right.src = '/right.mp3';
        right.play();
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
    });
  });
$(document).ready(function(){
    $(".reveal2-3").click(function(){
      $(".identification3").text('saliksik');
        var right = document.createElement('audio');
        right.src = '/right.mp3';
        right.play();
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
    });
  });
$(document).ready(function(){
    $(".reveal2-4").click(function(){
      $(".identification4").text('karunungan');
        var right = document.createElement('audio');
        right.src = '/right.mp3';
        right.play();
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
    });
  });


$(document).ready(function(){
    $(".reveal2-5").click(function(){
      $(".identification5").text('hasik');
        var right = document.createElement('audio');
        right.src = '/right.mp3';
        right.play();
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
    });
  });


$(document).ready(function(){
    $(".reveal2-6").click(function(){
      $(".identification6").text('wisik');
        var right = document.createElement('audio');
        right.src = '/right.mp3';
        right.play();
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
    });
  });

$(document).ready(function(){
    $(".reveal2-7").click(function(){
      $(".identification7").text('1998');
        var right = document.createElement('audio');
        right.src = '/right.mp3';
        right.play();
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
    });
  });

$(document).ready(function(){
    $(".reveal2-8").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
        $(".item2-8-r").addClass('correct-answer1');
        $(".item2-8-w").addClass('wrong-answer1');
    });
  });

$(document).ready(function(){
    $(".reveal2-9").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
        $(".item2-9-r").addClass('correct-answer1');
        $(".item2-9-w").addClass('wrong-answer1');
    });
  });

  $(document).ready(function(){
    $(".reveal2-10").click(function(){
        var obj = document.createElement('audio');
        obj.src = '/applause.mp3';
        obj.play()
        $(".item2-10-r").addClass('correct-answer1');
        $(".item2-10-w").addClass('wrong-answer1');
    });
  });