function checkerBanco(banco){
        $.ajax({
            'url': 'https://brasilapi.com.br/api/banks/v1/'+banco,
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1==1){
                    document.getElementById('ispb').value = data.ispb;
                    document.getElementById('name').value = data.name;
                    document.getElementById('code').value = data.code;
                    document.getElementById('fullName').value = data.fullName;
                } else{

                }
                //console.log(data);
        }
    })
}