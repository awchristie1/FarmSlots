console.log('test')


let reel1Value = 0
let reel2Value = 0
let reel3Value = 0

function runSlots(){

    for (n of document.getElementsByClassName('notif')){
        n.classList.add('hidden')
    }


    let reel1=document.getElementById('reel1');
    let reel2=document.getElementById('reel2');
    let reel3=document.getElementById('reel3');

    let result = calcWin();


        document.getElementById('winLose').innerText = result.winLose;
        document.getElementById('message').textContent = result.msg;


    let newReel2Value
    let newReel3Value
    let newReel1Value

    if(result.id==-1){
        do{
        newReel2Value= Math.trunc(Math.random()*8)
        newReel3Value= Math.trunc(Math.random()*8)
        newReel1Value= Math.trunc(Math.random()*8)
        }while(newReel1Value == newReel2Value && newReel2Value  == newReel3Value)
    }
    else{
        newReel2Value = result.id
        newReel3Value = result.id
        newReel1Value = result.id
    }

    

console.log(`${reel1Value} -> ${newReel1Value}`)
console.log(`${reel2Value} -> ${newReel2Value}`)
console.log(`${reel3Value} -> ${newReel3Value}`)

    let delayCounter = 0;
    const delayMS = 750;


    if(reel1Value== newReel1Value){
        let tempReel1Value
        do{
            tempReel1Value = Math.trunc(Math.random()*8)
        }while(tempReel1Value == reel1Value || tempReel1Value == newReel1Value)
        setTimeout(()=>{reel1.querySelector(`[data-slot='${tempReel1Value}']`)?.scrollIntoView();}, delayCounter * delayMS)
        delayCounter++
    }
    reel1Value = newReel1Value
    setTimeout(()=>{reel1.querySelector(`[data-slot='${reel1Value}']`)?.scrollIntoView();}, delayCounter * delayMS)
    delayCounter++








    if(reel2Value== newReel2Value){
        let tempReel2Value
        do{
            tempReel2Value = Math.trunc(Math.random()*8)
        }while(tempReel2Value == reel2Value || tempReel2Value == newReel2Value)
        setTimeout(()=>{reel2.querySelector(`[data-slot='${tempReel2Value}']`)?.scrollIntoView();}, delayCounter * delayMS)
        delayCounter++
    }
    reel2Value = newReel2Value
    setTimeout(()=>{reel2.querySelector(`[data-slot='${reel2Value}']`)?.scrollIntoView();}, delayCounter * delayMS)
    delayCounter++


    if(reel3Value== newReel3Value){
        let tempReel3Value
        do{
            tempReel3Value = Math.trunc(Math.random()*8)
        }while(tempReel3Value == reel3Value || tempReel3Value == newReel3Value)
        setTimeout(()=>{reel3.querySelector(`[data-slot='${tempReel3Value}']`)?.scrollIntoView();}, delayCounter * delayMS)
        delayCounter++
    }
    reel3Value = newReel3Value
    setTimeout(()=>{reel3.querySelector(`[data-slot='${reel3Value}']`)?.scrollIntoView();}, delayCounter * delayMS)
    delayCounter++


    setTimeout(()=>{
        if(!(result.id <0)){
            for (r of document.getElementsByClassName('reel')){
                r.classList.add('winning')
            }
            setTimeout(()=>{
                for (r of document.getElementsByClassName('reel')){
                    r.classList.remove('winning')
                }
            }, 2100)
        }
        for (n of document.getElementsByClassName('notif')){
            n.classList.remove('hidden')
        }
    }, (delayCounter-1) * delayMS)
    
}



{/* <div data-slot="0" class="slotStop">🌱 <div>Sunflower<br>Shoots</div></div>         5% 
<div data-slot="1" class="slotStop">🥤<div>Cup</div></div>                              1%
<div data-slot="2" class="slotStop">🍕<div>Sourdough<br>Pizza Dough</div></div>         5%
<div data-slot="3" class="slotStop">🍞<div>Sourdough<br>Loaf</div></div>                5%
<div data-slot="4" class="slotStop">🥚<div>Eggs</div></div>                             5%
<div data-slot="5" class="slotStop">🥬<div>Produce</div></div>                          5%
<div data-slot="6" class="slotStop">💲<div>$5 Dollars<br>Credit</div></div>                         3%
<div data-slot="7" class="slotStop">💲💲<div>$10 Dollars<br>Credit</div></div>                      2%
*/}

function calcWin(){
    let x = Math.trunc(Math.random()*100)

    if(0<=x&&x<5) 
        return { id:0, winLose:"WINNER!!!", msg:"Free Sunflower Shoots!"}
    if(x==5)
        return { id:1, winLose:"WINNER!!!", msg:"Free Woodeye Farm Cup!"}
    if(6<=x&&x<11)
        return { id:2, winLose:"WINNER!!!", msg:"Free Sourdough Pizza Dough"}
    if(11<=x&&x<16)
        return { id:3, winLose:"WINNER!!!", msg:"Free Free Sourdough Loaf!"}
    if(16<=x&&x<21)
        return { id:4, winLose:"WINNER!!!", msg:"Free Dozen of Eggs!"}
    if(21<=x&&x<26)
        return { id:5, winLose:"WINNER!!!", msg:"Free Item of Produce!"}
    if(26<=x&&x<29)
        return { id:6, winLose:"WINNER!!!", msg:"Five Dollars Off!"}
    if(26<=x&&x<29)
        return { id:7, winLose:"WINNER!!!", msg:"Ten Dollars Off!"}
    
    return { id:-1, winLose:"Better Luck Next Time!!!", msg:"Try again next week!"}
}
