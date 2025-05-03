//Swap Face 1.1.0 
function(instance, properties, context) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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

    //Swap Face 1.1.0
    var apiToken = "";

    // source_image ve target_image görsellerini konsola yazdır
    console.log("Source Image URL:", properties.source_image);
    console.log("Target Image URL:", properties.target_image);

    
    //Swap Face
    fetch("https://run.aicado.ai/api/1.1/wf/swap-face?api_token=" + apiToken, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("Initial API Response:", result);
           
            if (result.status === "success") {
                var getUrl = result.response.get_url;
                var runId = result.response.run_id;
                console.log("runId:", runId);

                // İkinci API çağrısı yapılıyor
                fetch(getUrl + "?run_id=" + runId + "&api_token=" + apiToken)
                    .then(response => response.json())
                    .then(result => {
                        console.log("Second API Response:", result);

                        // Output_image varsa ekrana yazdır
                        if (result.response && result.response.output_image) {
                            console.log("Output Image URL:", result.response.output_image);
                        } else {
                            console.log("Output image not found in response.");
                        }
                    })
                    .catch(error => console.log('Error fetching output image:', error));
            }
        })
        .catch(error => console.log('Error in initial API call:', error));
}


