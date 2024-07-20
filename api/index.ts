const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.get("/caller-id", (req, res) => {
    let callerId = uuidv4().replace(/-/g, ''); // Remove hyphens
    callerId = callerId.substring(0, 10); // Shorten the UUID

    res.json({ callerId });
});

app.listen(3001, () => console.log("Listening on port 3001"));

module.exports = app;
