const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/clientes', authMiddleware('Gestor Operacoes'), async (req, res) => {
  try {
    const clientes = await User.find({ role: 'Cliente' });

    const clientesComDados = clientes.map(cliente => {
      const producao = parseFloat((Math.random() * 100).toFixed(2));
      const consumo = parseFloat((Math.random() * 100).toFixed(2));
      const creditos = parseFloat((producao - consumo).toFixed(2));

        return {
    clienteId: cliente._id, 
    nome: cliente.email.split('@')[0],
    email: cliente.email,
    producao,
    consumo,
    creditos
      };
    });

    res.json(clientesComDados);
  } catch (error) {
    console.error('Erro ao obter clientes:', error);
    res.status(500).json({ message: 'Erro ao obter dados dos clientes' });
  }
});

module.exports = router;
