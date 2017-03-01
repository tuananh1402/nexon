// HTML document is loaded. DOM is ready.
$win.on("load", function(){     
"use strict";

// miscellaneous var 
var loader = $('.preloader');
var allelement = $('div, h1, h2, h3, h4, h5, p, ul, li, a, i, button, section, span');
var holdside = $('.holdsidebar');

// wrapper var
var fastrestopage = $('.fastresto-page');
var whitepage = $('.white-page');

// page var 
var fastrestohome = $('.contentfastresto');
var bgslideshow = $('#bgslideshow, #particles, .bgfastresto');
var slidtext = $('#slidertext');

// button var 
var galnav = $('#opengal');
var galclose = $('.nav-bottom-close, .btn-content');
var iconnav = $('.anim-nav');
var menumobile = $('#main-menu');

//gallery
var maingall = $('.bottom-option');

//scroll var
var nice = $("#wraperfastresto");
var totop = $('#totop');
var topblock = $('.nav-top-block');

//reservation var
var stardate = $('#start-date');
var hourbook =  $('#hourbook');
var personbook = $('#personbook');
var namebook = $('#name');
var emailbook = $('#email, input#email');
var messagebook = $('#message');
var sentbook = $('#send');

//contactform var
var contactname = $('#name-contact');
var contactemail = $('#email-contact, input#email-contact');
var contactmessage = $('#message-contact');
var contactsent = $('#send-contact');

//comment post var
var namecom = $('#namecom');
var emailcom  = $('#emailcom, input#emailcom');
var messagecom  = $('#messagecom');
var sentcomment = $('#sendcomment');

//form failed succes var
var successent = $("#mail_success");
var failedsent = $("#mail_failed");

// start function
loader.fadeOut('fast', function() {					
"use strict";

 // call function all element animation when page has loaded
 page();

//block header when scroll
if (nice.length) {
    var scrollTrigger = 10, 
        backToTop = function () {
            var scrollTop = $win.scrollTop();
            if (scrollTop > scrollTrigger) {
                topblock.addClass('nav-block-show');
	            totop.fadeIn(100);
            } else {
                topblock.removeClass('nav-block-show');
	            totop.fadeOut(100);
            }
        };
    backToTop();
    $win.on('scroll', function () {
        backToTop();
    });
    totop.on("click", function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });
}
	
  //navigation icon mobile
    iconnav.on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        menumobile.toggleClass('menu-show');
    });

  // navigation slide up gallery
  galnav.on('click', function(e) {
	$(this).fadeOut(500);
	maingall.removeClass('fadeOutDown').fadeIn(1000).addClass('animfadeInUpBig');
  });
  // navigation slide down gallery
  galclose.on('click', function(e) {
	galnav.fadeIn(500);
	maingall.addClass('fadeOutDown').fadeOut(1500);
  });

 // main animation all element
 function page(){
     $([allelement]).each(function(index, foundElements) {
           foundElements.each(function(element) {
            var $this = $(this);
            var time = $(this).attr('data-time');
            setTimeout(function() {
            $this.addClass('intro');
            }, time);
        });
        setTimeout(function () {
        holdside.hide();}, 2500
        );
		$('.opening').hide();
    });
 

// reservation form
$(function() {
    sentbook.on('click', function(e) {
        e.preventDefault();
        var b = stardate.val(),
		    h = hourbook.val(),
	        p = personbook.val(),
		    e = namebook.val(),
            a = emailbook.val(),
            s = messagebook.val(),
            r = !1;
        if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
            var r = !0;
          emailbook.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  emailbook.css("border", "none");
        if (0 == b.length) {
             var r = !0;
             stardate.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"}); 
        } else  stardate.css("border", "none");
		if (0 == h.length) {
            var r = !0;
             hourbook.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else hourbook.css("border", "none");
		if (0 == p.length) {
             var r = !0;
             personbook.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else personbook.css("border", "none");
		if (0 == e.length) {
            var r = !0;
             namebook.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else namebook.css("border", "none");
        if (0 == s.length) {
            var r = !0;
            messagebook.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  messagebook.css("border", "none");
        return 0 == r && (sentbook.attr({
            disabled: "true",
            value: "Sending..."
        }), $.ajax({
            type: "POST",
            url: "book.php",
            data: "datebook=" + b + "&timebook=" + h + "&person=" + p + "&name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
            success: function(e) {
                "success" == e ? ( successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), sentbook.removeAttr("disabled").attr("value", "send").remove())
            }
        })), !1
		
    })
});


// contact form
$(function() {
    contactsent.on('click', function(e) {
        e.preventDefault();
        var e = contactname.val(),
            a = contactemail.val(),
            s = contactmessage.val(),
            r = !1;
        if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
            var r = !0;
          contactemail.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  contactemail.css("border", "none");
		if (0 == e.length) {
            var r = !0;
             contactname.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else contactname.css("border", "none");
        if (0 == s.length) {
            var r = !0;
            contactmessage.css({"border-color": "#e99d3f", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  contactmessage.css("border", "none");
        return 0 == r && (contactsent.attr({
            disabled: "true",
            value: "Sending..."
        }), $.ajax({
            type: "POST",
            url: "send.php",
            data: "name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
            success: function(e) {
                "success" == e ? ( successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), contactsent.removeAttr("disabled").attr("value", "send").remove())
            }
        })), !1
		
    })
});


// comment post
$(function() {
    sentcomment.on('click', function(e) {
        e.preventDefault();
        var e = namecom.val(),
            a = emailcom.val(),
            s = messagecom.val(),
            r = !1;
        if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
            var r = !0;
          emailcom.css({"border-color": "#f24f47", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  emailcom.css("border", "none");
		if (0 == e.length) {
            var r = !0;
             namecom.css({"border-color": "#f24f47", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else namecom.css("border", "none");
        if (0 == s.length) {
            var r = !0;
            messagecom.css({"border-color": "#f24f47", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  messagecom.css("border", "none");
        return 0 == r && (sentcomment.attr({
            disabled: "true",
            value: "Sending..."
        }), $.ajax({
            type: "POST",
            url: "comment.php",
            data: "name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
            success: function(e) {
                "success" == e ? ( successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), sentcomment.removeAttr("disabled").attr("value", "send").remove())
            }
        })), !1
		
    })
});



} // end function

 // reset animation
 function pagereset(){
    allelement.removeClass('intro');
 }




// plugin start
 // countDown
 $(function(){
 $('#given_date').countdowntimer({
  dateAndTime : "2018/01/01 00:00:00",
  size : "lg",
  regexpMatchFormat: "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})",
  regexpReplaceWith: "$1<sup>days</sup> $2<sup>hours</sup> $3<sup>mnt</sup> $4<sup>sec</sup>"
   });
 });

//slideshow background
$(function() {
    var slideBegin = 4000,
        transSpeed = 1000,
        simple_slideshow = bgslideshow,
        listItems = simple_slideshow.children('.bgfastresto'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed);
            i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed);
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});

//slideshow text home
$(function() {
    var slideBegin = 3000,
        transSpeed = 500,
        simple_slideshow = slidtext,
        listItems = simple_slideshow.children('.main-text'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed, function() {
                i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
            })
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});


// Magnific Popup img
$('.big-img').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: false
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});


// Magnific Popup dailymotion
$('.big-video').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      dailymotion: {
        index: 'dailymotion.com',
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        src: 'http://www.dailymotion.com/embed/video/%id%'
      }
    }
  }
});

// Magnific Popup youtube
$('.big-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    iframe: {
        patterns: {
            youtube: {
                src: 'http://www.youtube.com/embed/%id%?autoplay=1&rel=0'
            }
        }
    }
});

//Magnific Popup html
$('.detail-page').magnificPopup({					
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll'
	});

// Magnific Popup form
$('.popup-form').magnificPopup({
		type: 'inline',
		preloader: false
});

   
// owlCarousel testimonial
var owl = $("#owl-testimonial");
   owl.owlCarousel({
   items : 1,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   itemsMobile : false,
   autoPlay : 5000,
   stopOnHover : true
});
   
// owlCarousel brand
var owl = $("#owl-brand");
   owl.owlCarousel({
   items : 5, 
   itemsDesktop : [1000,4], 
   itemsDesktopSmall : [900,3], 
   itemsTablet: [600,2],
   itemsMobile : false,
   autoPlay : 2000,
   stopOnHover : true
});	
   
// owlCarousel gallery
var owl = $("#owl-gal");
        owl.owlCarousel({
        navigation: true,
		autoPlay : 3000,
        stopOnHover : true,
		itemsDesktop : [1600,4],
		itemsDesktopSmall : [1024,3], 
        itemsTablet: [800,2],
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],

      });
		
		
  // owl slider home
  var time = 7; // time in seconds
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 
    //Init the carousel
    $("#owl-slider-home").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      afterInit : progressBar,
      afterMove : moved,
	  loop : true,
      autoHeight: true,
      touchDrag : false,
      mouseDrag : false
    });
 
    //Init progressBar where elem is $("#owl-slider-home")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-slider-home")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }

});
});

// plugin end 
// HTML document loaded DOM end 