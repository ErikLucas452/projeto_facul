import { db } from '../db';
import { Request, Response } from 'express';

export const getClientesPage = async (req: Request, res: Response) => {
  const database = await db;
  const clientes = await database.all('SELECT * FROM Cliente');

  res.render('cliente', { clientes });
};

export const createCliente = async (req: Request, res: Response) => {
  const { nome, telefone, email, endereco } = req.body;
  const database = await db;

  await database.run(
    'INSERT INTO Cliente (nome, telefone, email, endereco) VALUES (?, ?, ?, ?)',
    [nome, telefone, email, endereco]
  );

  res.redirect('/clientes');
};
