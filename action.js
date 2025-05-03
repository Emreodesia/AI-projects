function(properties, context) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var apiToken = context.keys.api_token;

    var target_image = properties.target_image;
    var source_image = properties.source_image;
    var audio = properties.audio;
    var video = properties.source;
    var prompt = properties.prompt;


    // HTTPS kontrolü
    if (target_image && target_image.indexOf("https:") === -1) {
        target_image = "https:" + target_image;
    }
    if (source_image && source_image.indexOf("https:") === -1) {
        source_image = "https:" + source_image;
    }
    if (audio && properties_audio.indexOf("https:") === -1) {
        audio = "https:" + audio;
    }
    if (video && video.indexOf("https:") === -1) {
        video = "https:" + video;
    }

    var aiModels = {
        "swap_face": "https://run.aicado.ai/version-723fx/api/1.1/wf/swap-face",
        "text2_image": "https://run.aicado.ai/version-723fx/api/1.1/wf/text2image-stabilityai-sdxl",
        "face-to-sticker": "https://run.aicado.ai/version-723fx/api/1.1/wf/face-to-sticker",
        "generate_alt_text": "https://run.aicado.ai/version-723fx/api/1.1/wf/generate-alt-text",
        "face_retoucher": "https://run.aicado.ai/version-723fx/api/1.1/wf/face-retoucher",
        "clarity_upscaler": "https://run.aicado.ai/version-723fx/api/1.1/wf/clarity-upscaler",
        "object_remover": "https://run.aicado.ai/version-723fx/api/1.1/wf/auto-remove-anything", 
        "speech_text": "https://run.aicado.ai/version-723fx/api/1.1/wf/speech-to-text-to-download-file",
        "background_changer": "https://run.aicado.ai/version-723fx/api/1.1/wf/background-changer",
        "dress_room": "https://run.aicado.ai/version-723fx/api/1.1/wf/oot-dress",
        //IN_QUEUE da kaldı, BUNU DA ANLATLAYIM
        //Dress romm için send output kuralacak 
        "create_video": "https://run.aicado.ai/version-723fx/api/1.1/wf/hailuo-texttovideo",
        "text-to-speech": "https://run.aicado.ai/version-723fx/api/1.1/wf/text-to-speech",
        "sad_talker": "https://run.aicado.ai/version-723fx/api/1.1/wf/sad-talker", 
        // AICADO EKİBİ İLGİLNECEK, BNU ATLAYALIM
        "swap_face_video": "https://run.aicado.ai/version-723fx/api/1.1/wf/change-a-face-in-a-video", 
        // Run_id var 
        // İnference status:failed
        // Output yok
        // Log inference_status starting    
        "talk_image": "https://run.aicado.ai/version-723fx/api/1.1/wf/image-to-text"
    };

    var selectedModel = properties.select_ai2;
    var apiUrl = aiModels[selectedModel];


    if (!apiUrl) {
        return { "error": "Invalid AI Model Selected" };
    }


    var raw = {};

    switch (selectedModel) {
        case "swap_face":
            raw = JSON.stringify({
                "target_image": target_image,
                "source_image": source_image,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "text2_image":
            raw = JSON.stringify({
                "target_image": target_image,
                "source_image": source_image,
                "response_webhook_url": properties.response_webhook_url,
                "prompt": prompt,
                "num_outputs": 1,
                "num_inference_steps": 50,
                "guidance_scale": 7.5,
                "seed": null,
                "negative_prompt": "",
                "image_size": "square",
                "enable_safety_checker": true
            });
            break;
        case "face-to-sticker":
            raw = JSON.stringify({
                "response_webhook_url": properties.response_webhook_url,
                "image_url": target_image,
                "prompt": prompt,
                "negative_prompt": properties.negative_prompt,
                "num_inference_steps": 18,
                "guidance_scale": 4,
                "instant_id_strength": 0.7,
                "ip_adapter_weight": 0.2,
                "ip_adapter_noise": 0.5,
                "image_size": "square_hd",
                "upscale": false,
                "upscale_steps": 10,
                "seed": null,
                "enable_safety_checker": true
            });
            break;
        case "generate_alt_text":
            raw = JSON.stringify({
                "image": target_image,
                "prompt": prompt,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "face_retoucher":
            raw = JSON.stringify({
                "image": target_image,
                "prompt": prompt,
                "upscale_factor": 2,
                "negative_prompt": properties.negative_prompt,
                "creativity": 0.35,
                "resemblance": 0.6,
                "guidance_scale": 4,
                "num_inference_steps": 18,
                "enable_safety_checker": true,
                "seed": null,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "background_changer":
            raw = JSON.stringify({
                "prompt": prompt,
                "negative_prompt": "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation",
                "image": target_image,
                "sampler_name": "DPM++ SDE Karras",
                "steps": 20,
                "cfg_scale": 7,
                "denoising_strength": 0.75,
                "max_width": 1024,
                "max_height": 1024,
                "only_masked_padding_pixels": 4,
                "seed": null,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "create_video":
            raw = JSON.stringify({
                "prompt": prompt,
                "scheduler": "DDIMScheduler",
                "num_inference_steps": 30,
                "seed": null,
                "negative_prompt": "blurry",
                "response_webhook_url": properties.response_webhook_url,
                "width": 768,
                "height": 768
            });
            break;
        case "swap_face_video":
            raw = JSON.stringify({
                "source": video,
                "target": target_image,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "sad_talker":
            raw = JSON.stringify({
                "image_url": target_image,
                "upscale_factor": 2,
                "negative_prompt": "(worst quality, low quality, normal quality:2)",
                "creativity": 0.35,
                "resemblance": 0.6,
                "guidance_scale": 4,
                "num_inference_steps": 18,
                "enable_safety_checker": true,
                "seed": null,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "object_remover":
            raw = JSON.stringify({
                "prompt": prompt,
                "image": target_image,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "dress_room":
            raw = JSON.stringify({
                "model_image": target_image,
                "garment_image": source_image,
                "steps": 20,
                "guidance_scale": 2,
                "seed": 0,
                "response_webhook_url": properties.response_webhook_url,
                "category": "upperbody",
                "samples": 1
            });
            break;
        case "background_remover":
            raw = JSON.stringify({
                "image": target_image,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "clarity_upscaler":
            raw = JSON.stringify({
                "image": target_image,
                "prompt": prompt,
                "upscale_factor": 2,
                "negative_prompt": properties.negative_prompt,
                "creativity": 0.35,
                "resemblance": 0.6,
                "guidance_scale": 4,
                "num_inference_steps": 18,
                "enable_safety_checker": true,
                "seed": null,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "face_retoucher":
            raw = JSON.stringify({
                "image": target_image,
                "prompt": prompt,
                "upscale_factor": 2,
                "negative_prompt": properties.negative_prompt,
                "creativity": 0.35,
                "resemblance": 0.6,
                "guidance_scale": 4,
                "num_inference_steps": 18,
                "enable_safety_checker": true,
                "seed": null,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "speech_text":
            raw = JSON.stringify({
                "audio_path": audio,
                "model_name": "large-v2",
                "response_webhook_url": properties.response_webhook_url,
                "format": "srt",
                "language": "en",
                "youtube_urls": [
                    "https://youtube.com"
                ],
                "create_file_on_server": false
            });
            break;
        case "talk_image":
            raw = JSON.stringify({
                "image": target_image,
                "prompt": prompt,
                "top_p": 1,
                "temperature": 0.7,
                "max_tokens": 1024,
                "response_webhook_url": properties.response_webhook_url
            });
            break;
        case "text-to-speech":
            raw = JSON.stringify({
                "model": "tt1-1",//"model": "google-text-to-speech",
                "input": prompt,
                "response_webhook_url": properties.response_webhook_url,
                //"response_webhook_url":"https://aicado-api-test.bubbleapps.io/version-test/api/1.1/wf/get-response",
                "voice": "onyx",
                "speed": "1",
                "response_format": "mp3"
            });
            break;
        default:
            console.log("Error: AI model not found.");
            return;
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };






    return fetch(apiUrl + "?api_token=" + apiToken, requestOptions)
        .then(response => response.json())
        .then(result => {

            // run_id değerini kontrol et ve döndür

            if (result.response && result.response.run_id) {
                return { result: JSON.stringify({ "run_id": result.response.run_id }) };
            } else {
                return { result: JSON.stringify({ "status": "error", "message": apiToken }) };
            }

        })
        .catch(error => {
            return { result: JSON.stringify({ "status": "error", "message": error.message }) };
        });


}

























































