const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=> {
    res.sendfile(path.join(__dirname, 'public','main.html'))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))