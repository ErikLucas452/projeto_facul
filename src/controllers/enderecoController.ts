import { db } from '../db';
import { Request, Response } from 'express';

export const getEnderecosPage = async (req: Request, res: Response) => {
  const database = await db;
  const enderecos = await database.all('SELECT * FROM Endereco');

  res.render('endereco', { enderecos });
};

export const createEndereco = async (req: Request, res: Response) => {
  const { logradouro, uf, estado, cep, cidade, numero, complemento } = req.body;
  const database = await db;

  await database.run(
    `INSERT INTO Endereco (logradouro, uf, estado, cep, cidade, numero, complemento) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [logradouro, uf, estado, cep, cidade, numero, complemento]
  );

  res.redirect('/enderecos');
};
