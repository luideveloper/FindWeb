function geradorCNS(){
        $.ajax({
            'url': 'http://geradorapp.com/api/v1/cns/generate?token=2792a806f3b9ea1a2ac5ea94581a4b48',
            'method': "GET",
            'mode': 'cors',
            'dataType': 'json',
            'success': function(data){
                if (1==1) {
                document.getElementById('c1').value = data.data.number;
                document.getElementById('c2').value = data.data.number_formatted; 

            }
                console.log(data);
                
        }


    })
       
}