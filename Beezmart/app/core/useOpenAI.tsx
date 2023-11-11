// import { API_KEY } from '@env';



export function useOpenAI () {
    
    const apiKey = "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";

    async function getCatalogized(image) {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        };


        const payload = {
            "model": "gpt-4-vision-preview",
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Describe main physical object in JUST one word"
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": image
                            }
                        }
                    ]
                }
            ],
            "max_tokens": 300
        };

        return await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        })
        .then(response => response.json()) // Parse the JSON response
        .catch(error => console.error('Error:', error)); // Log any errors

    }

    return {getCatalogized}

}