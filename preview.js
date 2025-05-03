function(instance, properties, context) {
    const aiType = properties.select_ai;

    // Her AI modeline özel metin ve renk
    const aiOptions = {
        "none": {
            title: "CHOOSE AN AI",
            subtitle: "Select a model",
            description: `
            <div style="text-align: center;">
                <div style="display: inline-block; text-align: left;">
                   Pick an AI model to see its features.<br>
                   You can visit aicado.ai to obtain a token.<br>
                   Please enter your token 
                </div>
            </div>`,
            color: "linear-gradient(135deg,rgb(114, 114, 114))"
        },
        "swap_face": {
            title: "SWAP YOUR FACE",
            subtitle: "Transform faces instantly using AI",
            description: `1 Enter value into "Image 1" and "Image 2" fields.
           <br> 2.To get the output, use "image_output" state.  
            `,
           // color: "linear-gradient(135deg, #aafd7f, #fcff6d)"
            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "face-to-sticker": {
            title: "FACE TO STICKER",
            subtitle: "Turn your images into stickers",
            description: `1. Enter value into "Image 1" and "Text 1" fields.
            <br> 2. To get the output, use "image_output_list" state.`,
           color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "text2_image": {
            title: "TEXT TO IMAGE",
            subtitle: "Create  AI-generated images from text.",
            description: `1. Enter value into "Text 1" fields.
            <br> 2. To get the output, use "image_output_list" state.            
            `,
           color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "dress_room": {
            title: "VIRTUAL DRESS ROOM",
            subtitle: "Allows you to change your clothes.",
            description: `1. Enter value into "Image 1" and "Image 2" fields.
             <br> Please enter image 1 and image 2.
              <br> 2. To get the output, use "image_output_list" state. 
              
            `,
            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "generate_alt_text": {
            title: "ALT TEXT GENERATOR",
            subtitle: "Generate  image descriptions.",
            description: `1. Enter value into "Image 1" fields.
              <br> 2. To get the output, use "text_output" state. 
              `,

            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "art_qr": {
            title: "ARTISTIC QR CODE",
            subtitle: "Generate  QR codes.",
            description: ` 1. Enter value into "Text 1" fields.
             <br> 2. To get the output, use "text_output" state. 
            `,
            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "create_video": {
            title: "AI VIDEO CREATOR",
            subtitle: "Turn text  into AI-generated videos",
            description: `1. Enter value into "Text 1" fields.
             <br> 2. To get the output, use "video_output" state.`,
            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "speech_text": {
            title: "SPEECH TO TEXT",
            subtitle: "Transcribe speech into text with AI accuracy.",
            description: `1. Enter value into "Audio 1" fields.
            <br> 2. To get the output, use "text_output" state.
            
            .`,
            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "clarity_upscaler": {
            title: "IMAGE UPSCALER",
            subtitle: "Improve image clarity and upscale low-resolution photos.",
            description: `1. Enter value into "Image 1" fields.
            <br> 2. To get the output, use "image_output" state. 
          
            `,
            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        },
        "face_retoucher": {
            title: "FACE RETOUCHER",
            subtitle: "Smooth skin and enhance facial features instantly.",
            description: `1. Enter value into "Image 1" fields.
            <br>2.To get the output, use "image_output" state.            
           
            .`,
            color: "linear-gradient(135deg, #ff6a00, #ee0979)"
        }
    };

    // Seçilen AI modeline göre stil ve metni belirle
    const selectedAI = aiOptions[aiType] || {
        title: "UNKNOWN AI",
        subtitle: "SELECT AN OPTION",
        description: "Please choose an AI model to continue.",
        color: "linear-gradient(135deg, #333333, #000000)"
    };

    instance.canvas.empty();

    // HTML yapısı
    instance.canvas.append(`
        <div style="
            width:100%;
            height:400px;
            padding: 20px;
            background: ${selectedAI.color};
            color:white;
            font-family: Arial, sans-serif;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
        "
        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 8px 16px rgba(0, 0, 0, 0.4)';"
        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 6px 12px rgba(0, 0, 0, 0.3)';"
        >
            <div style="font-size: 24px; font-weight: bold; text-transform: uppercase;">${selectedAI.title}</div>
            <div style="font-size: 16px; font-weight: bold; opacity: 0.9;">${selectedAI.subtitle}</div>
            <div style="font-size: 14px; opacity: 0.8; margin-top: 5px;">${selectedAI.description}</div>
        </div>
    `);
}



