function btc(){
        $.ajax({
            'url': 'https://www.mercadobitcoin.net/api/btc/ticker',
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1===1){
                    document.getElementById('high').value = data.ticker.high;
                    document.getElementById('low').value = data.ticker.low;
                    document.getElementById('vol').value = data.ticker.vol;
                    document.getElementById('last').value = data.ticker.last;
                    document.getElementById('buy').value = data.ticker.buy;
                    document.getElementById('sell').value = data.ticker.sell;
   
                } else{
                    
                }
                //console.log(data);
        }
    })
}