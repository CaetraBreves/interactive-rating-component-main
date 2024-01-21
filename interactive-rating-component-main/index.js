let num = 0;
    

document.getElementById("b1").onclick = function() {
    num = 1;    
    console.log(num);
}

document.getElementById("b2").onclick = function() {
    num = 2;
    console.log(num);  
}

document.getElementById("b3").onclick = function() {
    num = 3;
    console.log(num);
}

document.getElementById("b4").onclick = function() {
    num = 4;
}

document.getElementById("b5").onclick = function() {
    num = 5;
    console.log(num);
}


document.getElementById("submitB").onclick = function() {
    if(num != 0){
        document.getElementById("num").innerHTML = num;
        document.getElementById("content").style.display = "none";
        document.getElementById("content2").style.display = "flex";
    }
    

}