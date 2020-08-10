const express = require('express');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "public")))

app.get("*", (req, res)=> {
    res.sendFile('./public/main', { root: __dirname })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))