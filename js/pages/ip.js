function checkerIp(ip){
        $.ajax({
            'url': 'https://ipapi.co/'+ip+'/json/',
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1==1){
                    document.getElementById('pais').value = data.country_name;
                    document.getElementById('ctn').value = data.continent_code;
                    document.getElementById('codep').value = data.country_code;
                    document.getElementById('coder').value = data.region_code;
                    document.getElementById('regiao').value = data.region;
                    document.getElementById('cidade').value = data.city;
                    document.getElementById('cep').value = data.postal;
                    document.getElementById('latitude').value = data.latitude;
                    document.getElementById('longitude').value = data.longitude;
                    document.getElementById('provedor').value = data.org;
                    
                } else{
                    document.getElementById('pais').value = data.country_name;
                }
                console.log(data);
        }
    })
}