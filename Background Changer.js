//Background Changer
function(instance, properties, context) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "prompt": "RAW photo, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3",
        "negative_prompt": "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation",
        "image": "",
        "sampler_name": "DPM++ SDE Karras",
        "steps": 20,
        "cfg_scale": 7,
        "denoising_strength": 0.75,
        "max_width": 1024,
        "max_height": 1024,
        "only_masked_padding_pixels": 4,
        "seed": null,
        "response_webhook_url": "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F95cccf8161a54e107ffcf29811489ca3.cdn.bubble.io%2Ff1708928843240x188583934373662840%2Fjapanese-warrior.png?w=512&h=&auto=compress&dpr=1.25&fit=max"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    var apiToken = "*********";

    fetch(`https://run.aicado.ai/api/1.1/wf/background-changer?api_token=${apiToken}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("Background Changer Response:", result);

            if (result.body && result.body.status === "success") {
                var runId = result.body.response.run_id;
                var getUrl = result.body.response.get_url;

                // API çağrısı başarılıysa, sonuçları almak için ikinci bir fetch yapabiliriz
                return fetch(`${getUrl}?run_id=${runId}&api_token=${apiToken}`);
            } else {
                throw new Error("Background Changer API failed");
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log("Final Background Changer Response:", result);

            if (result.body && result.body.status === "success") {
                console.log("Image URL:", result.body.response.image);
                document.body.innerHTML += `<img src="${result.body.response.image}" alt="Output Image"/>`;
            }
        }
        )

        .catch(error => console.log("Error:", error));
        console.log("Run ID:", runId);
        console.log("Get URL:", getUrl);
        console.log("Test 1");
        console.log("İmage", İmage);
   
}










