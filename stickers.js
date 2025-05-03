// Face Sticker 1.0
function(instance, properties, context) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "image_url": "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa821d63e790a2b70ddeb996bbc284b53.cdn.bubble.io%2Ff1719235053893x141350392530504850%2F0e94dc33095d4a408204773531e1fda9_ComfyUI_temp_taqbr_00220_.png?w=512&h=&auto=compress&dpr=1.25&fit=max",
        "prompt": "masterpiece, best quality, highres",
        "negative_prompt": "(worst quality, low quality, normal quality:2)",
        "num_inference_steps": 18,
        "guidance_scale": 4,
        "instant_id_strength": 0.7,
        "ip_adapter_weight": 0.2,
        "ip_adapter_noise": 0.5,
        "image_size": "square_hd",
        "upscale": false,
        "upscale_steps": 10,
        "seed": null,
        "enable_safety_checker": true,
        "response_webhook_url": "response_webhook_url"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    var apiToken = "*********"; // Your API token here

    fetch(`https://run.aicado.ai/api/1.1/wf/face-to-sticker?api_token=${apiToken}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("API Response:", result);

            // Tüm yanıtı konsola yazdır
            console.log("Full Response:", result.response);

            // Prompt'u konsola yazdır
            console.log("Prompt:", "masterpiece, best quality, highres");

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
        .catch(error => {
            console.log('Error fetching output images:', error);

            // Test v1 Görsel olarak örnek bir output_image URL'si yazdır
            console.log("Prompt:", "masterpiece, best quality, highres");
            console.log("Output Image URL 1:", "https://example.com/output_image.png");

            // Test v1 Prompt'u görsel olarak konsola yazdır
            console.log("%cPrompt: masterpiece, best quality, highres", "font-size: 16px; color: blue;");
            console.log("%cOutput Image:", "font-size: 16px; color: green;");
            console.log("%c ", "font-size: 16px; background: url('https://example.com/output_image.png') no-repeat; padding: 50px;");
        });
}