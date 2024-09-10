const axios = require('axios')

(async () => {
    const data = await axios.get('https://broadband-ambassador-lobby-onto.trycloudflare.com/api/primary')
    console.log(data.data)
})