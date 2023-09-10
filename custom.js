(function($) {
    "use strict";
    var music = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            this.Menu();
        },

        Menu: function() {
            $(".ms_cmenu_toggle").on('click', function() {
                $("body").toggleClass('open_menu');
            });
            // on click player list
            $(".play-left-arrow").on('click', function() {
                $(".player_left").toggleClass('open_list');
            });
        },

    };
    $(document).ready(function() {
        music.init();
		
		// Scrollbar
		$(".ms_nav_wrapper").mCustomScrollbar({
			theme:"minimal"
        });
        
		// Queue Scrollbar
		$(".jp_queue_list_inner").mCustomScrollbar({
			theme:"minimal",
			setHeight:345
        });
        
    });
    // Preloader Js
    jQuery(window).on('load', function() {
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 500);
        // Li Lenght
        if ($('.jp-playlist ul li').length > 3) {
            $('.jp-playlist').addClass('find_li');
        }
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop()
        if (scroll >= 5) {
            $(".ms_header").addClass("dark_header");
        } else {
            $(".ms_header").removeClass("dark_header");
        }
    });
    $(".ms_btn.play_btn").on('click', function() {
        $('.ms_btn.play_btn').toggleClass('btn_pause');
    });
})(jQuery);
