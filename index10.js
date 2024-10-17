$(function(){
    var ex = $('.ex1')
    var ex2 = $('.ex2')
    var button = $(':button')

    // button.click(function(){
    //     ex.fadeOut('slow')
    // }).dblclick(function(){
    //     ex.fadeIn('slow')
    // })

    // button.click(function(){
    //     ex.fadeTo('slow', 0.5)
    // }).dblclick(function(){
    //     ex.fadeTo('slow', 1.0)
    // })

    // button.click(function(){
    //     ex.fadeToggle('slow')
    // })

    button.click(function(){
        ex.fadeTo('slow', 0.2, function(){
            ex2.fadeTo('fast', 0.5);
        });
    })
})