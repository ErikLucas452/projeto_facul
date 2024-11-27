
import { db } from '../db';
import { Request, Response } from 'express';

export const getUsuariosPage = async (req: Request, res: Response) => {
  const database = await db;
  const usuarios = await database.all('SELECT * FROM Usuario');
  res.render('usuario', { usuarios });
};

export const createUsuario = async (req: Request, res: Response) => {
  const { username, senha, dfCadastro, tipoAcesso } = req.body;
  const database = await db;

  await database.run(
    `INSERT INTO Usuario (username, senha, dfCadastro, tipoAcesso) 
     VALUES (?, ?, ?, ?)`,
    [username, senha, dfCadastro, tipoAcesso]
  );

  res.redirect('/usuarios');
};
