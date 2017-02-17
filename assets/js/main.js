jQuery(document).ready(function($) {
    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* GA Custom Tracking */
    const dimensions = {
        CLIENT_ID: 'dimension1'
    }

    ga(function(tracker) {
        var clientId = tracker.get('clientId');
        tracker.set(dimensions.CLIENT_ID, clientId);
    });
});
