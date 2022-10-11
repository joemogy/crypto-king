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
//getting the data from the API and displaying it on the page         
        //For Loop Starts
        coinsData.forEach((coin) => {
          cryptoCoin +="<tr>";
          // cryptoCoin +=`<td>${coin.uuid}</td>`;
          cryptoCoin +=`<td>${coin.rank}.</td>`;
          cryptoCoin +=`<td>${coin.symbol}</td>`;
          cryptoCoin +=`<td>${coin.name}</td>`;
          // cryptoCoin += `<td>${coin.color}</td>`;
          // cryptoCoin += `<td>${coin.iconUrl}</td>`but as a image
          cryptoCoin +=`<td><img src="${coin.iconUrl}"alt="coin icons"width="33px"height="33px"></td>`;
          cryptoCoin +=`<td>$${coin.marketCap}$</td>`;
          cryptoCoin +=`<td>$${coin.price}$</td>`;
          cryptoCoin +=`<td>${coin.btcPrice}BTC</td>`;
          // cryptoCoin +=`<td>${coin.listedAt}</td>`;
          cryptoCoin +=`<td>${coin.change}%</td>`;
          cryptoCoin +=`<td>.${coin.rank}.</td>`;
          // cryptoCoin +=`<td>${coin.sparkline}</td>`;
          // cryptoCoin +=`<td>${coin.coinrankingUrl}</td>`;but as a link
          // cryptoCoin +=`<td><a href="${coin.coinrankingUrl}"target="_blank">${coin.coinrankingUrl}</a></td>`;
          // cryptoCoin +=`<td>${coin.24hVolume}</td>`;
          // cryptoCoin +=`<td>${coin.tier}</td>`;
          // cryptoCoin +=`<td>${coin.total}</td>`;
          // cryptoCoin +=`<td>${coin.total24hVolume}</td>`;
          // cryptoCoin +=`<td>${coin.totalCoins}</td>`;
          // cryptoCoin +=`<td>${coin.totalExchanges}</td>`;
          // cryptoCoin +=`<td>${coin.totalMarketCap}</td>`;
          // cryptoCoin +=`<td>${coin.totalMarkets}</td>`;
          // cryptoCoin +=`<td>${coin.totalSupply}</td>`;
          "<tr>";
        });
        //For Loop Ends


        //displaying the data on the page 
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
//catching any errors
  .catch((error) => {
    console.log(error);
  });

//refresh page every minute//
  setTimeout(function(){ location.reload(); }, 60000);

//End of Script//