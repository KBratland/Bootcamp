/**
 * Created by Kristin on 10/15/14.
 */
$(document).ready(function (){

    $(".about-icon").hover(
        function(){
            $(this).attr({src: "/pictures/unicorn.jpg"})
        },
        function(){
            $(this).attr({src: "/pictures/AboutIcon.jpeg"})
    });

    function spin_small () {
        $('#SM_cog').tween({
            rotate:{
                start: 0,
                stop: 360,
                time: 0,
                duration: 10,
                effect:'easeInOut'
            }
        });
    $.play();
    }

    function spin_large () {
        spin_small()
        $('#LG_cog').tween({
            rotate:{
                start: 0,
                stop: -360,
                time: 0,
                duration: 10,
                effect:'easeInOut'
            }
        });
    $.play();
    };

    $(".cog-container").hover(
        function() {
            spin_large();
        },
        function (){
            return false
        }
    );

    $( "#flw-res" ).click(function() {
        $( "#flw-res" ).animate({
            width: "-toggle",
            height: "-toggle"
        }, 2000, function() {
        // Animation complete.
        });
    });


    $("#codeguildBW").hover(
        function() {
            $(this).attr({src: "/pictures/PDX_CodeGuild.png"})
        },
            function() {
                $(this).attr({src: "/pictures/PDX_CodeGuild_BW.png"})
        });

    $("#nauBW").hover(
        function() {
            $(this).attr({src: "/pictures/nau_color.png"})
        },
        function() {
            $(this).attr({src: "/pictures/nau_BW.png"})

    });

    $("#ucscBW").hover(
        function() {
            $(this).attr({src: "/pictures/UCSC_color.jpg"})
        },
        function(){
            $(this).attr({src: "/pictures/UCSC_bw.jpg"})
    });



    (function($) {
        $(document).ready(function () {
            /*-------------------- EXPANDABLE PANELS ----------------------*/
            var panelspeed = 600; //panel animate speed in milliseconds
            var totalpanels = 3; //total number of collapsible panels
            var defaultopenpanel = 0; //leave 0 for no panel open
            var accordian = false; //set panels to behave like an accordian, with one panel only ever open at once

            var panelheight = new Array();
            var currentpanel = defaultopenpanel;
            var iconheight = parseInt($('.icon-close-open').css('height'));
            var highlightopen = true;

            //Initialise collapsible panels
            function panelinit() {
                    for (var i=1; i<=totalpanels; i++) {
                        panelheight[i] = parseInt($('#cp-'+i).find('.expandable-panel-content').css('height'));
                        $('#cp-'+i).find('.expandable-panel-content').css('margin-top', -panelheight[i]);
                        if (defaultopenpanel == i) {
                            $('#cp-'+i).find('.icon-close-open').css('background-position', '0px -'+iconheight+'px');
                            $('#cp-'+i).find('.expandable-panel-content').css('margin-top', 0);
                        }
                    }
            }

            $('.expandable-panel-heading').click(function() {
                var obj = $(this).next();
                var objid = parseInt($(this).parent().attr('ID').substr(3,2));
                currentpanel = objid;
                if (accordian == true) {
                    resetpanels();
                }

                if (parseInt(obj.css('margin-top')) <= (panelheight[objid]*-1)) {
                    obj.clearQueue();
                    obj.stop();
                    obj.prev().find('.icon-close-open').css('background-position', '0px -'+iconheight+'px');
                    obj.animate({'margin-top':0}, panelspeed);
                    if (highlightopen == true) {
                        $('#cp-'+currentpanel + ' .expandable-panel-heading').addClass('header-active');
                    }
                } else {
                    obj.clearQueue();
                    obj.stop();
                    obj.prev().find('.icon-close-open').css('background-position', '0px 0px');
                    obj.animate({'margin-top':(panelheight[objid]*-1)}, panelspeed);
                    if (highlightopen == true) {
                        $('#cp-'+currentpanel + ' .expandable-panel-heading').removeClass('header-active');
                    }
                }
            });

            function resetpanels() {
                for (var i=1; i<=totalpanels; i++) {
                    if (currentpanel != i) {
                        $('#cp-'+i).find('.icon-close-open').css('background-position', '0px 0px');
                        $('#cp-'+i).find('.expandable-panel-content').animate({'margin-top':-panelheight[i]}, panelspeed);
                        if (highlightopen == true) {
                            $('#cp-'+i + ' .expandable-panel-heading').removeClass('header-active');
                        }
                    }
                }
            }

           //Uncomment these lines if the expandable panels are not a fixed width and need to resize
           /* $( window ).resize(function() {
              panelinit();
            });*/

            $(window).load(function() {
                panelinit();
            }); //END LOAD
        }); //END READY
    })(jQuery);
});