import express from 'express';
import { getEnderecosPage, createEndereco } from '../controllers/enderecoController';

const router = express.Router();

router.get('/enderecos', getEnderecosPage);
router.post('/enderecos', createEndereco);

export default router;
