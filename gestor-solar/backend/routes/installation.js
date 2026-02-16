const express = require("express");
const multer = require("multer");
const Installation = require("../models/Installation");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Caminho seguro: "uploads/" se estiveres dentro da pasta backend
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Cliente pode registar nova instalação
router.post("/", auth("Cliente"), async (req, res) => {
  try {
    const { nomeCliente, localizacao, dadosTecnicos } = req.body;
    const nova = new Installation({
      clienteId: req.user.id,
      nomeCliente,
      localizacao,
      dadosTecnicos
    });
    await nova.save();
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
});

// Tecnico pode pesquisar instalações
router.get("/", auth("Tecnico"), async (req, res) => {
  const { nome, id } = req.query;
  let filtro = {};
  if (nome) filtro.nomeCliente = { $regex: nome, $options: 'i' };
  if (id) filtro._id = id;
const insts = await Installation.find(filtro).populate("validadoPor", "nome email");
  res.json(insts);
});

// Tecnico faz upload do certificado
// Tecnico faz upload do certificado
router.post("/:id/certificado", auth("Tecnico"), upload.single("certificado"), async (req, res) => {
  const inst = await Installation.findById(req.params.id);
  if (!inst) return res.status(404).json({ erro: "Instalação não encontrada" });
  if (!req.file) return res.status(400).json({ erro: "Ficheiro não recebido" });

  inst.certificadoPath = req.file.path;
  inst.certificadoValido = true;
  inst.validadoPor = req.user.id; 
  inst.dataValidacao = new Date(); 

  await inst.save();

  const instPopulada = await Installation.findById(inst._id).populate("validadoPor", "nome email");
  res.json(instPopulada);
});


module.exports = router;
