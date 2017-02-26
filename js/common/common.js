define(['jquery'],function($){
    $('.navs a').on('click',function(){
        $(this).next().slideToggle();
    });

    $.ajax({
        url: '/v6/login',
        type: 'post',
        data: {
            tc_name: 'tom',
            tc_pass: 666,
        },
        success: function(){
            console.log("you win");
        },
        error: function(){
            console.log("lose");
        }
    });
});