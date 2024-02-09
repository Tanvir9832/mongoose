import express from "express";
const app = express();
const post = 3000;
app.get("/Hi", (req, res) => {
    res.send("HELLO");
});
app.listen(post, () => {
    console.log("server is connected");
});
