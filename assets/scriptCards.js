var baseUrl = "https://api.coinranking.com/v2/coins?limit=1000"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
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
//looping through the object and getting the data we need 
        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }

        //parse the data and display it in the card in the HTML
        for (var i = 0; i < coinsData.length; i++) {
          cryptoCoin += `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${coinsData[i].name}</h5>
                <p class="card-text">${coinsData[i].symbol}</p>
                <p class="card-text">${coinsData[i].price}</p>
                <p class="card-text">${coinsData[i].change}</p>
                <p class="card-text">${coinsData[i].marketCap}</p>
              </div>
            </div>
          `;
        }
        document.getElementById("cryptoCard").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  }
  );

