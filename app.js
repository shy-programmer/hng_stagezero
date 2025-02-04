const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())

let myEmail = "abdulazeezarowolo@gmail.com"
let gitRepo = "https://github.com/shy-programmer/hng_stagezero"

app.get('/', (req, res) => {
    let dateNow = new Date().toISOString()
    let response = {
        email: myEmail,
        current_datetime: dateNow,
        github_url: gitRepo
    }

    res.status(200).json(response)
})  

app.listen(port, () => {
    console.log(`server is running...`)
})





