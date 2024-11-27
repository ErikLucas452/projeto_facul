import { db } from '../db';
import { Request, Response } from 'express';

export const getServicosPage = async (req: Request, res: Response) => {
  const database = await db;
  const servicos = await database.all('SELECT * FROM Servico');

  res.render('servico', { servicos });
};

export const createServico = async (req: Request, res: Response) => {
  const { nome, valor } = req.body;
  const database = await db;

  await database.run('INSERT INTO Servico (nome, valor) VALUES (?, ?)', [nome, valor]);

  res.redirect('/servicos');
};
