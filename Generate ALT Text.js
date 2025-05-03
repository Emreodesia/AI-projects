function(instance, properties, context) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var apiToken = "*********"; // Your API token here

    var imageUrl = "https://picsum.photos/200";
    var prompt = "";

    var raw = JSON.stringify({
        "image": imageUrl,
        "prompt": prompt
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://run.aicado.ai/api/1.1/wf/generate-alt-text?api_token=" + apiToken, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("API Response:", result);

            if (result && result.response) {
                console.log("Run ID: " + result.response.run_id);
                console.log("Prompt: " + prompt);
            } else {
                console.log("API cevabı boş veya hatalı.");
            }
        })
        .catch(error => console.log('error', error));
}