function checkerPlaca(placa){
        $.ajax({
            'url': 'https://apicarros.com/v2/consultas/'+placa+'/f63e1e63dd231083d38ce929984aac7d',
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (data.codigoRetorno === "0"){
                    document.getElementById('placa').value = data.placa;
                    document.getElementById('situacao').value = data.situacao;

                    document.getElementById('alarme').value = data.dataAtualizacaoAlarme;
                    document.getElementById('roubo').value = data.dataAtualizacaoRouboFurto;

                    document.getElementById('ano').value = data.ano;
                    document.getElementById('anomodelo').value = data.anoModelo;

                    document.getElementById('modelo').value = data.modelo;
                    document.getElementById('marca').value = data.extra.marca_modelo.marca

                    document.getElementById('subg').value = data.extra.marca_modelo.sub_segmento
                    document.getElementById('cor').value = data.cor;
                    
                    document.getElementById('chassi').value = data.extra.chassi;
                    document.getElementById('dataatt').value = data.extra.data_atualiacao;
                    
                    
                    document.getElementById('municipio').value = data.municipio;
                    document.getElementById('estado').value = data.uf;

                    document.getElementById('motor').value = data.extra.motor;   
                    document.getElementById('potencia').value = data.extra.potencia;

                    document.getElementById('combustivel').value = data.extra.combustivel.combustivel;
                    document.getElementById('tpessoa').value = data.extra.tipo_doc_faturado.tipo_pessoa;
                } else{
                    document.getElementById('placa').innerHTML = "Não encontrada";
                }
                console.log(data);
        }
    })
}