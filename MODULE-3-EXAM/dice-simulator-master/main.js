//  Module 3 exam
'use strict'

//Global variables
let numDi1 =0;
let numDi2 =0;
let numDi3 =0;
let numDi4 =0;
let numDi5 =0;
let numDi6 =0;
// Event listeners 
    document.getElementById ('play-btn').addEventListener('click', placeBet)
    document.getElementById ('purchase-btn').addEventListener('click', buyRiches)
// Event function

    function placeBet (){
        console.log ('place-bet');
        // generate random numbers 
        let randDi = Math.random ();
        // simulate results 
        if (randDi < 0.16){
            //role dice
            let (numDi <0.16 )
             console ("numDi1");
                numDi1++;
                document.getElementById ('Di1').innerHTML = numDi1
                document.getElementById ('player-die').innerHTML += '<img src=images/1.png>';
        } else if ( randDi < 0.16) {
            console.log ("numDi2");
            numDi2++;
            document.getElementById ('Di2').innerHTML = numDi2;
            document.getElementById ('player-die').innerHTML += '<img src=images/2.png>';   
        } else if (randDi < 0.16) {
            console.log ("numDi3");
            numDi3++
            document.getElementById ('Di3').innerhtml = numDi3;
            document.getElementById ('player-die').innerHTML +='<img src=images/3.png>';
        } else if (randDi < 0.16) {
            console.log ("numDi4");
            numDi4++
            document.getElementById ("Di4").innerHTML = numDi4;
            document.getElementById ('player-die').innerhtml += '<img src=images/4.png>';
        } else if (randDi < 0.16) {
            console.log ("numDi5")
            numDi5++
            document.getElementById ("Di5").innerHTML = numDi5;
            document.getElementById ('playerd-die').innerHTML = '<img src=images/5.png>';    
        }   else if (randDi < 0.16) {
            console.log ("numDi6");
            numDi6++
            document.getElementById ('Di6').innerHTML = numDi6;
            document.getElementById ('player-die').innerhtml = '<img src=images/6.png>'

        }


        }

    
