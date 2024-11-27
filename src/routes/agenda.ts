import express from 'express';
import { getAgendasPage, createAgenda } from '../controllers/agendaController';

const router = express.Router();

router.get('/agenda', getAgendasPage);
router.post('/agenda', createAgenda);

export default router;
