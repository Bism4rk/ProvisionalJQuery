$(function(){
    $('#slide img:eq(0)').addClass('ativo').show()

    var texto = $('.ativo').attr('alt')
    $('#slide').prepend(`<p> ${texto} </p>`);

    setInterval(slide, 3000)

    function slide(){
        if($('.ativo').next().length){
            $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo')
            texto = $('.ativo').attr('alt')
        }else{
            $('.ativo').fadeOut().removeClass('ativo')
            $('#slide img:eq(0)').fadeIn().addClass('ativo')
            texto = $('.ativo').attr('alt')
        }
        $('#slide p').hide().html(texto).delay(500).fadeIn()
    }
})