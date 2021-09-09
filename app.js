const initialPrice = document.querySelector("#initial-price");

const stocksQuantity = document.querySelector("#stocks-quantity");

const currentPrice = document.querySelector("#current-price");

const calculateBtn = document.querySelector("#calculate-btn");

const outputDisplay = document.querySelector("#output-display");

const mainSpace = document.querySelector("main");


function calculateLossOrProfit (initial , quantity , current)
{

   

if(initial > current)
{
   var loss = (initial - current) * quantity;
   var lossPercentage = (loss/initial) * 10;

   mainSpace.style.backgroundColor= 'red';


   outputDisplay.innerText = "Ohhho No!! You Incured A Loss \n Your loss is " + loss.toFixed(2) + " loss percentage is " + lossPercentage.toFixed(2) + "%";
}

else if(current > initial)
{

    var profit = (current - initial) * quantity;
    var profitPercentage = (profit/initial) * 10;

  

    mainSpace.style.backgroundColor = 'green';

    outputDisplay.innerText = "Yayy !!!! You made a profit \n Your profit is " + profit.toFixed(2) + " profit percentage is " + profitPercentage.toFixed(2)  + "% "
    
}

else
{
    mainSpace.style.backgroundColor = 'yellow';
   outputDisplay.innerText = "You neither made a profit nor incurred a loss.";

}
}

function clickHandler()
{

    var initP = initialPrice.value;
    var qnty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateLossOrProfit(initP, qnty , curr);


}

calculateBtn.addEventListener('click', clickHandler)