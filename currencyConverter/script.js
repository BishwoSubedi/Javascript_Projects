const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const drop=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form > button");
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")
const msg=document.querySelector(".msg")
window.addEventListener("load",()=>{
updateExchange()
})
for(let select of drop){
for(let currCode in countryList){
  let newOption=document.createElement("option")
  newOption.innerText=currCode;
  newOption.value=currCode;
  if(select.name==="from" &&currCode==="USD"){
    newOption.selected="selected";
  }
  else if(select.name==="to" &&currCode==="NPR"){
    newOption.selected="selected";
  }
  select.append(newOption)
  
}
select.addEventListener("change",(event)=>{
    updateFlag(event.target)
})
}

const updateFlag=(element)=>{
let currCode=element.value;
let countryCode=countryList[currCode]
let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`
 let img=element.parentElement.querySelector("img")
 img.src=newsrc
}

btn.addEventListener("click",(event)=>{
     event.preventDefault();
     updateExchange();
})

async function updateExchange(){
    let amount=document.querySelector(".amount input")
    let amnt=amount.value;
    if(amnt===""||amnt<1){
       amnt=1
       amount.value="1"
    }

    //  console.log(fromCurr.value,toCurr.value)
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response =await fetch(URL)
    let data=await response.json();
    const rate=data[toCurr.value.toLowerCase()]
    let finalAmount=amnt*rate
   //  console.log(finalAmount)
   msg.innerHTML=`${amnt} ${fromCurr.value} =${finalAmount} ${toCurr.value}`

}