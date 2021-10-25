// -----  calculate  -----

function calculate(num){
    var result = document.getElementById("inputbox");
    result.value += num;
}

function result(){
    var result = document.getElementById("inputbox");
    try{
        result.value = Function('"use strict";return (' + result.value + ')')();
    }
    catch(err){
        alert("ERROR!");
    }
}

function clr(){
    var result = document.getElementById("inputbox");
    result.value = " ";
}

function del() {
    var result = document.getElementById("inputbox");
    result.value = result.value.slice(0, -1);
}



// -----  change mode ----- 

function changeMode(value)
{
    var color = document.body.style.backgroundColor;
    switch(value) {
        case 'mode-1':
            color = "mode-1";
        break;
        case 'mode-2':
            color = "mode-2";
        break;
        case 'mode-3':
            color = "mode-3";
        break;
    }
    document.body.classList = color;
}