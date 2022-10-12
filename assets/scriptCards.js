var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinrankingdfa261fe08b063ff065d629eeffaa2e6d7911c62340a941a"

//fetching data from the API and converting it to JSON format 
fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
  //getting the response from the API and converting it to JSON format and then to an object 
    .then((response) => {
    if (response.ok) {
        response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;


//looping through the object and getting the data we need 
        if (coinsData.length > 0) {
            var cryptoCoin = "";
        }





        //For Loop Starts
//getting the data from the API and displaying it on the page in the table format
        //For Loop Starts

//for loop starts for indexCards.html
//getting the data from the API and displaying it on the page in the cards format
coinsData.forEach((coin) => {
    cryptoCoin +="<div class='card'>";
    cryptoCoin +=`<div class='card-header'>${coin.rank}.</div>`;
    cryptoCoin +=`<div class='card-body'>`;
    cryptoCoin +=`<h5 class='card-title'>${coin.symbol}</h5>`;
    cryptoCoin +=`<p class='card-text'>${coin.name}</p>`;
    cryptoCoin +=`<img src="${coin.iconUrl}"alt="coin icons"width="33px"height="33px">`;
    cryptoCoin +=`<p class='card-text'>$${coin.marketCap}$</p>`;
    cryptoCoin +=`<p class='card-text'>$${coin.price}$</p>`;
    cryptoCoin +=`<p class='card-text'>${coin.btcPrice}BTC</p>`;
    cryptoCoin +=`<p class='card-text'>${coin.change}%</p>`;
    cryptoCoin +=`</div>`;
    cryptoCoin +=`<div class='card-footer'>${coin.rank}.</div>`;
    cryptoCoin +="</div>";
  });
  //For Loop Ends
  document.getElementById("cryptoCoin").innerHTML = cryptoCoin;
});
}
})
.catch((error) => {
console.log(error);
});

//for loop ends for indexCards.html
