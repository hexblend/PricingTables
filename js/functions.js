//COLOR SWITCHER
$(document).ready(function () {
    $('ul.theme-colors li').click(function () {
        $('.panel-style-1 .panel-heading').css('background', $(this).css('color'));
        $('.panel-style-1 .panel-body .badge').css('background', $(this).css('color'));
        $('.panel-style-1 .panel-body .price').css('color', $(this).css('color'));
        $('.panel-style-1 .panel-body .permonth').css('color', $(this).css('color'));
        $('.panel-style-1 .panel-body .devider').css('background', $(this).css('color'));
        $('.panel-style-1 .panel-body .description').css('color', $(this).css('color'));
        $('.panel-style-1 .panel-body ul li i').css('color', $(this).css('color'));
        $('.panel-style-1 .panel-body .buy-button').css('background', $(this).css('color'));
        $('.panel-style-2').css('border-color', $(this).css('color'));
        $('.panel-style-2 .panel-body .badge').css('background', $(this).css('color'));
        $('.panel-style-2 .panel-title').css('color', $(this).css('color'));
        $('.panel-style-2 .price-div').css('background', $(this).css('color'));
        $('.panel-style-2 .panel-body ul li i').css('color', $(this).css('color'));
        $('.panel-style-2 .panel-body .buy-button').css('background', $(this).css('color'));
        $('.section-3 .general-container .col-md-2').css('background', $(this).css('color'));
        $('.section-3 .general-container .col-md-1').css('background', $(this).css('color'));
        $('.section-3 .general-container .col-md-3 ul li i').css('color', $(this).css('color'));
        $('.section-3 .general-container .col-md-3').css('border-color', $(this).css('color'));
        $('.section-3 .row-fluid').css('border-color', $(this).css('color'));
        $('.panel-style-4 .panel-heading').css('background', $(this).css('color'));
        $('.panel-style-4 .symbol-div h1').css('color', $(this).css('color'));
        $('.panel-style-4 .panel-body .price').css('color', $(this).css('color'));
        $('.panel-style-4 .panel-body .permonth').css('color', $(this).css('color'));
        $('.panel-style-4 .panel-body ul li i').css('color', $(this).css('color'));
        $('.panel-style-4 .panel-body .buy-button').css('background', $(this).css('color'));
        $('.panel-style-5').css('border-color', $(this).css('color'));
        $('.panel-style-5 .panel-body .badge').css('background', $(this).css('color'));
        $('.panel-style-5 .panel-title').css('color', $(this).css('color'));
        $('.panel-style-5 .symbol-div').css('background', $(this).css('color'));
        $('.panel-style-5 .panel-body .price').css('color', $(this).css('color'));
        $('.panel-style-5 .panel-body .permonth').css('color', $(this).css('color'));
        $('.panel-style-5 .panel-body ul li i').css('color', $(this).css('color'));
        $('.panel-style-5 .panel-body .buy-button').css('background', $(this).css('color'));
    });
    $('a.themes-btn').click(function () {
        $('.colors').toggleClass('active');
    });
});

// Prevent Links
$(document).ready(function(){
    $('.hide-btn').click(function(event){
        event.preventDefault(); //or return false;
    });
});

$(document).ready(function(){
// Hide/Show Function Pricing 1
    $('.intro-section .hide-btn').click(function(){
        $('.intro-section .container-fluid').toggle(1500);
        $('.intro-section').toggleClass('small-section');       
        if ($(".intro-section").css('min-height') == '300px') {
            $('.intro-section .hide-btn').text('Hide Pricing');  
        } else {
            $('.intro-section .hide-btn').text('Show Pricing');  
        }
    });
});

$(document).ready(function(){
// Hide/Show Function Pricing 2
    $('.section-2 .hide-btn').click(function(){
        $('.section-2 .container-fluid').toggle(1500);
        $('.section-2').toggleClass('small-section');       
        if ($(".section-2").css('min-height') == '300px') {
            $('.section-2 .hide-btn').text('Show Pricing');  
        } else {
            $('.section-2 .hide-btn').text('Hide Pricing');  
        }
    });
});

$(document).ready(function(){
// Hide/Show Function Pricing 3
    $('.section-3 .hide-btn').click(function(){
        $('.section-3 .container-fluid').toggle(1500);
        $('.section-3').toggleClass('small-section');       
        if ($(".section-3").css('min-height') == '300px') {
            $('.section-3 .hide-btn').text('Show Pricing');  
        } else {
            $('.section-3 .hide-btn').text('Hide Pricing');  
        }
    });
});

$(document).ready(function(){
// Hide/Show Function Pricing 4
    $('.section-4 .hide-btn').click(function(){
        $('.section-4 .container-fluid').toggle(1500);
        $('.section-4').toggleClass('small-section');       
        if ($(".section-4").css('min-height') == '300px') {
            $('.section-4 .hide-btn').text('Show Pricing');  
        } else {
            $('.section-4 .hide-btn').text('Hide Pricing');  
        }
    });
});

$(document).ready(function(){
// Hide/Show Function Pricing 5
    $('.section-5 .hide-btn').click(function(){
        $('.section-5 .container-fluid').toggle(1500);
        $('.section-5').toggleClass('small-section');       
        if ($(".section-5").css('min-height') == '300px') {
            $('.section-5 .hide-btn').text('Show Pricing');  
        } else {
            $('.section-5 .hide-btn').text('Hide Pricing');  
        }
    });
});