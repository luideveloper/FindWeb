function checkerDDD(ddd){
        $.ajax({
            'url': 'https://brasilapi.com.br/api/ddd/v1/'+ddd,
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1==1){
                    document.getElementById('estado').value = data.state;
                } else{
                    document.getElementById('estado').value = data.state;
                }
                //console.log(data);
        }
    })
}