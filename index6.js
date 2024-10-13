$(function(){
    var ex = $('.ex1')
    $('.ev1').click(function () { 
        $(this).css({'background-color': '#ccc', 'color': 'black'})
        ex.text('Você clicou uma vez!')
    });

    $('.ev2').on('dblclick', function () {
        $(this).css({'background-color': '#ccc', 'color': 'black'})
        ex.text('Você clicou duas vezes!')

    });

    $('.ev3').focusin(function () { 
        $(this).css({'background-color': '#ccc', 'color': 'black'})
        ex.text('Você focou no input!')
    }).focusout(function(){
        $(this).css({'background-color': 'black', 'color': 'white'})
        ex.text('Você tirou o foco do input!')
    })
    $('.ev4').on('mouseover', function(){
        $(this).css({'background-color': '#ccc', 'color': 'black'})
        ex.text('Você passou o mouse por cima!')
    })
    $('.ev5').on('mousedown', function () {
        $(this).css({'background-color': '#ccc', 'color': 'black'})
        ex.text('Você apertou o botão do mouse!')
    }).on('mouseup', function(){
        $(this).css({'background-color': 'black', 'color': 'white'})
        ex.text('Você soltou o botão do mouse!')
    })
    var a = 0
    $('.ev6').on('mouseenter', function(){
        a++
        ex.text('Mouse entrou ' + a + ' vezes!')
    }).on('mouseout', function(){
        ex.text('Mouse saiu!')
    })

    var b = 0
    $('.ev7').mouseover(function () { 
        b++
        ex.text('Mouse entrou ' + b + ' vezes!')
    }).on('mouseleave', function(){
        ex.text('Mouse saiu!')
    })

    $('.ev8').on('mousemove', function(move){
        var localX = move.pageX
        var localY = move.pageY
        $(this).css({'background-color': '#ccc', 'color': 'black'})
        ex.text(`Posição do mouse - X: ${localX} Y: ${localY}`)
    })
})