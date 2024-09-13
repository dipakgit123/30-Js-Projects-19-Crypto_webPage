
$(document).ready(function() {
   
    var btc = document.getElementById("bitcoin");
    var eth = document.getElementById("ethereum");
    var dog = document.getElementById("dogecoin");

   
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin",
        "method": "GET",
        "headers": {}
    };

  
    $.ajax(settings).done(function(response) {
        
        var bitcoin = response.find(coin => coin.id === 'bitcoin');
        var ethereum = response.find(coin => coin.id === 'ethereum');
        var dogecoin = response.find(coin => coin.id === 'dogecoin');

        if (bitcoin) {
            btc.textContent = `$${bitcoin.current_price}`;
        }

        if (ethereum) {
            eth.textContent = `$${ethereum.current_price}`;
        }

        if (dogecoin) {
            dog.textContent = `$${dogecoin.current_price}`;
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("AJAX request failed: " + textStatus + ", " + errorThrown);
    });
});
