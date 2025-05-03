// Text to Image Stability AI XL
function(instance, properties, context) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
       // "prompt": properties.prompt || "An astronaut riding a rainbow unicorn, cinematic, dramatic",
        "prompt": "An astronaut riding a rainbow unicorn, cinematic, dramatic",
        "num_outputs": 1,
        "num_inference_steps": 50,
        "guidance_scale": 7.5,
        "seed": null,
        "negative_prompt": "",
        "response_webhook_url": "",
        "image_size": "square",
        "enable_safety_checker": true
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    var apiToken = "*********"; // Your API token here

    fetch(`https://run.aicado.ai/api/1.1/wf/text2image-stabilityai-sdxl?api_token=${apiToken}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("API Response:", result);

            // Tüm yanıtı konsola yazdır
            console.log("Full Response:", result.response);

            // Output_images varsa ekrana yazdır
            if (result.response && result.response.output_images && result.response.output_images.length > 0) {
                result.response.output_images.forEach((image, index) => {
                    console.log(`Output Image URL ${index + 1}:`, image);
                    // Görseli HTML'de göstermek için örnek:
                    document.body.innerHTML += `<img src="${image}" alt="Output Image ${index + 1}"/>`;
                });
            } else {
                console.log("Output images not found in response.");
            }
        })
        .catch(error => console.log('Error fetching output images:', error));
}




