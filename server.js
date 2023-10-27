const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/users"))

app.listen(port, () => console.log(`http://localhost:${port}`));
