$(function(){
    var ex = $('.ex1')

    $('.ev1').click(function(){
        ex.hide('slow')
    })

    $('.ev2').click(function(){
        ex.show('fast')
    })

    $('.ev3').click(function(){
        ex.toggle(1000)
    })

    $('.ev4').keyup(function(){
        var texto = $(this).val()
        if(texto == 'hide'){
            ex.hide()
        }else if(texto == 'show'){
            ex.show()
        }else if(texto == 'toggle'){
            ex.toggle()
        }
    })
})