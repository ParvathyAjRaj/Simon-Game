// reset vars of the game 
var order=[];
var entered_array =[];
var level = 1;
var check_digit = 1;

// give a keypress for starting the game
$(document).keydown(add_color_to_order);


// function to change title
function title_change(){
    $("#level-title").text("Level "+level);
}

// assigning different audio values and animation to different blocks
$(".blue").click(function(){
    var audio = "sounds/blue.mp3";
    play_audio("blue");
    animation("blue");
    user("blue");
})

$(".green").click(function(){
    play_audio("green");
    animation("green");
    user("green");
})

$(".red").click(function(){
    play_audio("red");
    animation("red");
    user("red");
})

$(".yellow").click(function(){
    play_audio("yellow");
    animation("yellow");
    user("yellow");
})


// function to play audio for respected colored blocks
function play_audio(color){
    var full_audio = "sounds/"+color+".mp3";
    var audio_name = new Audio(full_audio);
    audio_name.play();
}


// function to get animation for respected colored blocks
function animation(color){
    var class_name = "."+color;
    $(class_name).addClass("pressed");
    setTimeout(function(){
        $(class_name).removeClass("pressed")},100);
}


// to generate the game challenge. Here we are adding the random colors to the "order" array.
function add_color_to_order(){
    var colors = ["red","blue","yellow","green"];
    var selected_index = Math.floor(Math.random()*4);
    var selected_color = colors[selected_index];
    console.log(selected_color);
    play_audio(selected_color);
    animation(selected_color);
    order.push(selected_color);
    console.log("challenge",order);
}


// function to get the user entries
function user(each_entered){
    entered_array.push(each_entered);
    console.log("User entry "+entered_array);

    console.log("entered array is "+entered_array);
    if (entered_array.length === level){
        setTimeout(check(entered_array), 1000);
    }
        
}


// to compare the challenge and user inputs
function check(user_array){
    for (var i = 0; i < level ; i++){
        if (order[i] === user_array[i]){
            console.log("true ! user["+ i +"] is " + user_array[i] +" order[" + i +"] is "+ order[i]);   
        }
        else {
            check_digit = 0;
            // alert("False ! user["+ i +"] is " + user_array[i] +" order[" + i +"] is "+ order[i]); 
            wrong_audio = new Audio("sounds/wrong.mp3");
            wrong_audio.play();
            $("body").addClass("game-over");
            title_change();
            break;
        }
    }
    if (check_digit === 1){
        level ++;
        entered_array =[];
        setTimeout(add_color_to_order, 1000);
        
    }
}












// reset function
function reset(){
    order=[];
}