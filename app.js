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
   var lossPercentage = (loss / (initial * quantity)) * 100;

   if(loss === 0)
   {
    outputDisplay.innerText = "Quantity cannot be zero"; 
   }

   else
   {
   mainSpace.style.backgroundColor= 'red';


   outputDisplay.innerText = "Ohhho No!! You've Incured A Loss 😔 \n Your loss is " + loss.toFixed(2) + " loss percentage is " + lossPercentage.toFixed(2) + "%";
}
}

else if(current > initial)
{

    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial * quantity)) * 100;

  if(profit === 0)
  {
    outputDisplay.innerText = "Quantity cannot be zero";  
  }
  else
  {

    mainSpace.style.backgroundColor = 'green';

    outputDisplay.innerText = "Yayy !!!! You've Made A Profit 🤩 \n Your profit is " + profit.toFixed(2) + " profit percentage is " + profitPercentage.toFixed(2)  + "% "
}  
}



else
{
    mainSpace.style.backgroundColor = 'yellow';
   outputDisplay.innerText = "You've neither made a profit nor incurred a loss.";

}
}

function clickHandler()
{

    var initP =(initialPrice.value);
    var qnty = (stocksQuantity.value);
    var curr = (currentPrice.value);

    calculateLossOrProfit(initP, qnty , curr);


}

calculateBtn.addEventListener('click', clickHandler)

console.log(currentPrice)