define(["jquery", "jquery.alpha", "jquery.beta", 'jquery.colorbox'], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta();

        $.colorbox({width:"250px", height:"120px", html:"<h1>jquery.colorbox</h1>"});
    });
});
