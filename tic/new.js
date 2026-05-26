let box=document.querySelectorAll(".box");
let reset=document.querySelector(".down");
let msg=document.querySelector("p");
let winnerout=document.querySelector(".msgc");
let newbtn =document.querySelector(".new");

let turnO=true;
const winpattern  =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [8,4,0],
    [6,4,2]

]
const disablebox=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }

}
const enablebox=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }

}


const resetgame=()=>{

    turnO=true;
    enablebox();
     winnerout.classList.add("hide");
    


}

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO){
            box.innerText="O"
            turnO=false;
            box.style.color="blue";
        }else{
            box.innerText="X";
            turnO=true;
            box.style.color="red";
        }
        box.disabled=true;
        check();
    })
})
const showwinner=(winner)=>{
    winnerout.classList.remove("hide");
    msg.innerText=`Congratulation winner is ${winner}`;
    disablebox();
}
 
const check=()=>{

    for(let pattern of winpattern){
        
        let posval1=box[pattern[0]].innerText
         let posval2=box[pattern[1]].innerText
          let posval3=box[pattern[2]].innerText
          if(posval1!="" &&posval2!="" &&posval3!="" ){
            if(posval1===posval2&&posval2===posval3){
                console.log("winner",posval1)

                showwinner(posval1);
                
            }
          }

    }

let isGameOver=false;

  let allFilled = Array.from(box).every((b) => b.innerText !== "");
    if (allFilled && !isGameOver) {

        winnerout.classList.remove("hide");
        msg.innerText = "It's a Draw!";
        msg.classList.add("draw");
        isGameOver = true;
        
    }

}





reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);




    
