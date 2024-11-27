import express from 'express';
import { getServicosPage, createServico } from '../controllers/servicoController';

const router = express.Router();

router.get('/servicos', getServicosPage);
router.post('/servicos', createServico);

export default router;
