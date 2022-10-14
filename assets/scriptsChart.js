$(document).ready(function () {
    // Define currency codes
    'use strict';
    const bitcoin = "Qwsogvtv82FCd"
    const ethereum = "razxDUgYGNAdQ"
    const usdt = "HIVsRcGKkPFtW"
    const usdc = "aKzUVe4Hh_CON"
    const bnb = "WcwrkfNI4FUAe"
    const xrp = "-l8Mn2pVlRs-p"
    const busd = "vSo2fu9iE1s0Y"
    const ada = "qzawljRxB5bYu"
    const sol= "zNZHO_Sjf"
    const doge = "a91GCGd_u96cF"
    const dot = "25W7FG7om"
    const matic = "uW2tk-ILY0ii"
    const shib = "xz24e0BjL"
    const dai = "MoTuySvg7"
    const trx = "qUhEFk1I61atv"
    const weth = "Mtfb0obXVh59u"
    const uni = "_H5FVG9iW"
    const wbtc = "x4WXHge-vvFY"
    const avax = "dvUj0CzDZ"
    const okb = "PDKcptVnzJTmN"
    const cake = "ncYFcP709"
    const litecoin = "D7B1x_ks7WhV5"
    const atom = "Knsels4_Ol-Ny"
    const ftt = "NfeOYfNcl"
    const etc = "hnfQfsYfeIGUQ"
    const xmr = "3mVx2FX_iJFp5"
    const xlm = "f3iaFeCKEmkaZ"
    const algo = "TpHE2IShQw-sJ"
    const btcb = "9_jH48RBW"
    const cro = "65PHZTpmE55b"
    const bch = "ZlZpzOJo43mIo"
    const ens = "SbWqqTui-"
    const near = "DCrsaMv68"
    const lunc = "AaQUAs2Mc"
    const wemix = "08CsQa-Ov"
    const flow = "QQ0NCmjVq"
    const qnt = "bauj_21eYVwso"
    const hbar = "jad286TjB"
    const fil = "ymQub4fuB"
    const vet = "FEbS54wxo4oIl"
    const ht = "DXwP4wF9ksbBO"
    const mana = "tEf7-dnwV3BXS"
    const icp = "aMNLwaUbY"
    const frax = "KfWtaeV1W"
    const imx = "Z96jIvLU7"
    const xtz = "fsIbGOEJWbzxG"
    const egld = "omwkOTglq"
    const sand = "pxtKbG5rg"
    const chz = "GSCt2y6YSgO26"
    const ldo = "Pe93bIOD2"




    // Define currency names

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
                    // select crypto currency to display on html
                    // looping through the object and getting the data we need COIN NAME and then appending it to the OPTIONS DROPDOWN MENU SECTION and then we are calling the handlerFunction to get the data for the graph




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
                console.log("radio Bitcoin success");
                uuid = bitcoin;
                getCoinData(uuid, time);
                break;
            case 1:
                console.log("radio Ethereum success");
                uuid = ethereum;
                getCoinData(uuid, time);
                break;
            case 2:
                console.log("radio Tether USD success");
                uuid = usdt;
                getCoinData(uuid, time);
                break;
            case 3:
                console.log("radio USDC success");
                uuid = usdc;
                getCoinData(uuid, time);
                break;
            case 4:
                console.log("radio Binance Coin success");
                uuid = bnb;
                getCoinData(uuid, time);
                break;
            case 5:
                console.log("radio XRP success");
                uuid = xrp;
                getCoinData(uuid, time);
                break;
            case 6:
                console.log("radio Binance USD success");
                uuid = busd;
                getCoinData(uuid, time);
                break;
            case 7:
                console.log("radio Cardano success");
                uuid = ada;
                getCoinData(uuid, time);
                break;
            case 8:
                console.log("radio Solana success");
                uuid = sol;
                getCoinData(uuid, time);
                break;
            case 9:
                console.log("radio Dogecoin success");
                uuid = doge;
                getCoinData(uuid, time);
                break;
            case 10:
                console.log("radio Polkadot success");
                uuid = dot;
                getCoinData(uuid, time);
                break;
            case 11:
                console.log("radio Polygon success");
                uuid = matic;
                getCoinData(uuid, time);
                break;
            case 12:
                console.log("radio Shiba Inu success");
                uuid = shib;
                getCoinData(uuid, time);
                break;
            case 13:
                console.log("radio Dai success");
                uuid = dai;
                getCoinData(uuid, time);
                break;
            case 14:
                console.log("radio TRON success");
                uuid = trx;
                getCoinData(uuid, time);
                break;
            case 15:
                console.log("radio Wrapped Ether success");
                uuid = weth;
                getCoinData(uuid, time);
                break;
            case 16:
                console.log("radio Uniswap success");
                uuid = uni;
                getCoinData(uuid, time);
                break;
            case 17:
                console.log("radio Wrapped BTC success");
                uuid = wbtc;
                getCoinData(uuid, time);
                break;
            case 18:
                console.log("radio Avalanche success");
                uuid = avax;
                getCoinData(uuid, time);
                break;
            case 19:
                console.log("radio OKB success");
                uuid = okb;
                getCoinData(uuid, time);
                break;
            case 20:
                console.log("radio PancakeSwap success");
                uuid = cake;
                getCoinData(uuid, time);
                break;
            case 21:
                console.log("radio Litecoin success");
                uuid = litecoin;
                getCoinData(uuid, time);
                break;
            case 22:
                console.log("radio Cosmos success");
                uuid = atom;
                getCoinData(uuid, time);
                break;
            case 23:
                console.log("radio FTX Token success");
                uuid = ftt;
                getCoinData(uuid, time);
                break;
            case 24:
                console.log("radio Ethereum Classic success");
                uuid = etc;
                getCoinData(uuid, time);
                break;
            case 25:
                console.log("radio Monero success");
                uuid = xmr;
                getCoinData(uuid, time);
                break;
            // case 26:
            //     console.log("radio Stellar success");
            //     uuid = xlm;
            //     getCoinData(uuid, time);
            //     break;
            // // case 27:
            //     console.log("radio Algorand success");
            //     uuid = algo;
            //     getCoinData(uuid, time);
            //     break;
            // case 28:
            //     console.log("radio Bitcoin BEP2 success");
            //     uuid = btcb;
            //     getCoinData(uuid, time);
            //     break;
            // case 29:
            //     console.log("radio Cronos success");
            //     uuid = cro;
            //     getCoinData(uuid, time);
            //     break;
            // case 30:
            //     console.log("radio Bitcoin Cash success");
            //     uuid = bch;
            //     getCoinData(uuid, time);
            //     break;
            // case 31:
            //     console.log("radio EnergySwap success");
            //     uuid = ens;
            //     getCoinData(uuid, time);
            //     break;
            // case 32:
            //     console.log("radio NEAR Protocol success");
            //     uuid = near;
            //     getCoinData(uuid, time);
            //     break;
            // case 33:
            //     console.log("radio Terra Classic success");
            //     uuid = lunc;
            //     getCoinData(uuid, time);
            //     break;
            // case 34:
            //     console.log("radio WEMIX TOKEN success");
            //     uuid = wemix;
            //     getCoinData(uuid, time);
            //     break;
            // case 35:
            //     console.log("radio Flow success");
            //     uuid = flow;
            //     getCoinData(uuid, time);
            //     break;
            // case 36:
            //     console.log("radio Quant success");
            //     uuid = qnt;
            //     getCoinData(uuid, time);
            //     break;
            // case 37:
            //     console.log("radio Hedera success");
            //     uuid = hbar;
            //     getCoinData(uuid, time);
            //     break;
            // case 38:
            //     console.log("radio Filecoin success");
            //     uuid = fil;
            //     getCoinData(uuid, time);
            //     break;
            // case 39:
            //     console.log("radio VeChain success");
            //     uuid = vet;
            //     getCoinData(uuid, time);
            //     break;
            // case 40:
            //     console.log("radio Huobi Token success");
            //     uuid = ht;
            //     getCoinData(uuid, time);
            //     break;
            // case 41:
            //     console.log("radio Decentraland success");
            //     uuid = mana;
            //     getCoinData(uuid, time);
            //     break;
            // case 42:
            //     console.log("radio Internet Computer (DFINITY) success");
            //     uuid = icp;
            //     getCoinData(uuid, time);
            //     break;
            // case 43:
            //     console.log("radio Frax success");
            //     uuid = frax;
            //     getCoinData(uuid, time);
            //     break;
            // case 44:
            //     console.log("radio Immutable X success");
            //     uuid = imx;
            //     getCoinData(uuid, time);
            //     break;
            // case 45:
            //     console.log("radio Tezos success");
            //     uuid = xtz;
            //     getCoinData(uuid, time);
            //     break;
            // case 46:
            //     console.log("radio Elrond success");
            //     uuid = egld;
            //     getCoinData(uuid, time);
            //     break;
            // case 47:
            //     console.log("radio The Sandbox success");
            //     uuid = sand;
            //     getCoinData(uuid, time);
            //     break;
            // case 48:
            //     console.log("radio Chiliz success");
            //     uuid = chz;
            //     getCoinData(uuid, time);
            //     break;
            // case 49:
            //     console.log("radio Lido DAO Token success");
            //     uuid = ldo;
            //     getCoinData(uuid, time);
            //     break;
            
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