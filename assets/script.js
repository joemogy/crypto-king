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


          // cryptoCoin +=`<td>${coin.uuid}</td>`;
          // cryptoCoin +=`<td>${coin.rank}</td>`; but with backgroung color of coin.color and outline/border of coin.color
          cryptoCoin +=`<td style="background-color:${coin.color};text-shadow: 1px 1px 1px white;outline:3px solid black;">${coin.rank}.</td>`;
          //cryptoCoin +=`<td style="font-size:18px;color:${coin.color};outline:3px solid ${coin.color}">${coin.symbol}</td>`but with link to href="${coin.coinrankingUrl}"target="_blank">${coin.coinrankingUrl}
          // cryptoCoin +=`<td style="id="myInput2";font-size:18px;color:${coin.color};outline:3px solid ${coin.color}"><a href="${coin.coinrankingUrl}"target="_blank">${coin.symbol}</a></td>`;

          // cryptoCoin +=`<td>${coin.name}</td>`;
          // cryptoCoin +=`<td>${coin.symbol}</td>`;
//getting coin.symbol and getting coin.color and changing the text color of the coin ticker  and the out line to coin.color 3px solid
          cryptoCoin +=`<td style="font-size:18px;color:${coin.color};outline:3px solid ${coin.color}">${coin.symbol}</td>`
          // cryptoCoin +=`<td><span class="coin-symbol" style="color: ${coin.color}">${coin.symbol}</span></td>`;
          // cryptoCoin +=`<td>${coin.name}</td>`;
//getting coin.name and getting coin.color and changing the text color of the coin name and the out line to coin.color 3px solid
          cryptoCoin +=`<td style="font-size:18px;color:${coin.color};outline:3px solid ${coin.color}">${coin.name}</td>`
          // cryptoCoin +=`<td>${coin.color}</td>`;

          // cryptoCoin += `<td>${coin.iconUrl}</td>`but as a image with a width of 33px and height of 33px and a outline of img and a border of table column of 3px solid black
          cryptoCoin +=`<td style="font-size:18px;outline:3px solid black"><img src="${coin.iconUrl}"alt="coin icons"width="33px"height="33px"; style="outline:3px solid ${coin.color}"></td>`;
          // cryptoCoin +=`<td>${coin.marketCap}</td>`; BUT WITH BACKGROUND COLOR OF THE COIN COLOR AND TEXT COLOR OF THE black COLOR with text shadow of white 1px 1px 1px and outline of 3px solid black
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">$${coin.marketCap}$</td>`;
          // cryptoCoin +=`<td>${coin.price}</td>`; BUT WITH BACKGROUND COLOR OF THE COIN COLOR AND TEXT COLOR OF THE black COLOR with text shadow of white 1px 1px 1px and outline of 3px solid black
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${coin.price}$</td>`;
          // cryptoCoin +=`<td>${coin.btcprice}</td>`; BUT WITH BACKGROUND COLOR OF THE COIN COLOR AND TEXT COLOR OF THE black COLOR with text shadow of white 1px 1px 1px and outline of 3px solid black
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${coin.btcPrice}BTC</td>`;
          // cryptoCoin +=`<td>${coin.listedAt}</td>`;
          // cryptoCoin +=`<td>${coin.change}</td>`; BUT WITH BACKGROUND COLOR OF THE COIN COLOR AND TEXT COLOR OF THE black COLOR with text shadow of white 1px 1px 1px and outline of 3px solid black
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">${coin.change}%</td>`;
          // cryptoCoin +=`<td>${coin.rank}</td>`; BUT WITH BACKGROUND COLOR OF THE COIN COLOR AND TEXT COLOR OF THE black COLOR with text shadow of white 1px 1px 1px and outline of 3px solid black
          cryptoCoin +=`<td style="filter: drop-shadow(1px 1px 1px black);font-size:18px;background-color:${coin.color};color:black;text-shadow: 1px 1px 1px white;outline:3px solid black">.${coin.rank}.</td>`;
          // cryptoCoin +=`<td>${coin.sparkline}</td>`;
          // cryptoCoin +=`<td>${coin.coinrankingUrl}</td>`;but as a link
          // cryptoCoin +=`<td><a href="${coin.coinrankingUrl}"target="_blank">${coin.coinrankingUrl}</a></td>`;
          // cryptoCoin +=`<td>${stat.14hVolume}</td>`;
          // cryptoCoin +=`<td>${coin.tier}</td>`;
          // cryptoCoin +=`<td>${coin.total}</td>`;
          // cryptoCoin +=`<td>${coin.total14hVolume}</td>`;
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
  //search bar for the table 
  //functiion to search the table and save the value of the search bar in a variable LOCAL STORAGE
  // javascript search bar seaches through table data and saves data to local storage

        function searchTable() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1,2];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
        
        //save the value of the search bar to local storage and on page indexCards.html load get the value of the search bar from local storage 
        function saveSearch() {
          var search = document.getElementById("myInput2").value;
          localStorage.setItem("search", search);
        }
        function loadSearch() {
          var search = localStorage.getItem("search");
          document.getElementById("myInput2").value = search;
        }
//search bar for the table ends



//refresh page every minute//
  setTimeout(function(){ location.reload(); }, 180000);

//End of Script//