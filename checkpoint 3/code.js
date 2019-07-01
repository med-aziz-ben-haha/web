var text=document.getElementById("text");
var size=document.getElementById("size");
var font=document.getElementById("font");


function change_bold(){
    if( text.style.fontWeight=="bold"){
        text.style.fontWeight="normal";
    }
    else{
        text.style.fontWeight="bold";
    }
}


function change_italic(){
    if(text.style.fontStyle=="italic"){
        text.style.fontStyle="normal";
    }
    else{
        text.style.fontStyle="italic";
    }
}

function change_underline(){
    if(text.style.textDecoration=="underline"){
        text.style.textDecoration="";
    }
    else{
        text.style.textDecoration="underline";
    }
}

function change_size(){
    text.style.fontSize=size.value;
}

function change_font(){
    text.style.fontFamily=font.value;
}

