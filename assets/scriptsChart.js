$(document).ready(function () {
    // Define currency codes
    'use strict';
    const bitcoin = "Qwsogvtv82FCd"
    const ethereum = "razxDUgYGNAdQ"
    const litecoin = "D7B1x_ks7WhV5"
    var uuid = bitcoin;
    // Define timeframe code
    var time = "24h";
    // Define empty chart globally, then call getCoinData to populate default chart (btc)
    let myChart;
    getCoinData(uuid, time);
    // ######
    // Functions
    function getCoinData(currency, timeframe) {
        console.log("getCoinData Success");
        var baseUrl = "https://api.coinranking.com/v2/coin/" + currency + "?timePeriod=" + timeframe;
        var proxyUrl = "https://cors-anywhere.herokuapp.com/";
        var apiKey = "coinrankingdfa163fe08b063ff065d619eeffaa1e6d7933c61340a943a"
        $(`#${timeframe}`).prop("checked", true).css("border", "4px solid green");
        fetch(`${proxyUrl}${baseUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${apiKey}`,
                'Access-Control-Allow-Origin': "*"
            }
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        console.log("getCoinDataResponse Success");
                        handlerFunction(json.data);
                    })
                }
            })
    }
    function handlerFunction(data) {
        console.log(data);
        if (myChart) {
            console.log("destroying old chart.");
            myChart.destroy();
            $("#currentPrice").empty();
            $("img").attr("src", "#");
            $("#percentChange").empty();
            $("#infoContainer").empty();
        }
        let coinsData = data.coin;
        // Add the selected currency's name and icon, along with current price.
        var price = Math.round((parseFloat(coinsData.price) + Number.EPSILON) * 100) / 100;
        $("#currency").text(coinsData.name);
        $("img").attr("src", coinsData.iconUrl);
        $("#currentPrice").text(price);

        // ######
        // Add percent change over specified time period.
        // ######

        var change = Math.round((parseFloat(coinsData.change) + Number.EPSILON) * 100) / 100;
        $("#percentChange").text(change)
        if (change > 0) { //Checks if the change is positive or negative, then assigns color to the text
            $("#percentChange").css("color", "green").prepend("+").append("%");
        }
        else {
            $("#percentChange").css("color", "red").append("%");
        }
        var description = `<p>${coinsData.description}</p>`;
        $("#infoContainer").append(description);

        // ######
        // Graph
        // ######

        var ctx = document.getElementById('myChart')
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                datasets: [{
                    data: coinsData.sparkline,
                    label: coinsData.symbol,
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: coinsData.color,
                    borderWidth: 4,
                    pointBackgroundColor: coinsData.color,
                },
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            callback: function (value, index, values) {
                                return '$' + value;
                            }
                        }
                    }]
                },
                legend: {
                    display: true,
                }
            }
        })
    }
    // ######
    // Currency type selector
    $('#cryptoList').change(function () {
        var selectedValueCurrency = parseInt($(this).val());

        //Depends on Value respective function gets called.

        switch (selectedValueCurrency) {
            case 0:
                console.log("radio BTC success");
                uuid = bitcoin;
                getCoinData(uuid, time);
                break;
            case 1:
                console.log("radio ETH success");
                uuid = ethereum;
                getCoinData(uuid, time);
                break;
            case 2:
                console.log("radio LTC success");
                uuid = litecoin;
                getCoinData(uuid, time);
                break;
            // case 3:
            //     console.log("radio XRP success");
            //     uuid = "XRP";
            //     getCoinData(uuid, time);
            //     break;
            // case 4:
            //     console.log("radio BCH success");
            //     uuid = "BCH";
            //     getCoinData(uuid, time);
            //     break;
            // case 5:
            //     console.log("radio EOS success");
            //     uuid = "EOS";
            //     getCoinData(uuid, time);
            //     break;
            // case 6:
            //     console.log("radio XLM success");
            //     uuid = "XLM";
            //     getCoinData(uuid, time);
            //     break;
            // case 7:
            //     console.log("radio ADA success");
            //     uuid = "ADA";
            //     getCoinData(uuid, time);
            //     break;
            // case 8:
            //     console.log("radio TRX success");
            //     uuid = "TRX";
            //     getCoinData(uuid, time);
            //     break;
            // case 9:
            //     console.log("radio USDT success");
            //     uuid = "USDT";
            //     getCoinData(uuid, time);
            //     break;
            // case 10:
            //     console.log("radio LINK success");
            //     uuid = "LINK";
            //     getCoinData(uuid, time);
            //     break;
            // case 11:
            //     console.log("radio XMR success");
            //     uuid = "XMR";
            //     getCoinData(uuid, time);
            //     break;
            // case 12:
            //     console.log("radio DASH success");
            //     uuid = "DASH";
            //     getCoinData(uuid, time);
            //     break;
            // case 13:
            //     console.log("radio NEO success");
            //     uuid = "NEO";
            //     getCoinData(uuid, time);
            //     break;
            // case 14:
            //     console.log("radio XTZ success");
            //     uuid = "XTZ";
            //     getCoinData(uuid, time);
            //     break;
            // case 15:
            //     console.log("radio ETC success");
            //     uuid = "ETC";
            //     getCoinData(uuid, time);
            //     break;
            // case 16:

        }
    });
    // ######
    // Timeframe selector
    $('input:radio[name=options]').on("click", function () {
        if (time != $("input[name=options]:checked").val()) {
            time = $("input[name=options]:checked").val();
            console.log(time);
            getCoinData(uuid, time);
        }
    })
})