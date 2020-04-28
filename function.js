(function (){
    let a, b, c,d,result;
    a=parseInt(prompt('entrez a'));
    b=parseInt(prompt("b"));
    c=parseInt(prompt("c"));
    d=parseInt(prompt("d"));
    if(a===0 && b>0 && c>0 && d===0){
       result=-(c/b);
        alert("tu es dans une equation de premier degre de type:"+b+"x"+"+"+c+"="+"0"+" donc le resultat est: " + result); 
    }else if(a===0 && b>0 && c<0 && d===0) {
        result = -(c/b);
        alert("tu es dans une equation de premier degre de type:" + b + "x" + "-" + c + "=" + "0" + " donc le resultat est: " + result);
    }else if(a===0 && b<0 && c<0 && d===0) {
        result=-(c/b);
        alert("tu es dans une equation de premier degre de type:" +"-" + b + "x" + "-" + c + "=" + "0" + " donc le resultat est: " + result);
    }else if(a===0 && b<0 && c>0 & d===0) {
        result=-(c/b);
        alert("tu es dans une equation de premier degre de type:" + "-" + b + "x" + "-" + c + "=" + "0" + " donc le resultat est: " + result); 
    } else if (a === 0 && b > 0 && c > 0 && d !== 0){
        result = (d-c)/b;
        alert("tu es dans une equation de premier degre de type:" + b + "x" + "+" + c + "=" + d + " donc le resultat est: " + result);
    } else if (a === 0 && b > 0 && c < 0 && d !== 0) {
        result = (d-c)/b;
        alert("tu es dans une equation de premier degre de type:" + b + "x" + "-" + c + "=" + d + " donc le resultat est: " + result);
    } else if (a === 0 && b < 0 && c < 0 && d !== 0) {
        result = (d-c)/-b;
        alert("tu es dans une equation de premier degre de type:" + "-" + b + "x" + "-" + c + "=" + d + " donc le resultat est: " + result);
    } else if (a === 0 && b < 0 && c > 0 & d !== 0) {
        result = (d-c)/-(b);
        alert("tu es dans une equation de premier degre de type:" + "-" + b + "x" + "-" + c + "=" + d + " donc le resultat est: " + result);
    } else{
        alert("SORRY");
    }
})();