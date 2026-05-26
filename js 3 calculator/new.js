let btn=document.querySelectorAll(".btn");
let display=document.querySelector(".display");
let string='';
let buttonarray=Array.from(btn);

buttonarray.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

    if(e.target.innerText=="DEL"){
        string=string.substring(0,string.length-1);
         display.value=string;


    }else if(e.target.innerText=="AC"){
        string='';
        display.value=string;


    }else if(e.target.innerText=="="){
        string=eval(string);
        display.value=string;
 } else{    string+=e.target.innerText;
    display.value=string;}

})

})






