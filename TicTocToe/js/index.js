const cells= document.querySelectorAll(".cell")
let resetBtn= document.getElementById("reset-btn")
let currentPlyer,win,draw,winningPlayer;
 function initialize(){
     currentPlyer="X";
     win=false;
     draw=false;
     winningPlayer=null;
     cells.forEach((cell    )=>{
        // cell.innerText=index
        cell.innerText=" "
       cell.addEventListener("click",handleClick,{
        once:true, //event litener wil be remove after one click
       })
    })
 }
 resetBtn.addEventListener("click",initialize)
 initialize();
let winPattern=[
    //row 
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //column
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //diagonal
    [0,4,8],
    [2,4,6],

]


function handleClick(){
//   console.log(this)
this.innerHTML=currentPlyer;
 checkWin()
 if(win) alert("Win By " + winningPlayer)
 else if(win===false && draw===true) alert ("It's Draw")
 
 currentPlyer= currentPlyer==="X"?"O":"X"
}

function checkWin(){
    let data=[]
    cells.forEach((cell)=>{
        data.push(cell.innerText)
    })
    // console.log(data)
    winPattern.forEach((pattern)=>{
        const [a,b,c]=pattern
        if(data[a]&&data[b]&&data[c]){
        if(data[a]===data[b]&&data[b]===data[c]){
            win=true;
            winningPlayer=currentPlyer;
            return;
        }
    }
    })
    // console.log(data)
    if(!data.includes("")&&!win){
        //draw
        draw=true;
        return;
    }
}