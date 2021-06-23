function change(x){
    var pan = document.getElementById("pansexual");
    var trans = document.getElementById("transgender");
    var ace = document.getElementById("asexual");
    var bi = document.getElementById("bisexual");
    var y = document.getElementById(x);

    pan.style.display="none";
    trans.style.display="none";
    ace.style.display="none";
    bi.style.display="none";

    y.style.display="block";
}

document.onkeydown = function(x) {
    var y = x.keyCode;
    if(y == 80) {
        document.getElementById("btnradio1").click();
    }
    if(y == 84) {
        document.getElementById("btnradio2").click();
    }
    if(y == 65) {
        document.getElementById("btnradio3").click();
    }
    if(y == 66) {
        document.getElementById("btnradio4").click();
    }
};
