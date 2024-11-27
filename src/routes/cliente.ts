import express from 'express';
import { getClientesPage, createCliente } from '../controllers/clienteController';

const router = express.Router();

router.get('/clientes', getClientesPage);
router.post('/clientes', createCliente);

export default router;
