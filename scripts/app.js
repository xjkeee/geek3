jQuery(document).ready(function() {
    jQuery('.header_left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 0
    });

    jQuery('.header_right').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 0
    });

    jQuery('.about_left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
    });

    jQuery('.about_right').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
    });

    jQuery('.plus_up').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 300
    });

    jQuery('.scrinshots_up').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 300
    });

    jQuery('.reviews_up').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounce',
        offset: 300
    });

    jQuery('.buy_left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
    });

    jQuery('.buy_right').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
    });

    jQuery('.contacts_right').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
    });

    jQuery('.contacts_left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
    });

});