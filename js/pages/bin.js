function checkerBin(bin){
        $.ajax({
            'url': 'https://lookup.binlist.net/'+bin,
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1 == 1){
                    document.getElementById('bandeira').value = data.scheme;
                    document.getElementById('tipo').value = data.type;
                    document.getElementById('nivel').value = data.brand;
                    document.getElementById('banco').value = data.bank.name;
                    document.getElementById('pais').value = data.country.name;
                    document.getElementById('numero').value = data.bank.phone;
                } else{
                    document.getElementById('bandeira').value = "Bin não encontrada";
                    document.getElementById('tipo').value = "Bin não encontrada";
                    document.getElementById('nivel').value = "Bin não encontrada";
                    document.getElementById('pais').value = "Bin não encontrada";
                    document.getElementById('numero').value = "Bin não encontrada";
                }
                //console.log(data);
        }
    })
}