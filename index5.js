$(function(){
    // $('img').on('error', function () {
    //     var img =  $(this).attr('src')
    //     alert(`Imagem ${img} indisponível`)
    //     $('img').attr('src', 'error.jpg')

    // });
    $('img').width($(window).width())
    $('img').height($(window).height())

    // $(window).resize(function(){
    //     $('img').width($(window).width()).height($(window).height())
    // })
    $('body').css('height', '5000px')
    $(window).scroll(function() {
        var topo = $(window).scrollTop();
        console.log(topo);
        if(topo >= 600){
            $('img').fadeOut(1000)
        }
        // 
    })
})