//api
var baseUrl = "https://api.coinranking.com/v2/coins?limit=1000"
//proxy url server
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
//api key
var apiKey = "coinrankingdfa163fe08b063ff065d619eeffaa1e6d7933c61340a943a"

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
//looping through the object and getting the data we need COIN NAME 
//and then appending it to the OPTIONS DROPDOWN MENU SECTION 
        
        if (coinsData.length > 0) {
          var cryptoCoin = "";}
        //For Loop Starts
//getting the data from the API and displaying it on the page in the table format         
        //For Loop Starts
        coinsData.forEach((coin) => {
          //cryptoCoin +="<tr>";
          cryptoCoin +='<tr>';
          cryptoCoin +=`<td style="background-color:${coin.color};text-shadow: 1px 1px 1px white;outline:3px solid black;">${coin.rank}.</td>`;
          cryptoCoin +=`<td style="font-size:18px;color:${coin.color};outline:3px solid ${coin.color}">${coin.symbol}</td>`
          cryptoCoin +=`<td style="font-size:18px;color:${coin.color};outline:3px solid ${coin.color}">${coin.name}</td>`
          cryptoCoin +=`<td style="font-size:18px;outline:3px solid black"><img src="${coin.iconUrl}"alt="coin icons"width="33px"height="33px"; style="outline:3px solid ${coin.color}"></td>`;
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${coin.marketCap}$</td>`;
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${Math.round((parseFloat(coin.price) + Number.EPSILON) * 1000000000) / 1000000000}$</td>`;
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${Math.round((parseFloat(coin.btcPrice) + Number.EPSILON) * 1000000000) / 1000000000}BTC</td>`;
          if(coin.change > 0){
            cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:#66ff33;color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${coin.change}%</td>`;
          }else{
            cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color: #ff3333;color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${coin.change}%</td>`;
          }

          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">.${coin.rank}.</td>`;
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
  setTimeout(function(){ location.reload(); }, 180000);

//End of Script//