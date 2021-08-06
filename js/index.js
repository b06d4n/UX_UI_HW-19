console.log ("Your index.js file is loaded correctly");

$(function() {
    $('a.popper').hover(function() {
        $('#pop').toggle();
    });
});