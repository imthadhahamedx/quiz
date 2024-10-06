let display=document.getElementById("display");
let btnTry=document.getElementById("btnTry");
let btnOk=document.getElementById("btnOk");
    
let randomNumber;
btnTry.addEventListener("click", ()=>{   
    randomNumber=Math.round(Math.random()*100);
    console.log(randomNumber);
});

let count=0;
btnOk.addEventListener("click", ()=>{
    if(count<3){    
        let number=parseInt(document.getElementById("display").value);
        if(number===randomNumber){
            alert("Congratulations! You won");
            document.getElementById("randNumber").innerHTML=randomNumber;
        }else if(number<randomNumber){
            alert(number+ " is Less than Random Number. Try Again!");
        }else if(number>randomNumber){
            alert(number+ " is Greater than Random Number. Try Again!");
        }
        count++;
        if(count===3){
            alert("Game Over! You lost");
            document.getElementById("randNumber").innerHTML=randomNumber;
        }
    }else{
        alert("Game Over! You lost");
        document.getElementById("randNumber").innerHTML=randomNumber;
    }
});