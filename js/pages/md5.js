function checkerMD5(md5){
        $.ajax({
            'url': 'https://api.hashify.net/hash/md5/hex?value='+md5,
            'type': "GET",
            'dataType': 'json',
            'success': function(data){
                if (1==1){
                    document.getElementById('hash').value = data.Digest;
                    document.getElementById('tipo').value = data.Type;
                } else{

                }
                //console.log(data);
        }
    })
}