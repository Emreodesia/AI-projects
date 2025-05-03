    // Background Remove Result!! 2.0
    function(instance, properties, context) {

    
        var apiToken = "******";
        var raw = JSON.stringify({
            "target_image": properties.target_image,
            "source_image": properties.source_image,
            "response_webhook_url": properties.response_webhook_url
        });
    
        var runId = "R169SRsblzaFZD6XOu9B3MyB"; 
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',  
            headers: myHeaders,
            body: raw,   
            redirect: 'follow'
        };

          console.log("Background Remove 2.0");
            console.log("Target Image URL:", properties.target_image);
            console.log("Source Image URL:", properties.source_image);
            console.log("Response Webhook URL:", properties.response_webhook_url);
            




        // API çağrısı yapılıyor
        fetch(`https://run.aicado.ai/api/1.1/wf/background-remover-result?api_token=${apiToken}&run_id=${runId}`, requestOptions)
            .then(response => response.json())  
            .then(result => {
                console.log(result); 

                 // Output_image varsa ekrana yazdır
                 if (result.response && result.response.output_image) {
                    console.log("Output Image URL:", result.response.output_image);
                } else {
                    console.log("Output image not found in response.");
                }
            })
            .catch(error => console.log('Error fetching output image:', error));
            


    

    }


























    // Background Remove 1.0
    /*
    function(instance, properties, context) {

    
        var apiToken = "113c6eab2120c63fe441d40a5a514cacfc9de2fa8228e92140c310c9aeb53fb7df695dcb45807d0fb518cfa243c708dec39ac025829e63ab01edb9ff2c8d65e39381596cfb0e5d4340fb99dfdf20a9fcb21e0aa619beec92bc7694b7d6526af56125f9a54788a5cf5494c312efcd5d209a067e588e8af9a8e8bd300dbea8e310574c6bad087b5fb4a233b99f6b06312af4220e8825b1d6d7436b1a923f5707b7364923806af0956589bd71f2ef147fdcb2d55e0ee22cb55f4aef79477ce674bf85acfc0b834d1f89e08c4696c6e8d5d5a8aa616286a6963a56e1b492ad62c799ccdcf6e1ee580aa7a69b0d8494702fe2e9a0002b87644b30501fe81d1c0a8c192fc7b8424a6e7557b2ee72474d99dfbb9928d5360bdd4332378db83174151f7967a2789fba18df4841b4fdeac6fba2cac241a8b436cfb9910bb71c7910ca9fa8f0cc054765d35976ab12775c286a886ba9ab2fe3e686cb6a1dfef6ef18e26e7bbc7d7345a07072acc9cbeb5edc89b8d6ce5a0143313062cd8f2f46b20ed0c11f2c3a23b8d08fe754";
        var raw = JSON.stringify({
            "target_image": properties.target_image,
            "source_image": properties.source_image,
            "response_webhook_url": properties.response_webhook_url
        });
    
        var runId = "R169SRsblzaFZD6XOu9B3MyB"; 

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        // API çağrısı yapılıyor
        fetch(`https://run.aicado.ai/api/1.1/wf/background-remover-result?api_token=${apiToken}&run_id=${runId}`, requestOptions)
            .then(response => response.json())  // Yanıtı JSON formatında alıyoruz
            .then(result => {
                console.log(result);  // Sonuçları konsola yazdırıyoruz

                // Eğer output_image varsa, ekrana yazdır
                if (result.response && result.response.output_image) {
                    console.log("Output Image URL:", result.response.output_image);
                    // Görseli HTML'de göstermek için örnek:
                    document.body.innerHTML += `<img src="${result.response.output_image}" alt="Output Image"/>`;
                } else {
                    console.log("Output image not found in response.");
                }
            })
            .catch(error => console.log('error', error));  // Hata durumunda konsola yazdır

    }
    */









    // Background Remove 2.0
function(instance, properties, context) {

    var apiToken = "113c6eab2120c63fe441d40a5a514cacfc9de2fa8228e92140c310c9aeb53fb7df695dcb45807d0fb518cfa243c708dec39ac025829e63ab01edb9ff2c8d65e39381596cfb0e5d4340fb99dfdf20a9fcb21e0aa619beec92bc7694b7d6526af56125f9a54788a5cf5494c312efcd5d209a067e588e8af9a8e8bd300dbea8e310574c6bad087b5fb4a233b99f6b06312af4220e8825b1d6d7436b1a923f5707b7364923806af0956589bd71f2ef147fdcb2d55e0ee22cb55f4aef79477ce674bf85acfc0b834d1f89e08c4696c6e8d5d5a8aa616286a6963a56e1b492ad62c799ccdcf6e1ee580aa7a69b0d8494702fe2e9a0002b87644b30501fe81d1c0a8c192fc7b8424a6e7557b2ee72474d99dfbb9928d5360bdd4332378db83174151f7967a2789fba18df4841b4fdeac6fba2cac241a8b436cfb9910bb71c7910ca9fa8f0cc054765d35976ab12775c286a886ba9ab2fe3e686cb6a1dfef6ef18e26e7bbc7d7345a07072acc9cbeb5edc89b8d6ce5a0143313062cd8f2f46b20ed0c11f2c3a23b8d08fe754";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${apiToken}`);

    var raw = JSON.stringify({
        "target_image": properties.target_image,
        "source_image": properties.source_image,
        "response_webhook_url": properties.response_webhook_url
    });

    var requestOptions = {
        method: 'POST',  
        headers: myHeaders,
        body: raw,   
        redirect: 'follow'
    };

    console.log("Background Remove 2.0 - İşlem başlatılıyor...");
    console.log("Target Image URL:", properties.target_image);
    console.log("Source Image URL:", properties.source_image);
    console.log("Response Webhook URL:", properties.response_webhook_url);

    // **Adım 1: Arka plan kaldırma işlemini başlat, `runId` al**
    fetch("https://run.aicado.ai/api/1.1/wf/background-remover-start", requestOptions)
        .then(response => response.json())  
        .then(result => {
            console.log("API Yanıtı:", result);

            if (result.response && result.response.run_id) {
                var runId = result.response.run_id; //  run_id
                console.log("Gerçek run_id alındı:", runId);

                // 
                getResult(runId);
            } else {
                console.error("Run ID alınamadı!");
            }
        })
        .catch(error => console.log('Error:', error));


    // **Sonucu almak için ayrı bir fonksiyon oluşturduk**
    function getResult(runId) {
        var resultOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        console.log("Sonuç alınıyor... runId:", runId);

        fetch(`https://run.aicado.ai/api/1.1/wf/background-remover-result?api_token=${apiToken}&run_id=${runId}`, resultOptions)
            .then(response => response.json())  
            .then(result => {
                console.log("Sonuç:", result);

                if (result.response && result.response.output_image) {
                    console.log("Output Image URL:", result.response.output_image);
                    document.body.innerHTML += `<img src="${result.response.output_image}" alt="Output Image"/>`;
                } else {
                    console.log("Output image not found in response.");
                }
            })
            .catch(error => console.log('Error fetching output image:', error));
    }
}
