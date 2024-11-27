
import { db } from '../db';
import { Request, Response } from 'express';

export const getFuncionariosPage = async (req: Request, res: Response) => {
  const database = await db;
  const funcionarios = await database.all('SELECT * FROM Funcionario');
  res.render('funcionario', { funcionarios });
};

export const createFuncionario = async (req: Request, res: Response) => {
  const { nome, telefone, email, endereco, salario } = req.body;
  const database = await db;

  await database.run(
    `INSERT INTO Funcionario (nome, telefone, email, endereco, salario) 
     VALUES (?, ?, ?, ?, ?)`,
    [nome, telefone, email, endereco, salario]
  );

  res.redirect('/funcionarios');
};
