$(function() {
    var ex = $('.ex1')
    var place = $(this).attr('title');
    $(this).attr('placeholder', place)

    $('.ev1').focus(function () { 
        ex.text($(this).attr('title'))
    }).keyup(function () { 
        if($(this).val() == 'pontocom'){
            $('.ev2').focus()
        }
    });

    // $('.ev1').blur(function(){
    //     ex.text(`Saiu do campo ${$(this).attr('name')}`)
    // })

    $('.ev1').change(function () { 
        ex.text(`Campo ${$(this).attr('name')} alterado!`)
    });

    $('.selecionar').click(function(){
        $('.ev3').select()
        $('form').submit(function () { 
            return false;
        });
    })
})