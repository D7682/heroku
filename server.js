const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.use("/people", require("./routes/people"));


app.get('/', (req, res) => {
    res.send("Hello")
})




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})