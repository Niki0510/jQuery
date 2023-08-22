$(document).ready(function () {
    console.log($)

    // Element selector

    // $('p').on({
    //    mouseenter : function(){console.log("you have mouse entered",this)},
    //    mouseleave : function(){console.log("you have mouse leave",this)},       
    // })

    //ID selector
    // $('#primarybtn').on({
    //     click : function(){
    //         console.log("you have clicked",this)
    //     },
    //     dblclick : function(){
    //         console.log("you have dblclicked",this)
    //     },
    //     mouseover : function(){console.log("you have mouse over",this)},     
    // })

    // //Class Selector
    // $('.secondarybtn').on({  
    //     mousedown : function(){console.log("you have mouse clicked any button on mouse",this)},     
    //     mouseup : function(){console.log("you have mouse released button on mouse",this)},     
    //     mousemove : function(){console.log("you have mouse moved",this)},     
    //     mouseout : function(){console.log("you have mouse out",this)},     
    // })

    //other selectors
    //selects whole html page
    // $('*').on({
    //     mouseenter : function(){console.log("you have mouse entered",this)},
    //     mouseleave : function(){console.log("you have mouse leave",this)},       
    //  })
    //index starts from 0
    // $('p:even').on({
    //     mouseenter : function(){console.log("you have mouse entered",this)},
    //     mouseleave : function(){console.log("you have mouse leave",this)},       
    // })

    //FORM ELEMENTS MANUPULATION
    // $('#inp').val("I am queen"); //adds value
    // $('#spn').empty(); // works on span tag
    // $('#inp').remove(); // remove from document
    // $('#spn').text("I am a woman"); // removes og text and add this
    // $('p').html("hi"); // html works on tag 

    // $('#inp').on({
    //     keypress : function(){console.log("keypressed")},
    //     keyup : function(){console.log("keyup")},
    //     keydown : function(){console.log("keydown")},            
    //     focus : function(){console.log("focussed")},   //when entered in input          
    //     blur : function(){console.log("blurred")},     //when clicked outside       
    //     change : function(){console.log("changed")},   //when changed something and clicked outside        
    // })

    //Animation
    // $('#wiki').hide(3000); //hides the text
    // $('#wiki').show(3000); //brings the text

    $('#act-btn').on({
        click: function () {
            //fade
            // $('#wiki').fadeIn("slow")
            // $('#wiki').fadeOut("slow")
            // $('#wiki').fadeTo(3000,0.4)
            // $('#wiki').fadeToggle(3000)
            // $('#wiki').toggle(1000)

            //slide
            //$('#wiki').slideDown("slow")
            // $('#wiki').slideUp("slow")
            //$('#wiki').slideToggle("slow")

            //animation
            $('#wiki').animate({
                opacity: '0.5',
                left: '50px',
                color: 'red',
                width: '250px'
            })
        }
    })

    //AJAX USING JQUERY
    //get
        // $.get("https://code.jquery.com/jquery-3.3.1.js", function (data, status) {
        //     alert(status);
        // })

        //post
        // $.post("https://code.jquery.com/jquery-3.3.1.js", 
        // { name: "akash", age: 26, gender: 'male' }, 
        // function (data, status) { 
        //     console.log(alert(status)) 
        // })
})