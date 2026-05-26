const dropdowns=document.querySelectorAll(".dropdown select")
const button=document.querySelector("button")

  
  const fromcurr=document.querySelector(".from select")
  const tocurr=document.querySelector(".to select")
  const msg=document.querySelector(".msg")


for(let select of dropdowns){
for(let code in countryList){
let newoption=document.createElement("option")
newoption.innerText=code;
newoption.value=code;
select.append(newoption);
if(select.name==="From"&& code==="USD"){
    newoption.selected="selected"
}else if(select.name==="To"&& code==="INR"){
    newoption.selected="selected"
}

}
select.addEventListener("change",(evt)=>{

updateflag(evt.target);

})
}

const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`
    let img=element.parentElement.querySelector("img")
    img.src=newsrc






}





button.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amountval = parseFloat(amount.value);

  if (!amountval || amountval < 1) {
    amountval = 1;
    amount.value = "1";
  }

  if (fromcurr.value === tocurr.value) {
    msg.innerText = "Same currency selected";
    return;
  }

  const url = `https://open.er-api.com/v6/latest/${fromcurr.value}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    let rate = data.rates[tocurr.value];

    if (!rate) {
      msg.innerText = "Rate not available ❌";
      return;
    }

    let finalAmount = (amountval * rate).toFixed(2);

    msg.innerText = `${amountval} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
  } catch (error) {
    console.log(error);
    msg.innerText = "Error fetching data ❌";
  }
});