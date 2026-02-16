const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors({
  origin: function (origin, callback) {
    if (origin === "http://127.0.0.1:5500" || origin === null || origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Conexão MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/gestorSolar")
  .then(() => {
    console.log("✅ Ligação ao MongoDB estabelecida com sucesso.");
    app.listen(3000, () => console.log("Servidor a correr na porta 3000"));
  })
  .catch((err) => {
    console.error("❌ Erro ao ligar ao MongoDB:", err);
    process.exit(1); 
  });


const monitorizacaoRoutes = require('./routes/monitorizacao');
const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes); 
app.use("/api/installations", require("./routes/installation"));
app.use("/api/monitorizacao", monitorizacaoRoutes);
app.use("/api/leituras", require("./routes/leituras"));

app.listen(3000, () => console.log("Servidor a correr na porta 3000"));
