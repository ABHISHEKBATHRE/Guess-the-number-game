   let randomnumber=Math.floor(Math.random()*100+1);
        let submitbutton=document.querySelector("#sub");
        let previousattempt=document.querySelector("#prevattempt");
        let attemptremaining=document.querySelector("#remaining");
        let message=document.querySelector("#mess");
        let userguess=document.querySelector("#guessednum");
        let box=document.querySelector("#box");
        let attemptnum=1;
        let canplay=true;
        
        if(canplay)
        {   
           submitbutton.addEventListener('click',(e)=>{
            e.preventDefault();
            let guessednumber=parseInt(userguess.value);
            
            isvalid(guessednumber);
           })
        }
        let isvalid=(guessednumber)=>{
             if(guessednumber<1)
             {
                alert("Please enter a number greater than 1");
             }
             else if(guessednumber>100)
             {
                alert("Please enter a number less than 100");
             }
             else if(isNaN(guessednumber))
             {
                alert("Please enter a valid number");
             }
             else{
                 if(attemptnum==11)
                 {
                    display(`Your attempts are over and the correct number is ${randomnumber}`);
                    endgame();
                 } 
                 else{
                updatepara(guessednumber);
                check(guessednumber);
                 }
             }
        }
        let check=(guessednumber)=>{
            if(randomnumber==guessednumber)
            {
                display(`Congratulations,You won the game`);
                endgame();
            }
            else if(randomnumber>guessednumber)
            {
                display(`Number is too low`);
            }
            else 
            {
                display(`Number is too high`);
            }
        }
        let display=(text)=>{
              message.innerHTML=`${text}`;
        }
        let p= document.createElement("p");
        let endgame=()=>{
            userguess.value="";
            userguess.setAttribute("disabled","");
            previousattempt.innerHTML="";
            p.id="endgame"
            p.innerHTML="<h3 id=startga > Game Over.Please Click here to restart the game </h3>.";
            p.style.textDecoration="underline";
            box.appendChild(p);
           canplay=false;
           newgame();
        }
        let newgame=()=>{
            let startgame=document.querySelector("#startga");
            startgame.addEventListener("click",()=>{
                randomnumber=Math.floor(Math.random()*100+1);
                attemptnum=1;
                attemptremaining.innerHTML=`${11-attemptnum}`;
                userguess.removeAttribute("disabled");
                canplay=true;
                p.innerHTML="";
                display("");
            })
        }
          let updatepara=(guessednumber)=>{
            userguess.value="";
            previousattempt.innerHTML+=`${guessednumber} `;
            attemptnum++;
            attemptremaining.innerHTML=`${11-attemptnum}`;
          }
   