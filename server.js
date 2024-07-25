const express = require('express');
const app = express();
const port = 3000;

app.get('/api/:date?', (req, res) => {
const dateParam = req.params.date;
    let date;

    if (!dateParam) {
        date = new Date();
    } else if (!isNaN(dateParam)) {
        date = new Date(parseInt(dateParam));
    } else {
        date = new Date(dateParam);
    }

    if (date.toString() === "Invalid Date") {
        res.json({ error: "Invalid Date" });
    } else {
        res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    }
});
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});