const initialPrice = document.querySelector("#initial-price");

const stocksQuantity = document.querySelector("#stocks-quantity");

const currentPrice = document.querySelector("#current-price");

const calculateBtn = document.querySelector("#calculate-btn");

const outputDisplay = document.querySelector("#output-display");


function calculateLossOrProfit (initial , quantity , current)
{

if(initial > current)
{
   var loss = (initial - current) * quantity;
   var lossPercentage = (loss/initial) * 10;

   console.log("loss is " + loss + " loss percentage is " + lossPercentage + "%")
}

else if(current > initial)
{

    var profit = (current - initial) * quantity;
    var profitPercentage = (profit/initial) * 10;

    console.log("profit is " + profit + " profit percentage is " + profitPercentage + "%")
    
}

else
{

    console.log("Neither Loss nor Profit")

}
}

calculateLossOrProfit(10,10,10)