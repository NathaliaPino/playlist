const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.send("Hello Word");
});

app.listen(port, () =>
  console.log(`Servidor rodando em: http://localhost:${port}`)
);
