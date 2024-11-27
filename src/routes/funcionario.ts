import express from 'express';
import { getFuncionariosPage, createFuncionario } from '../controllers/funcionarioController';

const router = express.Router();

router.get('/funcionarios', getFuncionariosPage);
router.post('/funcionarios', createFuncionario);

export default router;
