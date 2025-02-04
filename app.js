const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())

app.get('/', (req, res) => {
    let dateNow = new Date().toISOString()
    res.status(200).json({
        email: "abdulazeezarowolo@gmail.com",
        current_datetime: dateNow,
        github_url: "https://github.com/shy-programmer"
    })
})  

app.listen(port, () => {
    console.log(`server is running...`)
})





