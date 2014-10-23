$(document).ready(function() {
    $('#pagepiling').pagepiling({
        loopBottom: true,
        navigation: {
            'position': 'left',
            'tooltips': ['Home', 'Projects', 'Professions', 'Education', 'Jobs Preferred', 'Contact Me']
        },
        onLeave: function(index, nextIndex, direction) {
            var $pages = $('.section');
            for (var i = 0; i < $pages.length; ++i) {
                if (i + 1 !== nextIndex) {
                    $($pages[i]).css('background-color', '#FFCC33');
                } else {
                    $($pages[i]).css('background-color', '#22C3AA');
                }
            }
        }
    });
});
