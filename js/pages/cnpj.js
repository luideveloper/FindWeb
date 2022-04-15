function checkerCnpj(cnpj){

        $.ajax({

            'url': 'https://www.receitaws.com.br/v1/cnpj/'+cnpj,
            'type': "GET",
            'dataType': 'jsonp',
            'success': function(data){
                if (data.nome == undefined){
                    alert(data.status + ' ' + data.message)
                } else{
                    document.getElementById('razao').value = data.nome;
                    document.getElementById('fantasia').value = data.fantasia;
                    document.getElementById('logradouro').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('numero').value = data.numero;
                    document.getElementById('cep').value = data.cep;
                    document.getElementById('telefone').value = data.telefone;
                    document.getElementById('municipio').value = data.municipio;
                    document.getElementById('uf').value = data.uf;
                    document.getElementById('situacao').value = data.situacao;
                    document.getElementById('email').value = data.email;
                    document.getElementById('capital_social').value = data.capital_social;   
                    document.getElementById('porte').value = data.porte;   
                    document.getElementById('abertura').value = data.abertura;   
                }
                //console.log(data);
        }
    })
}