import express from 'express';
import { getUsuariosPage, createUsuario } from '../controllers/usuarioController';

const router = express.Router();

router.get('/usuarios', getUsuariosPage);
router.post('/usuarios', createUsuario);

export default router;
